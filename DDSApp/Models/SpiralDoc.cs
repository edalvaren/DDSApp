using System.ComponentModel.DataAnnotations;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace DDSApp.Models
{
    public class SpiralDoc
    {
        public ObjectId Id { get; set; }

        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Topic")]
        public string Topic { get; set; }

        [BsonElement("Category")]
        public string Category { get; set; }

        [BsonElement("url")]
        public string Url { get; set; }

        [EmailAddress]
        [BsonElement("Last updated")]
        public string LastUpdate { get; set; }
    }
}
