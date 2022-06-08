import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import ko from "date-fns/locale/ko";

export const BasicRangeCalendar = () => {
  const selection = { startDate: new Date(), endDate: new Date() };
  const [state, setState] = useState(selection);
  const selectionRange = {
    ...state,
    key: "selection",
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    setState({
      startDate: ranges.selection?.startDate ?? state.startDate,
      endDate: ranges.selection?.endDate ?? state.endDate,
    });
  };

  return (
    <DateRangePicker
      locale={ko}
      ranges={[selectionRange]}
      onChange={handleSelect}
    />
  );
};
