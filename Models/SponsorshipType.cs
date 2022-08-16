using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class SponsorshipType
    {
        public SponsorshipType()
        {
            Sponsors = new HashSet<Sponsor>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Offers { get; set; }

        public virtual ICollection<Sponsor> Sponsors { get; set; }
    }
}
