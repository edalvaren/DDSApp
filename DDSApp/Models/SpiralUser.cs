using System.ComponentModel.DataAnnotations; 
using MongoDB.Bson;

using MongoDB.Bson.Serialization.Attributes;

namespace DDSApp.Models
{
    public class SpiralUser
    {
        public ObjectId Id { get; set; }

        [Required]
        [BsonElement("FirstName")]
        public string FirstName { get; set; }

        [BsonElement("LastName")]
        public string LastName { get; set; }

        [BsonElement("Title")]
        public string Title { get; set; }

        [BsonElement("Team")]
        public string Team { get; set; }

        [EmailAddress]
        [BsonElement("Email")]
        public string Email { get; set; }
    }
}
