import { format as fmt } from "date-fns";
import { Event } from "nampi-use-api";

export const serializeEventDates = (
  events: undefined | Event[] = [],
  format = "yyyy-MM-dd",
  separator = ", "
): string => {
  const dates: string[] = [];
  for (let i = 0, length = events.length; i < length; i++) {
    // const d = events[i].date;
    // const dString = d.exact
    //   ? fmt(d.exact, format)
    //   : d.earliest && d.latest
    //     ? `${fmt(d.earliest, format)} - ${fmt(d.latest, format)}`
    //     : d.earliest
    //       ? fmt(d.earliest, format)
    //       : d.latest
    //         ? fmt(d.latest, format)
    //         : "";
    // if (dString) {
    //   dates.push(dString);
    // }

    if(events[i].earliest) dates.push(events[i].earliest as string);
    

    
  }
  return dates.join(separator);
};
