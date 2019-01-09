using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;

namespace DDSApp.Services
{
    public class ExampleService : BackgroundService
    {
        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            throw new System.NotImplementedException();
        }
    }
}
