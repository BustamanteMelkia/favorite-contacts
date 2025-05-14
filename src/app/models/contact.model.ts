export class Contact {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _callEntries: number[];

  constructor(id: number, firstName: string, lastName: string, callEntries: number[]) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._callEntries = callEntries;
  }

  get firstName(): string {
    return this._firstName;
  }
  get lastName(): string {
    return this._lastName;
  }
  get id(): number {
    return this._id;
  }

  get lastCall(): number | null {
    if (this._callEntries.length === 0) {
      return null;
    }
    return this._callEntries.reduce((prev, current) => {
      return prev > current ? prev : current;
    });
  }

  get callEntries(): number[] {
    return this._callEntries;
  }

  addCallEntry(callEntry: number): void {
    this._callEntries.push(callEntry);
  }
}
