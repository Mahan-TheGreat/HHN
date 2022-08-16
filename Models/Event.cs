using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class Event
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Details { get; set; }
        public int EventGoal { get; set; }
        public int Collected { get; set; }
        public bool IsActive { get; set; }
        public bool IsVerified { get; set; }
        public string Venue { get; set; }
        public string CreatedTime { get; set; }
        public int? VerifiedBy { get; set; }
        public int EventType { get; set; }
        public int? Partners { get; set; }
        public int? Sponsors { get; set; }

        public virtual EventType EventTypeNavigation { get; set; }
        public virtual Partner PartnersNavigation { get; set; }
        public virtual Sponsor SponsorsNavigation { get; set; }
        public virtual User VerifiedByNavigation { get; set; }
    }
}
