export default class Stage {
  constructor(
    public stageId: number,
    public stageName: string,
    public minCntDays: number,
    public comment: string,
    public planCompletionDate?: Date,
    public projCompletionDate?: Date,
    public factCompletionDate?: Date) { }
}
