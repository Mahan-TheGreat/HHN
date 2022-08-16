using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class Sponsor
    {
        public Sponsor()
        {
            Events = new HashSet<Event>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int SponsorType { get; set; }
        public string Details { get; set; }

        public virtual SponsorshipType SponsorTypeNavigation { get; set; }
        public virtual ICollection<Event> Events { get; set; }
    }
}
