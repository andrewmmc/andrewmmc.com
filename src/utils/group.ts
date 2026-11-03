export function groupByYear<T extends { year: number }>(
  items: T[]
): { year: number; items: T[] }[] {
  return items.reduce<{ year: number; items: T[] }[]>((groups, item) => {
    const group = groups.at(-1);
    if (group?.year === item.year) {
      group.items.push(item);
    } else {
      groups.push({ year: item.year, items: [item] });
    }
    return groups;
  }, []);
}
