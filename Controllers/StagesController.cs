using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Contract.Models;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Contract.Models.DTO;

namespace Contract.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StagesController : ControllerBase
    {
        private readonly ApplicationContext _context;

        public StagesController(ApplicationContext context)
        {
            _context = context;
        }

        // GET: api/Stages
        [HttpGet]
        public IEnumerable<Stage> GetStage()
        {
            //var config = new MapperConfiguration(cfg => {
            //
            //    cfg.CreateMap<Stage, StageDTO>();
            //
            //});
            //
            //var stagesDTO = _context.Stage.ProjectTo<StageDTO>(config);


            return _context.Stage.ToList();

        }

        // GET: api/Stages/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetStage([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stage = await _context.Stage.FindAsync(id);

            if (stage == null)
            {
                return NotFound();
            }

            return Ok(stage);
        }

        // PUT: api/Stages/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStage([FromRoute] int id, [FromBody] Stage stage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != stage.StageId)
            {
                return BadRequest();
            }

            _context.Entry(stage).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StageExists(id))
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

        // POST: api/Stages
        [HttpPost]
        public async Task<IActionResult> PostStage([FromBody] Stage stage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Stage.Add(stage);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStage", new { id = stage.StageId }, stage);
        }

        // DELETE: api/Stages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStage([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var stage = await _context.Stage.FindAsync(id);
            if (stage == null)
            {
                return NotFound();
            }

            _context.Stage.Remove(stage);
            await _context.SaveChangesAsync();

            return Ok(stage);
        }

        private bool StageExists(int id)
        {
            return _context.Stage.Any(e => e.StageId == id);
        }
    }
}