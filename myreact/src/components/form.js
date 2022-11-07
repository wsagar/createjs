import React, { useState } from "react";

class Person {
  userid;
  password;
  constructor(userid = "", password = "") {
    this.userid = userid;
    this.password = password;
  }
}

export default function Personfrom() {
  const [personinfo, setSubmitInfo] = useState(new Person());
  const [passwordType, setPassWordType] = useState("password");
  const SubmitForm = (event) => {
    console.log(event);
    event.preventDefault();
    console.log(personinfo);
  };

  const updatePersonForm = (event) => {
    console.log(event);
    setSubmitInfo({
      ...personinfo,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <form onSubmit={SubmitForm}></form>
      <div>
        <input
          type="text"
          placeholder="userid"
          id="userid"
          value={personinfo.userid}
          onChange={updatePersonForm}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          id="password"
          value={personinfo.password}
          onChange={updatePersonForm}
        />
        <button
          type="button"
          onClick={() => {
            setPassWordType((prev) =>
              prev === "password" ? "text" : "password"
            );
          }}
        >
          {passwordType === "password" ? "show" : "hide"}
        </button>
      </div>
      <div>
        <button type="submit">Click to submit</button>
      </div>
    </>
  );
}
