using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace DDSApp.Hubs{
    public class MeowHub : Hub
    {
        public void SendToAll(string name, string message){
            Clients.All.SendAsync("sendToAll", name, message);
        }

    }
}