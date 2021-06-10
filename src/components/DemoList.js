import React, { useMemo } from "react";

const DemoList = (props) => {
  console.log("DemoList");

  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  return (
    <div>
      <h1>{props.title}</h1>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
