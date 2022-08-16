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
    [Route("api/[Controller]")]
    [ApiController]
    public class FundCampaignsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public FundCampaignsController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: api/FundCampaigns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FundCampaign>>> GetFundCampaigns()
        {
            if (_context.FundCampaigns != null)
            {
                return await _context.FundCampaigns.ToListAsync();
            }
            else return NotFound();
        }

        // GET: api/FundCampaigns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FundCampaign>> GetFundCampaign(int id)
        {
            var fundCampaign = await _context.FundCampaigns.FindAsync(id);

            if (fundCampaign == null)
            {
                return NotFound();
            }

            return fundCampaign;
        }

        //// GET: api/FundCampaigns/5
        //[HttpGet("GetFilteredFundCampaign/{type}")]
        //public  async Task<ActionResult<IEnumerable<FundCampaign>>> GetFilteredFundCampaign(int type)
        //{
        //    var fundCampaigns = await _context.FundCampaigns.ToListAsync();
        //    var filtCamp = fundCampaigns.Where(x => x.FundType == type);


        //    if (filtCamp == null)
        //    {
        //        return NotFound();
        //    }

        //    return filtCamp;
        //}

        // PUT: api/FundCampaigns/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFundCampaign(int id, FundCampaign fundCampaign)
        {
            if (id != fundCampaign.Id)
            {
                return BadRequest();
            }

            _context.Entry(fundCampaign).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FundCampaignExists(id))
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

        // POST: api/FundCampaigns
        [HttpPost]
        public async Task<ActionResult<FundCampaign>> PostFundCampaign(FundCampaign fundCampaign)

        {
            var f1 = await _context.FundCampaigns.FirstOrDefaultAsync(x => x.Title == fundCampaign.Title);
            if (f1 == null)
            {
                _context.FundCampaigns.Add(fundCampaign);
                await _context.SaveChangesAsync();

                //return CreatedAtAction("GetFundCampaign", new { id = fundCampaign.Id }, fundCampaign);
                return Ok( new { status=201, id = fundCampaign.Id });
            }
            else
            {
                return Ok(new { status = 500, cause=1, error = "Name already exists. Please try with a different name." });
            }
            

        }


        //// POST: api/FundCampaigns
        //[HttpPost]
        //public async Task<ActionResult<FundCampaign>> getTotalCollected( )

        //{
        //    var f1 = await _context.Funds.FirstOrDefaultAsync(x => x.Name == fundCampaign.Name);
        //    if (f1 == null)
        //    {
        //        _context.FundCampaigns.Add(fundCampaign);
        //        await _context.SaveChangesAsync();

        //        //return CreatedAtAction("GetFundCampaign", new { id = fundCampaign.Id }, fundCampaign);
        //        return Ok(new { status = 201, id = fundCampaign.Id });
        //    }
        //    else
        //    {
        //        return Ok(new { status = 500, cause = 1, error = "Name already exists. Please try with a different name." });
        //    }


        //}




        // DELETE: api/FundCampaigns/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFundCampaign(int id)
        {
            var fundCampaign = await _context.FundCampaigns.FindAsync(id);
            if (fundCampaign == null)
            {
                return NotFound();
            }

            _context.FundCampaigns.Remove(fundCampaign);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FundCampaignExists(int id)
        {
            return _context.FundCampaigns.Any(e => e.Id == id);
        }
    }
}
