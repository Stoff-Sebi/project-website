import { MultilangText } from "nampi-use-api";

export const serializeLabels = <
  T extends { labels: MultilangText[] | undefined } = { labels: MultilangText[] }
>(
  data: T
): string => {
  if(data.labels){
    return data.labels.map((l) => l.value).join(", ");
  } else {
    return "MISSING";
  }
  
}
