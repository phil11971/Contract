﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contract.Models.DTO
{
    public class ContractStageDTO
    {
        public int StageId { get; set; }
        public string StageName { get; set; }

        public DateTime? PlanCompletionDate { get; set; }

        public DateTime? ProjCompletionDate { get; set; }

        public DateTime? FactCompletionDate { get; set; }
    }
}
