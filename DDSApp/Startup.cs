using DDSApp.Hubs;
using DDSApp.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace DDSApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        //these are my dependency injections
        /// <summary>
        /// Method Adds Services to the Controller. These are my Dependency Injections
        ///
        ///The services added to this app are :
        ///----------------CORS - for Cross Origin request authentication
        ///----------------Cookie Policy Options
        ///----------------UserService - for retrieving users from MongoDb Database
        ///----------------SPA for React Js Integration
        ///----------------MVC - Model View Controller Support
        ///----------------SignalR - Add real time functionality via the use of Web Sockets and Hubs.
        /// </summary>
        /// <param name="services"></param>
        public void ConfigureServices(IServiceCollection services)
        {
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
                           .WithOrigins(ChatHub.AllowedOrigins)
                           .AllowCredentials();
                }));



            //services.AddCors(options =>
            //{
            //    options.AddPolicy("AllowSpecificOrigin",
            //        builder => builder.WithOrigins("http://localhost:5000"));
            //});

            // services.AddCors(options => options.AddPolicy("CorsPolicy",
            //builder =>
            //{
            //    builder.AllowAnyMethod().AllowAnyHeader()
            //           .WithOrigins(
            //           //"http://localhost:3000",
            //           //"http://localhost:55046",
            //           //"http://127.0.0.1:3000",
            //           "http://127.0.0.1:3000/rsdrinx",
            //           "http://localhost:3000/rsdrinx",
            //           "http://localhost:5000/rsdrinx",
            //           "http://127.0.0.1:5000/rsdrinx");
            //           //"http://localhost:5000",
            //           //"http://127.0.0.1:1880");
            //}));

            #endregion

            // services.AddSingleton<Microsoft.Extensions.Hosting.IHostedService, ExampleService>();
            services.AddScoped<UserService>();
            services.AddScoped<SpiralDocService>();
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // In production, the React files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/build";
            });
            services.AddSignalR();
            services.AddHttpClient();

            // Node Services
            services.AddNodeServices(options =>
            {
                options.ProjectPath = "./Services/";
            }
            );


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

            app.UseCors("CorsPolicy");


            //app.UseCors(builder =>
            //{
            //    builder.WithOrigins("http://localhost:5000").AllowAnyHeader().AllowAnyOrigin().AllowCredentials().AllowAnyMethod().Build(); 
            //});
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseCors(builder =>
            {
                builder.WithOrigins("http://localhost:5000")
                    .AllowAnyHeader()
                    .WithMethods("GET", "POST")
                    .AllowCredentials();
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSignalR(routes =>
            {
                routes.MapHub<ChatHub>("/chatter");
                routes.MapHub<StreamHub>("/netflix");
            });


            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";
                if (env.IsDevelopment())
                {
                    spa.UseReactDevelopmentServer(npmScript: "start");
                }
            });



        }
    }
}
