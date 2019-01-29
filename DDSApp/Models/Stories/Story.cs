using System.Collections.Generic;
using DDSApp.Areas.Abstractions;

namespace DDSApp.Models
{
  public class Story : IEntityBase
  {
    public Story()
    {
      Likes = new List<Like>();
    }
    public string Id { get; set; }
    public string Title { get; set; }
    public string Content { get; set; }
    public long CreationTime { get; set; }
    public long LastEditTime { get; set; }
    public long PublishTime { get; set; }
    public bool Draft { get; set; }

    public User Owner { get; set; }
    public string OwnerId { get; set; }
    public List<Like> Likes { get; set; }

  }
}