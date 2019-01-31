﻿// <auto-generated />
using DDSApp.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DDSApp.Migrations
{
    [DbContext(typeof(SpiralDocsContext))]
    partial class SpiralDocsContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.1-servicing-10028")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DDSApp.Models.Doc", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Category");

                    b.Property<string>("LastUpdate");

                    b.Property<string>("Title");

                    b.Property<string>("Topic");

                    b.Property<string>("Url");

                    b.HasKey("Id");

                    b.ToTable("Docs");
                });

            modelBuilder.Entity("DDSApp.Models.Like", b =>
                {
                    b.Property<string>("StoryId");

                    b.Property<string>("UserId");

                    b.Property<string>("Id");

                    b.HasKey("StoryId", "UserId");

                    b.HasIndex("UserId");

                    b.ToTable("Like");
                });

            modelBuilder.Entity("DDSApp.Models.Story", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<long>("CreationTime");

                    b.Property<bool>("Draft");

                    b.Property<long>("LastEditTime");

                    b.Property<string>("OwnerId")
                        .IsRequired();

                    b.Property<long>("PublishTime");

                    b.Property<string>("Title")
                        .HasMaxLength(100);

                    b.HasKey("Id");

                    b.HasIndex("OwnerId");

                    b.ToTable("Story");
                });

            modelBuilder.Entity("DDSApp.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(60);

                    b.Property<string>("Password");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasMaxLength(60);

                    b.HasKey("Id");

                    b.ToTable("User");
                });

            modelBuilder.Entity("DDSApp.Models.Like", b =>
                {
                    b.HasOne("DDSApp.Models.Story", "Story")
                        .WithMany("Likes")
                        .HasForeignKey("StoryId")
                        .OnDelete(DeleteBehavior.Restrict);

                    b.HasOne("DDSApp.Models.User", "User")
                        .WithMany("Likes")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Restrict);
                });

            modelBuilder.Entity("DDSApp.Models.Story", b =>
                {
                    b.HasOne("DDSApp.Models.User", "Owner")
                        .WithMany("Stories")
                        .HasForeignKey("OwnerId")
                        .OnDelete(DeleteBehavior.Restrict);
                });
#pragma warning restore 612, 618
        }
    }
}
