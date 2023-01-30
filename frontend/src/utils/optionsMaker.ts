export function optionsMaker<T>(items: T[], labels: string[]) {
  return items.map((item: T) => ({
    value: item,
    label:
      labels.length > 1
        ? labels.reduce((last, label) => item[last] + " " + item[label])
        : item[labels[0]],
  }));
}
