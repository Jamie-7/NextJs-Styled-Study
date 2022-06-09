import React, { FC, MouseEventHandler, useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";

interface ItemType {
  id: number;
  name: string;
}

export const BasicSortable: FC = () => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: "shrek" },
    { id: 2, name: "fiona" },
    { id: 3, name: "hola" },
    { id: 4, name: "nora" },
    { id: 5, name: "mama" },
  ]);

  const Event = (e: Event) => {
    console.log(state);
  };

  const ButtonEvent: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(state);
  };

  //   useEffect(() => {
  //     // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
  //     const timer = setInterval(() => {
  //         console.log(state);
  //     }, 1000);
  //     console.log('ho');
  //     return () => {
  //         clearInterval(timer);
  //         console.log('ha?');
  //     }
  //   }, [state]);

  return (
    <>
      <ReactSortable list={state} setList={setState} onChange={Event}>
        {state.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </ReactSortable>
      <button type="button" onClick={ButtonEvent}>
        click
      </button>
    </>
  );
};
