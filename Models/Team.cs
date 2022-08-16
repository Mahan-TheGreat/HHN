using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class Team
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string About { get; set; }
        public string Members { get; set; }
        public bool IsActive { get; set; }
        public bool IsVerified { get; set; }
    }
}
