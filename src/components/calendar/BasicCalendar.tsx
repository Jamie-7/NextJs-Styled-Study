import { Calendar } from "react-date-range";
import { useState } from "react";

import styled from "styled-components";
import ko from "date-fns/locale/ko";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export const BasicCalendar = () => {
  const [state, setState] = useState(new Date());

  const handleSelect = (date: Date) => {
    setState(date);
  };

  return (
    <CalendarStyled>
      <Calendar
        locale={ko}
        date={state}
        onChange={handleSelect}
        color={"#7ab2da"}
      />
    </CalendarStyled>
  );
};

const CalendarStyled = styled.div`
  .rdrDay {
    height: 55px;
  }
  .rdrSelected {
    border-radius: 100px;
    height: 30px;
    width: 30px;
    margin: auto;
  }
`;
