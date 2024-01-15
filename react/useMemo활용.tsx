import React, { useMemo, useState } from "react";

const hardCaluate = (number: number) => {
  console.log("어려운 계산!");
  for (
    let i = 0;
    i < 100000;
    i++ // 생각하는 시간
  ) {
    console.log(i);
  }
  return number + 10000;
};
const easyCalculate = (number: number) => {
  console.log("짱쉬운 계산!");

  return number + 1;
};

export default function App() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);
  const hardSum = useMemo(() => hardCaluate(hardNumber), [hardNumber]);
  const easySum = easyCalculate(easyNumber);
  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 10000 = {easySum}</span>
    </div>
  );
}

import React, { ChangeEvent, useEffect, useMemo, useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(
    () => ({ country: isKorea ? "한국" : "외국" }),
    [isKorea]
  );
  //   {
  //     country: isKorea ? "한국" : "외국",
  //   };

  useEffect(() => {
    console.log("useEfeect 호출");
  }, [location]);
  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNumber(Number(e.target.value))
        }
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}
