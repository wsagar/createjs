import React, { useState } from "react";

export default function Checkboxdemo({ menus }) {
  const [m, setM] = useState(menus);
  const updateOnChange = (id) => {
    const index = m.findIndex((ms) => ms.id == id);
    if (index >= 0) {
      m[index].checked = !m[index].checked;
    }
    setM([...m]);
  };

  return (
    <ul>
      {menus.map((ele) => {
        return (
          <li key={ele.id}>
            <input
              type="checkbox"
              checked={ele.checked}
              id={ele.id}
              onChange={() => updateOnChange(ele.id)}
            />
            <label htmlFor={ele.id}>{ele.name}</label>
            {ele.children && ele.checked && (
              <Checkboxdemo menus={ele.children} />
            )}
          </li>
        );
      })}
    </ul>
  );
}
