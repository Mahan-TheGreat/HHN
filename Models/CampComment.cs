using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class CampComment
    {
        public int Id { get; set; }
        public string TextComment { get; set; }
        public int CampaignId { get; set; }
        public int UserId { get; set; }

        public virtual FundCampaign Campaign { get; set; }
        public virtual User User { get; set; }
    }
}
