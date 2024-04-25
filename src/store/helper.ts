export function getYear(year: string) {
  return new Date(year).getFullYear();
}
export function getRuntime(runtime: number, type: string) {
  let h = Math.floor(runtime / 60);
  let m = runtime - h * 60;
  return type === "movie" ? `${h} Час : ${m} Минут` : `${m} Минут`;
}
