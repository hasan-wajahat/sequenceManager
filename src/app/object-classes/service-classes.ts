export class PublishHistoryList {
  constructor(public verNo: string,
              public taskType: number,
              public publisher: string,
              public pbDate: string,
              public pbCmt: string) {
  }
}

export class Sequence {
  constructor(public seq: number,
              public id: string,
              public name: string) {
  }
}
class nestedShort {
  constructor(public seq: number,
              public shotID: string,
              public shotName: string) {
  }
}
export class Short {
  constructor(public sequenceSequence: number,
              public shorts: nestedShort) {
  }
}
