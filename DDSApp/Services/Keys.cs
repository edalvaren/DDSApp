using Microsoft.IdentityModel.Tokens;
using System;
using System.IO;
using System.Security.Cryptography;
using Microsoft.Extensions.Configuration; 

namespace DDSApp.Services
{
    public class Keys : SecurityKey
    {
        public override int KeySize => 256;
        private System.Text.Encoding _encoding = System.Text.Encoding.UTF8;
        private string _keyString;
        private readonly IConfiguration _config; 
        public SecurityKey MyKey { get; private set; }

        public Keys(IConfiguration config)
        {
            _config = config; 
            _keyString = _config["JWT:JWTSecretKey"]; 
            this.KeyId = "SignalR_Key";
            var encodedKey = EncodeKey(_encoding, _keyString);
            SymmetricSecurityKey symmetricSecurityKey = new SymmetricSecurityKey(encodedKey);
            MyKey = this;
        }

        private byte[] EncodeKey(System.Text.Encoding encoding, string securityKey)
        {
            var provider = new HMACSHA256();
            byte[] data1 = encoding.GetBytes(securityKey);
            return provider.ComputeHash(data1);
        }
    }
}
