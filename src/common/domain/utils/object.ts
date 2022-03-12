export function deepFreeze<T>(obj: T) {
  if (!obj) return Object.freeze(obj);
  const propNames = Object.getOwnPropertyNames(obj);
  for (const name of propNames) {
    const value = obj[name as keyof T];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(obj);
}

//   propNames.forEach((prop) => {
//     if (prop && prop === "object") {
//       deepFreeze(prop);
//     }
//   });
