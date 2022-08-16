using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class PartnershipType
    {
        public PartnershipType()
        {
            Partners = new HashSet<Partner>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string Offers { get; set; }

        public virtual ICollection<Partner> Partners { get; set; }
    }
}
