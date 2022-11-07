import React, { useState } from "react";

export default function Info({ list }) {
  if (!list || list.length == 0) {
    return <h1>List is empty</h1>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobileno</th>
        </tr>
      </thead>
      <tbody>
        {list.map((infoPerson) => {
          return (
            <tr key={infoPerson.name}>
              <td>{infoPerson.name}</td>
              <td>{infoPerson.email}</td>
              <td>{infoPerson.mobileno}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
