using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration; 
using Microsoft.Azure.Search;
using Microsoft.Azure.Search.Models;
using System.IO;

namespace DDSApp.Services
{
    public class DocsSearchService
    {
        private static ISearchIndexClient _indexClient;
        private static ISearchServiceClient _searchClient;

        public static string errorMessage;


        public DocsSearchService(IConfiguration config)
        {
            try
            {
                string searchServiceName = config.GetSection("AzureSearch")["SearchServiceName"];
                string adminApiKey = config.GetSection("AzureSearch")["SearchServiceAdminApiKey"];
                _searchClient = new SearchServiceClient(searchServiceName, new SearchCredentials(adminApiKey));
                //_indexClient = _searchClient.Indexes.GetClient("spiraldocsindex");
                _indexClient = _searchClient.Indexes.GetClient("azureblob-index");
            }
            catch (Exception e)
            {
                errorMessage = e.Message.ToString(); 
            }
        }


        public DocumentSearchResult Search(string searchText)
        {
            try
            {
                SearchParameters sp = new SearchParameters()
                {
                    SearchMode = SearchMode.All,
                    IncludeTotalResultCount = true,
                    QueryType = QueryType.Full,
                    Select = new[] {"people", "metadata_storage_path", "organizations", "locations", "keyphrases"},
                    Top = 5
                };
                return _indexClient.Documents.Search(searchText, sp); 
            }
            catch (Exception ex)
            {
                errorMessage = ex.Message.ToString(); 
            }
            return null; 
        }

        private static SearchServiceClient CreateSearchServiceClient(IConfiguration configuration)
        {
            string searchServiceName = configuration["SearchServiceName"];
            string adminApiKey = configuration["SearchServiceAdminApiKey"];

            SearchServiceClient serviceClient = new SearchServiceClient(searchServiceName, new SearchCredentials(adminApiKey));
            return serviceClient;
        }
    }

 
}
