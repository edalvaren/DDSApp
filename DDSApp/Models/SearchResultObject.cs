using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Text;
using System.Web;

namespace DDSApp.Models
{
    public partial class SearchResultObject
    {
        [JsonProperty("count")]
        public long Count { get; set; }

        [JsonProperty("coverage")]
        public object Coverage { get; set; }

        [JsonProperty("facets")]
        public object Facets { get; set; }

        [JsonProperty("results")]
        public Result[] Results { get; set; }

        [JsonProperty("continuationToken")]
        public object ContinuationToken { get; set; }
    }

    public partial class Result
    {
        [JsonProperty("score")]
        public double Score { get; set; }

        [JsonProperty("highlights")]
        public object Highlights { get; set; }

        [JsonProperty("document")]
        public Document Document { get; set; }
    }

    public partial class Document
    {
        [JsonProperty("metadata_storage_name")]
        public string MetadataStorageName { get; set; }


        [JsonProperty("metadata_storage_path")]
        public string MetadataStoragePath { get; set; }

        [JsonProperty("people")]
        public object[] People { get; set; }

        [JsonProperty("organizations")]
        public object[] Organizations { get; set; }

        [JsonProperty("locations")]
        public object[] Locations { get; set; }

        [JsonProperty("keyphrases")]
        public string[] Keyphrases { get; set; }
    }

    public partial class SearchResultObject
    {
        public static SearchResultObject FromJson(string json) => JsonConvert.DeserializeObject<SearchResultObject>(json, DDSApp.Models.Converter.Settings);
    }

    public static class Serialize
    {
        public static string ToJson(this SearchResultObject self) => JsonConvert.SerializeObject(self, DDSApp.Models.Converter.Settings);

        public static string DecodeBase64String(string encodedString)
        {
            var encodedStringWithoutTrailingCharacter = encodedString.Substring(0, encodedString.Length - 1);
            var encodedBytes = Microsoft.AspNetCore.WebUtilities.WebEncoders.Base64UrlDecode(encodedStringWithoutTrailingCharacter);
            return HttpUtility.UrlDecode(encodedBytes, Encoding.UTF8);
        }
    }

    internal static class Converter
    {
        public static readonly JsonSerializerSettings Settings = new JsonSerializerSettings
        {
            MetadataPropertyHandling = MetadataPropertyHandling.Ignore,
            DateParseHandling = DateParseHandling.None,
            Converters =
            {
                new IsoDateTimeConverter { DateTimeStyles = DateTimeStyles.AssumeUniversal }
            },
        };


    }
}
