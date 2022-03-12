import { deepFreeze } from "./object";
describe("object Unit Tests", () => {
  it("Should not freeze a scalar value", () => {
    const str = deepFreeze("a");
    expect(typeof str).toBe("string");

    let boolean = deepFreeze(true);
    expect(typeof boolean).toBe("boolean");

    boolean = deepFreeze(false);
    expect(typeof boolean).toBe("boolean");

    const number = deepFreeze(1);
    expect(typeof number).toBe("number");
  });
  it("Should be immutable object", () => {
    const valueObject = deepFreeze({
      prop1: "value",
      nested: { prop2: new Date() },
    });
    expect(() => {
      (valueObject as any).prop1 = "aaaaa";
    }).toThrow(
      "Cannot assign to read only property 'prop1' of object '#<Object>'"
    );

    expect(() => {
      (valueObject as any).prop2 = new Date();
    }).toThrow("Cannot add property prop2, object is not extensible");

    expect(valueObject.nested.prop2).toBeInstanceOf(Date);
  });
});
