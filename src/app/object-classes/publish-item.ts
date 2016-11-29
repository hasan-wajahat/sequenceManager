export class PublishItem{
  constructor(
    public id: number,
    public shotID: number,
    public name: string,
    public fileName?: string,
    public comment?: string
  ){}
}
