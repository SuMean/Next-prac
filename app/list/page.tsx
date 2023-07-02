"use client";

import { useState } from "react";

export default function List() {
  const 상품 = ["Tomatoes", "Pasta", "Coconut"];
  const [수량, 수량변경] = useState([0, 0, 0]);
  return (
    <div>
      <h4 className="title">상품목록</h4>

    

      {상품.map((a, i) => {
        return (
          <div className="food" key={i}>
            <img src={`/food${i}.png`} className="food-img" />
            <h4>{상품[i]} $40</h4>
            <button
              onClick={() => {
                const copy = [...수량];
                copy[i]--;
                수량변경(copy);
              }}
            >
              -
            </button>
            <span>{수량[i]}</span>
            <button
              onClick={() => {
                const copy = [...수량];
                copy[i]++;
                수량변경(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}
