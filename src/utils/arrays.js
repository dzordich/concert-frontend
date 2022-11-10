import { complement, isEmpty } from "ramda";

export const isNotEmpty = complement(isEmpty);

const listFormatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});

export const formatList = (list) => listFormatter.format(list);
