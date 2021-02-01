export class City {
  public id: string;

  constructor(public name: string) {
    this.name = name;
    this.id = this.guid();
  }

  private guid(): string {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
}
