using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class Partner
    {
        public Partner()
        {
            Events = new HashSet<Event>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int PartnerType { get; set; }
        public string Details { get; set; }

        public virtual PartnershipType PartnerTypeNavigation { get; set; }
        public virtual ICollection<Event> Events { get; set; }
    }
}
