using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class User
    {
        public User()
        {
            CampComments = new HashSet<CampComment>();
            Events = new HashSet<Event>();
            FundCampaigns = new HashSet<FundCampaign>();
            Funds = new HashSet<Fund>();
        }

        public int Id { get; set; }
        public string UserCode { get; set; }
        public int UserProfileId { get; set; }
        public string Name { get; set; }
        public string Pass { get; set; }
        public string Contact { get; set; }
        public string Email { get; set; }
        public bool CanVerify { get; set; }

        public virtual UsersProfile UserProfile { get; set; }
        public virtual ICollection<CampComment> CampComments { get; set; }
        public virtual ICollection<Event> Events { get; set; }
        public virtual ICollection<FundCampaign> FundCampaigns { get; set; }
        public virtual ICollection<Fund> Funds { get; set; }
    }
}
