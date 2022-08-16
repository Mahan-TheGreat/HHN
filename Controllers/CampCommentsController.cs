//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;
//using HelpingHandNepal.Data;
//using HelpingHandNepal.Models;

//namespace HelpingHandNepal.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class CampCommentsController : ControllerBase
//    {
//        private readonly ApplicationDBContext _context;

//        public CampCommentsController(ApplicationDBContext context)
//        {
//            _context = context;
//        }

//        // GET: api/CampComments
//        [HttpGet]
//        public async Task<ActionResult<IEnumerable<CampComment>>> GetCampComments()
//        {
//            return await _context.CampComments.ToListAsync();
//        }

//        // GET: api/CampComments/5
//        [HttpGet("{id}")]
//        public async Task<ActionResult<CampComment>> GetCampComment(int id)
//        {
//            var campComment = await _context.CampComments.FindAsync(id);

//            if (campComment == null)
//            {
//                return NotFound();
//            }

//            return campComment;
//        }

//        // PUT: api/CampComments/5
//        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//        [HttpPut("{id}")]
//        public async Task<IActionResult> PutCampComment(int id, CampComment campComment)
//        {
//            if (id != campComment.Id)
//            {
//                return BadRequest();
//            }

//            _context.Entry(campComment).State = EntityState.Modified;

//            try
//            {
//                await _context.SaveChangesAsync();
//            }
//            catch (DbUpdateConcurrencyException)
//            {
//                if (!CampCommentExists(id))
//                {
//                    return NotFound();
//                }
//                else
//                {
//                    throw;
//                }
//            }

//            return NoContent();
//        }

//        // POST: api/CampComments
//        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
//        [HttpPost]
//        public async Task<ActionResult<CampComment>> PostCampComment(CampComment campComment)
//        {
//            _context.CampComments.Add(campComment);
//            await _context.SaveChangesAsync();

//            return CreatedAtAction("GetCampComment", new { id = campComment.Id }, campComment);
//        }

//        // DELETE: api/CampComments/5
//        [HttpDelete("{id}")]
//        public async Task<IActionResult> DeleteCampComment(int id)
//        {
//            var campComment = await _context.CampComments.FindAsync(id);
//            if (campComment == null)
//            {
//                return NotFound();
//            }

//            _context.CampComments.Remove(campComment);
//            await _context.SaveChangesAsync();

//            return NoContent();
//        }

//        private bool CampCommentExists(int id)
//        {
//            return _context.CampComments.Any(e => e.Id == id);
//        }
//    }
//}
