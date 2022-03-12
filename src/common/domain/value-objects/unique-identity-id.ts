import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import InvalidUuidError from "../../errors/invalid-uuid-error";
import ValueObject from "./value-object";

export class UniqueEntityId extends ValueObject {
  constructor(readonly id?: string) {
    super(id || uuidv4());
    //this.id = id || uuidv4();
    this.validate();
  }

  private validate(): void {
    const isvalid = uuidValidate(this.value);
    if (!isvalid) {
      throw new InvalidUuidError();
    }
  }
}
