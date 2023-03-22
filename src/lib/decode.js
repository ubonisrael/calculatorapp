export function decode(string) {
  let txt = new DOMParser().parseFromString(string, "text/html");

  return txt.documentElement.textContent;
}
