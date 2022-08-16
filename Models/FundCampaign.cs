using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class FundCampaign
    {
        public FundCampaign()
        {
            CampComments = new HashSet<CampComment>();
            Funds = new HashSet<Fund>();
        }

        public int Id { get; set; }
        public string Code { get; set; }
        public string Title { get; set; }
        public string Details { get; set; }
        public int FundGoal { get; set; }
        public int FundType { get; set; }
        public int Collected { get; set; }
        public string CreatedTime { get; set; }
        public bool IsActive { get; set; }
        public bool VerifiedStatus { get; set; }
        public int? VerifiedBy { get; set; }
        public string Images { get; set; }

        public virtual User VerifiedByNavigation { get; set; }
        public virtual ICollection<CampComment> CampComments { get; set; }
        public virtual ICollection<Fund> Funds { get; set; }
    }
}
