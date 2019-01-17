using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDSApp.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;

namespace DDSApp.Services
{
    public class SpiralDocService
    {
        private readonly IMongoCollection<SpiralDoc> _spiralDocs;

        public SpiralDocService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("SpiralDb"));
            var database = client.GetDatabase("SpiralDb");
            _spiralDocs = database.GetCollection<SpiralDoc>("SpiralDocs");
        }
        public List<SpiralDoc> Get()
        {
            return _spiralDocs.Find(book => true).ToList();
        }

        //public SpiralDoc Get(string id)
        //{
        //    var docId = new ObjectId(id);

        //    return _spiralDocs.Find<SpiralDoc>(SpiralDoc => SpiralDoc.Id == docId).FirstOrDefault();
        //}

        public SpiralDoc Get(string Title)
        {
            return _spiralDocs.Find<SpiralDoc>(SpiralDoc => SpiralDoc.Title == Title).FirstOrDefault();
        }

        public List<SpiralDoc> GetByCategory(string Category)
        {
            var builder = Builders<BsonDocument>.Filter;
            var filter = builder.Eq("Category", Category);
            return _spiralDocs.Find<SpiralDoc>(SpiralDoc => SpiralDoc.Category == Category).ToList(); 
        }

        public SpiralDoc Create(SpiralDoc SpiralDoc)
        {
            _spiralDocs.InsertOne(SpiralDoc);
            return SpiralDoc;
        }

        public void Update(string id, SpiralDoc SpiralDocIn)
        {
            var docId = new ObjectId(id);

            _spiralDocs.ReplaceOne(SpiralDoc => SpiralDoc.Id == docId, SpiralDocIn);
        }

        public void Remove(SpiralDoc SpiralDocIn)
        {
            _spiralDocs.DeleteOne(SpiralDoc => SpiralDoc.Id == SpiralDocIn.Id);
        }

        public void Remove(ObjectId id)
        {
            _spiralDocs.DeleteOne(SpiralDoc => SpiralDoc.Id == id);
        }

    }
}

