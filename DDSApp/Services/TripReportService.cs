using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;
using DDSApp.Models; 

namespace DDSApp.Services
{
    public class TripReportService
    {
        private readonly IMongoCollection<TripReport> _tripReports;
        private readonly static string dbName = "SpiralDb"; 

        public TripReportService(IConfiguration config)
        {
            var connString = RetrieveSecret(config, MongoSecrets.ConnectionString);
            var dbName = RetrieveSecret(config, MongoSecrets.DatabaseName); 
            var client = new MongoClient(connString);
            var db = client.GetDatabase(dbName);
            _tripReports = db.GetCollection<TripReport>("TripReports"); 
        }


        public List<TripReport> Get()
        {
            return _tripReports.Find(report => true).ToList(); 
        }

        public TripReport Create(TripReport report)
        {
            _tripReports.InsertOne(report);
            return report; 
        }

        private readonly static string ValueNotFound = "The Requested Secret does not exist";

        private static string RetrieveSecret(IConfiguration config, MongoSecrets valueToRetrieve)
        {
            if (valueToRetrieve == MongoSecrets.ConnectionString)
            {
                return config["Mongo:ConnectionString"];
            }
            else if (valueToRetrieve == MongoSecrets.DatabaseName)
            {
                return config["Mongo:DatabaseName"];
            }
            else if (valueToRetrieve == MongoSecrets.CollectionName)
            {
                return config["Mongo:CollectionName"]; 
            }
            return ValueNotFound;
        }

        private enum MongoSecrets
        {
            ConnectionString, 
            DatabaseName,
            CollectionName
        }

    }
}
