import React, { useEffect, useState } from "react";
import Checkboxdemo from "./components/check";
import Todolist from "./components/todolist";
import Chats from "./components/useEffectdemo";
const world = [
  {
    name: "world",
    id: 0,
    checked: false,
    children: [
      {
        name: "India",
        id: 1,
        children: [
          {
            name: "maharashtra",
            id: 2,
            children: [
              {
                name: "beed",
                id: 3,
                children: [
                  {
                    name: "Gevrai",
                    id: 4,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Pakistan",
        id: 100,
      },
    ],
  },
  {
    name: "galaxy",
    id: 1000,
    children: [
      {
        name: "krypton",
        id: 2000,
      },
    ],
  },
];

export default function App() {
  const [count, updateCount] = useState([12345679]);
  const [menus, setMenus] = useState(world);
  const updatenumber = () => {
    updateCount(
      count.map((ele) => {
        return ele * 9;
      })
    );
  };

  const ReturnTo = () => {
    updateCount(
      count.map((ele) => {
        return ele / 9;
      })
    );
  };

  useEffect(() => {
    console.log("hello");
  }, count);

  return (
    <>
      {/* <Checkboxdemo menus={menus} />
      <Todolist /> */}
      <Chats />
    </>
  );
}
