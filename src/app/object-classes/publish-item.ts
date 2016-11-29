export class PublishItem{
  constructor(
    public id: number,
    public taskType: number,
    public shotID: number,
    public publisher: string,
    public image?: string,
    public comment?: string
  ){}
}
