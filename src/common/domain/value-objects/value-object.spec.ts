import ValueObject from "./value-object";

class StubValueObject extends ValueObject {}

describe("ValueObject Unit Tests", () => {
  it("Should set string value", () => {
    const valueObject = new StubValueObject("string value");
    expect(valueObject.value).toStrictEqual("string value");
    console.log(`${new StubValueObject("string value")}`);
  });

  it("Should set object value", () => {
    const prop = { prop: "object value" };
    const valueObject = new StubValueObject(prop);
    expect(valueObject.value).toBe(prop);
    console.log(`${new StubValueObject(prop)}`);
    console.log(`${new StubValueObject(new Date())}`);
    console.log(`${new StubValueObject(new Number())}`);
  });

  it("Should convert null to a string", () => {
    const valueObject = new StubValueObject(null);
    expect(valueObject + "").toBe("null");
  });

  it("Should convert undefined to a string", () => {
    const valueObject = new StubValueObject(undefined);
    expect(valueObject + "").toBe("undefined");
  });

  it("Should convert other vallues to a string", () => {
    const date = new Date();
    let arrange = [
      { received: "", expected: "" },
      { received: "fake", expected: "fake" },
      { received: 0, expected: "0" },
      { received: true, expected: "true" },
      { received: false, expected: "false" },
      { received: date, expected: date.toString() },
      {
        received: { prop: "test" },
        expected: JSON.stringify({ prop: "test" }),
      },
    ];
    arrange.forEach((value) => {
      const valueObject = new StubValueObject(value.received);
      expect(valueObject + "").toBe(value.expected);
    });
  });

  it("Should be immutable", () => {
    const valueObject = new StubValueObject({
      prop1: "value",
      nested: { prop2: new Date() },
    });
    expect(() => {
      valueObject["_value"].nested.prop2 = "changed";
    }).toThrow(
      "Cannot assign to read only property 'prop2' of object '#<Object>'"
    );
    console.log(valueObject);
  });
});
