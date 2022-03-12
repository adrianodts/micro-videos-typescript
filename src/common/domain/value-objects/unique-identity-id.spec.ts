import { UniqueEntityId } from "./unique-identity-id";
import { validate as uuidValidate } from "uuid";

function spyValidate(): any {
  return jest.spyOn(UniqueEntityId.prototype as any, "validate");
}

describe("UniqueIdentityId Unit Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should throw error when uuid is invalid", () => {
    expect(() => new UniqueEntityId("fake id")).toThrowError(
      "ID must be a valid UUID"
    );
  });

  it("Should spy validate", () => {
    const spy = spyValidate();
    expect(() => new UniqueEntityId("fake id")).toThrowError(
      "ID must be a valid UUID"
    );
    expect(spy).toHaveBeenCalled();
  });

  it("Should accept an uuid given on constructor", () => {
    const spy = spyValidate();
    const validUUID = "5bc69bbc-7919-414e-adcf-4be08ba83da8";
    const uniqueEntityId = new UniqueEntityId(validUUID);
    expect(uniqueEntityId.value).toBe(validUUID);
    expect(uuidValidate(uniqueEntityId.value)).toBeTruthy();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
