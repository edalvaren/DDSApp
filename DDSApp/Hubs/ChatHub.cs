using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace DDSApp.Hubs{
public class ChatHub : Hub
{
    public static string[] AllowedOrigins = { "http://localhost:5000" , "http://localhost:3000", "http://127.0.0.1:1880"};
    public async Task SendMessage(string user, string message){
        await Clients.All.SendAsync("ReceiveMessage", user, message);
    }
}
}

