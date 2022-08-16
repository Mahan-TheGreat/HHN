using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HelpingHandNepal.Data;
using HelpingHandNepal.Models;

namespace HelpingHandNepal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersProfilesController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public UsersProfilesController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/UsersProfiles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UsersProfile>>> GetUsersProfiles()
        {
            return await _context.UsersProfiles.ToListAsync();
        }

        // GET: api/UsersProfiles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UsersProfile>> GetUsersProfile(int id)
        {
            var usersProfile = await _context.UsersProfiles.FindAsync(id);

            if (usersProfile == null)
            {
                return NotFound();
            }

            return usersProfile;
        }

        // PUT: api/UsersProfiles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsersProfile(int id, UsersProfile usersProfile)
        {
            if (id != usersProfile.Id)
            {
                return BadRequest();
            }

            _context.Entry(usersProfile).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsersProfileExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UsersProfiles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UsersProfile>> PostUsersProfile(UsersProfile usersProfile)
        {
            _context.UsersProfiles.Add(usersProfile);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsersProfile", new { id = usersProfile.Id }, usersProfile);
        }

        // DELETE: api/UsersProfiles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUsersProfile(int id)
        {
            var usersProfile = await _context.UsersProfiles.FindAsync(id);
            if (usersProfile == null)
            {
                return NotFound();
            }

            _context.UsersProfiles.Remove(usersProfile);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UsersProfileExists(int id)
        {
            return _context.UsersProfiles.Any(e => e.Id == id);
        }
    }
}
