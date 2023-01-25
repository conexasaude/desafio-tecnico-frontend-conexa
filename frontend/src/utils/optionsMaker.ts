import { GroupBase, Options, OptionsOrGroups } from "react-select";

export function optionsMaker(items: unknown[], labels: string[]) {
  return items.map((item) => ({
    value: item,
    label:
      labels.length > 1
        ? labels.reduce((last, label) => item[last] + " " + item[label])
        : item[labels[0]],
  }));
}
