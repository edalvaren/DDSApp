using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using Microsoft.Extensions.Configuration;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace DDSApp.Services
{
    /// <summary>
    /// Provides Access to Azure Cloud Storage. 
    /// Implements Blob Upload/Download Operations 
    /// </summary>
    public class StorageService
    {
        ///
        private static CloudStorageAccount _storageAccount;
        private static CloudBlobClient _cloudBlobClient;
        private static CloudBlobContainer _container;
        private static CloudBlockBlob _blockBlob; 
        private static string errorMessage;
        private static string _containerName;
        private static string _blockBlobName; 
        /// <summary>
        /// Azure Blob Storage Service Helper Class to encapsulate related functionality.  
        /// </summary>
        /// <param name="config"> Dependency Injection of IConfiguration</param>
        public StorageService(IConfiguration config)
        {

            string storageConnectionString = RetrieveSecret(config, StorageValues.ConnectionString);
            _containerName = RetrieveSecret(config, StorageValues.StorageContainerName);
            _blockBlobName = RetrieveSecret(config, StorageValues.BlobName); 

            try
            {
                _storageAccount = CloudStorageAccount.Parse(storageConnectionString);
                _cloudBlobClient = _storageAccount.CreateCloudBlobClient();
            }
            catch (Exception e)
            {
                errorMessage = e.Message.ToString();
            }
        }

        public async Task UploadFile(Stream fileStream)
        {
            _container = _cloudBlobClient.GetContainerReference(_containerName);
            _blockBlob = _container.GetBlockBlobReference(_blockBlobName);
            await _blockBlob.UploadFromStreamAsync(fileStream); 
        }
        

        /// <summary>
        /// Uploads the passed asset (file) to the previously specified Azure Blob Storage
        /// </summary>
        /// <param name="asset"> IFormFile needed to call OpenReadStream()</param>
        /// <returns></returns>
        public async Task UploadAssetAsync(IFormFile asset)
        {
            _container = _cloudBlobClient.GetContainerReference(_containerName);
            _blockBlob = _container.GetBlockBlobReference(_blockBlobName);
            await _blockBlob.UploadFromStreamAsync(asset.OpenReadStream());
        }


        private readonly static string ValueNotFound = "The Requested Secret does not exist";


        /// <summary>
        /// Accesses secret system configuration to return a specified value
        /// </summary>
        /// <param name="config"></param>
        /// <param name="valueToRetrieve"> enum StorageValues { ConnectionString, StorageContainerName, StorageAccountName, BlobName } </param>
        /// <returns>Returns the Requested Application Value</returns>
        private static string RetrieveSecret(IConfiguration config, StorageValues valueToRetrieve)
        {
            if (valueToRetrieve == StorageValues.ConnectionString)
            {
                return config["Storage:ConnectionString"];
            }
            else if (valueToRetrieve == StorageValues.StorageContainerName)
            {
                return config["Storage:ContainerName"];
            }
            else if (valueToRetrieve == StorageValues.BlobName)
            {
                return config["Storage:BlobName"]; 
            }
            return ValueNotFound; 
        }


        /// <summary>
        /// ConnectionString: Azure Blob Connection String
        /// StorageContainerName: Name of Blob Container
        /// StorageAccountName: 
        /// </summary>
        private enum StorageValues
        {
            ConnectionString, StorageContainerName, StorageAccountName, BlobName
        }

    }
}
