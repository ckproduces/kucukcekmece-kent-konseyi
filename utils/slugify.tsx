// utils/slugify.ts
export function slugify(str: string): string {
  const from = "ğüşöçıĞÜŞÖÇİ";
  const to = "gusociGUSOCI";

  return str
    .split("")
    .map((char) => {
      const index = from.indexOf(char);
      return index > -1 ? to[index] : char;
    })
    .join("")
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // remove non-word characters
    .replace(/\s+/g, "-") // replace spaces with -
    .replace(/--+/g, "-"); // collapse multiple -
}
