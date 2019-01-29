﻿using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text; 
using CryptoHelper; //standalone password hasher for ASP.NET core using PBKDF2 implementation
using DDSApp.Models;
using DDSApp.Areas.Abstractions;
using Microsoft.IdentityModel.Tokens;

namespace DDSApp.Services
{
    /// <summary>
    /// Service Generates JWT (Jason Web Token) 
    /// </summary>
    public class AuthService : IAuthService
    {
        string jwtSecret;
        int jwtLifespan; 

        public AuthService(string jwtSecret, int jwtLifespan)
        {
            this.jwtLifespan = jwtLifespan;
            this.jwtSecret = jwtSecret; 
        }

        public AuthData GetAuthData(string id)
        {
            var expirationTime = DateTime.UtcNow.AddSeconds(jwtLifespan);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim(ClaimTypes.Name, id)
                }),
                Expires = expirationTime,
                // new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256Signature)
                SigningCredentials = new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSecret)),
                    SecurityAlgorithms.HmacSha256Signature
                )
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));

            return new AuthData
            {
                Token = token,
                TokenExpirationTime = ((DateTimeOffset)expirationTime).ToUnixTimeSeconds(),
                Id = id
            };
        }

        public string HashPassword(string password)
        {
            return Crypto.HashPassword(password);
        }

        public bool VerifyPassword(string actualPassword, string hashedPassword)
        {
            return Crypto.VerifyHashedPassword(hashedPassword, actualPassword);
        }
    }
}
