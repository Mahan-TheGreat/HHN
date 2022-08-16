using System;
using System.Collections.Generic;

#nullable disable

namespace HelpingHandNepal.Models
{
    public partial class EventType
    {
        public EventType()
        {
            Events = new HashSet<Event>();
        }

        public int Id { get; set; }
        public string Type { get; set; }

        public virtual ICollection<Event> Events { get; set; }
    }
}
