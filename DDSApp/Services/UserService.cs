using System.Collections.Generic;
using System.Linq;
using DDSApp.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;

namespace DDSApp.Services
{
    public class UserService
    {
        private readonly IMongoCollection<SpiralUser> _spiralUsers; 

        public UserService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("SpiralDb"));
            var database = client.GetDatabase("SpiralDb");
            _spiralUsers = database.GetCollection<SpiralUser>("SpiralUsers"); 
        }
        public List<SpiralUser> Get()
        {
            return _spiralUsers.Find(book => true).ToList();
        }

        public SpiralUser Get(string id)
        {
            var docId = new ObjectId(id);

            return _spiralUsers.Find<SpiralUser>(spiralUser => spiralUser.Id == docId).FirstOrDefault();
        }

        public SpiralUser Create(SpiralUser spiralUser)
        {
            _spiralUsers.InsertOne(spiralUser);
            return spiralUser;
        }

        public void Update(string id, SpiralUser spiralUserIn)
        {
            var docId = new ObjectId(id);

            _spiralUsers.ReplaceOne(spiralUser => spiralUser.Id == docId, spiralUserIn);
        }

        public void Remove(SpiralUser spiralUserIn)
        {
            _spiralUsers.DeleteOne(spiralUser => spiralUser.Id == spiralUserIn.Id);
        }

        public void Remove(ObjectId id)
        {
            _spiralUsers.DeleteOne(spiralUser => spiralUser.Id == id);
        }
    }
}
    