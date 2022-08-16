using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class UsersProfile
    {
        public UsersProfile()
        {
            Users = new HashSet<User>();
        }

        public int Id { get; set; }
        public string UserProfileCode { get; set; }
        public string UserName { get; set; }
        public string AboutUser { get; set; }
        public string Location { get; set; }
        public string Pictures { get; set; }
        public int? TotalDonations { get; set; }
        public int? TotalAmount { get; set; }

        public virtual ICollection<User> Users { get; set; }
    }
}
