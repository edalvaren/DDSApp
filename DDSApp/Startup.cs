using DDSApp.Areas.Abstractions;
using DDSApp.Areas.Repositories;
using DDSApp.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using DDSApp.Models; 
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace DDSApp
{
    public class Startup
    {
        private string _jwtSecret = null;

        /// <summary>
        /// Dependency injection of server configuration
        /// </summary>
        /// <param name="configuration"> Configuration called in pre-build by program entry point. </param>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        /*This method gets called by the runtime. Use this method to add services to the container.
            these are my dependency injections */
        /// <summary>
        /// Method Adds Services to the Controller. These are my Dependency Injections
        ///
        ///The services added to this app are :
        ///----------------CORS - for Cross Origin request authentication
        ///----------------Cookie Policy Options
        ///----------------UserService - for retrieving users from MongoDb Database
        ///----------------SPA for React Js Integration
        ///----------------MVC - Model View Controller Support
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {

            _jwtSecret = Configuration["JWTSECRET"];
            var jwtLifespan = 2592000;
            #region Cookies and CORS
            services.Configure<CookiePolicyOptions>(options =>
            {
                options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = Microsoft.AspNetCore.Http.SameSiteMode.None;
            });

            services.AddCors(options => options.AddPolicy("CorsPolicy",
                builder =>
                {
                    builder.AllowAnyMethod().AllowAnyHeader()
                           .AllowCredentials()
                           .WithOrigins(
                        "http://localhost:5000",
                        "http://localhost:3000",
                           "http://spiraldocs.com",
                           "http://www.spiraldocs.com",
                           "https://spiraldocs.com",
                           "https://www.spiraldocs.com",
                           "https://157.230.221.251"); 
                }));


            #endregion

            #region Database
            
            /* This maps to the Azure Database in directdrive.database.windows.net .. Database: FileDB
             Connection string is stored in the appsecrets.json for development. Saved as an environment variable for production
             TODO Store Secrets Securely using NGINX Vault 
             */ 
            services.AddDbContext<SpiralDocsContext>
                (options => options.UseSqlServer(Configuration.GetConnectionString("FILEDB")));
            #endregion
            #region Authentication 

            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = false,
                            ValidateAudience = false,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,

                            IssuerSigningKey = new SymmetricSecurityKey(
                                Encoding.UTF8.GetBytes(_jwtSecret)
                            )
                        };
                    });


            #endregion


            // services.AddSingleton<Microsoft.Extensions.Hosting.IHostedService, ExampleService>();
            services.AddScoped<IUserRepository, UserRepository>();

            services.AddSingleton<IAuthService>(
                    new AuthService(_jwtSecret, jwtLifespan)
                );

            //these two services retrieve documents from mongodb 
            services.AddScoped<UserService>();
            services.AddScoped<SpiralDocService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2)
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    options.SerializerSettings.Converters.Add(new StringEnumConverter()); 
                });

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
            services.AddHttpClient();

            // Node Services
            services.AddNodeServices(options =>
            {
                options.ProjectPath = "./Services/";
            }
            );

            //Retrieve API Keys for Azure Blob Storage 
        }



        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, Microsoft.AspNetCore.Hosting.IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }


            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });

            app.UseAuthentication();

            app.UseCors("CorsPolicy");


            //app.UseCors(builder =>
            //{
            //    builder.WithOrigins("http://localhost:5000").AllowAnyHeader().AllowAnyOrigin().AllowCredentials().AllowAnyMethod().Build(); 
            //});
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseCors(builder =>
            {
                builder.WithOrigins("http://localhost:3000", "https://localhost:3000", "https://spiraldocs.com", "http://http://157.230.221.251", "https://localhost:5000", "http://localhost:5000")
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials();
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });



            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
                if (env.IsDevelopment())
                {
                    /* Run the CRA server externally, independently of the ASP.NET Core process. */
                    //spa.useReactDevelopmentServer(
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:3000");
                }
            });



        }
    }
}
