using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contract.Models.DTO
{
    public class ContractDTO
    {
        public string ContractName { get; set; }

        public decimal PlanCost { get; set; }

        public decimal FactCost { get; set; }

        public IEnumerable<StageDTO> Stages { get; set; }
    }
}
