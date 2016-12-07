export class PublishItem{
  constructor(
    public id: number,
    public tasktype: number,
    public short_id: number,
    public publisher: string,
    public image?: string,
    public comment?: string
  ){}
}
