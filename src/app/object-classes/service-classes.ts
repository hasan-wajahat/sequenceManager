export class PublishHistoryList {
  constructor(public id: number,
              public taskType: number,
              public publisher: string,
              public image?: string,
              public comment?: string) {
  }
}

export class Sequence {
  constructor(public id: number,
              public seqID: string,
              public name: string) {
  }
}
export class Short {
  constructor(public id: number,
              public shotID: string,
              public shotName: string,
              public seqID: number) {
  }
}
