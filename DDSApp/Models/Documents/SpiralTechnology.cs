using DDSApp.Areas.Abstractions;

namespace DDSApp.Models.Documents
{
    public class SpiralTechnology : IEntityBase
    {
        public string Id { get; set; }
        public string Technology { get; set; }
        public int DocumentCount { get; set; }
    }
}
