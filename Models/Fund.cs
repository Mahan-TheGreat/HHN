using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class Fund
    {
        public int Id { get; set; }
        public int CampaignId { get; set; }
        public int ContributorId { get; set; }
        public int FundAmount { get; set; }
        public int EsewaId { get; set; }
        public bool IsVerified { get; set; }
        public bool IsDelivered { get; set; }

        public virtual FundCampaign Campaign { get; set; }
        public virtual User Contributor { get; set; }
    }
}
