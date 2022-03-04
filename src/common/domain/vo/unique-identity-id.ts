import { v4 as uuidv4 } from "uuid";
import InvalidUuidError from "../../errors/invalid-uuid-error";

export class UniqueEntityId {
  constructor(public readonly id?: string | any) {
    this.id = id || uuidv4();
    this.validate();
  }

  private validate(): void {
    const isvalid = uuidv4(this.id);
    if (!isvalid) {
      throw new InvalidUuidError();
    }
  }
}
