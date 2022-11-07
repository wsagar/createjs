import React, { useState } from "react";
import Info from "./reducerconcept";

export class Person {
  name;
  email;
  mobileno;

  constructor(name = "", email = "", mobileno = "") {
    this.name = name;
    this.email = email;
    this.mobileno = mobileno;
  }
}

export default function Personnorms() {
  const [info, updateInfo] = useState(new Person());
  const [personList, updatePersonList] = useState([]);
  const updateForm = (e) => {
    console.log(e);
    e.preventDefault();
    updatePersonList([...personList, info]);
  };

  const updatePersonForm = (e) => {
    console.log(e);
    updateInfo({
      ...info,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={updateForm}>
        <div>
          <input
            type="text"
            placeholder="name"
            value={info.name}
            onChange={updatePersonForm}
            id="name"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            value={info.email}
            onChange={updatePersonForm}
            id="email"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="mobileno"
            onChange={updatePersonForm}
            value={info.mobileno}
            id="mobileno"
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <Info list={personList} />
    </>
  );
}
