export const nullish = <T>(i: T | null | undefined): T | null => {
  if (typeof i === "undefined") return null;
  if (typeof i === "number" && Number.isNaN(i)) return null;
  if (typeof i === "boolean" && i === false) return null;
  if (i === null) return null;
  return i;
};
