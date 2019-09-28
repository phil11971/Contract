export class Stage {
    stageId: number
    stageName: string
    minCntDays: number
    comment: string
    planCompletionDate?: Date
    projCompletionDate?: Date
    factCompletionDate?: Date

    constructor(stageId, stageName)
    {
      this.stageId = stageId
      this.stageName = stageName
    }
}