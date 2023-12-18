"use client";
import { useState } from "react";
import { Person } from "./person";

export const TableDynamic = ({ people }: { people: Person[] }) => {
  const [filter, setFilter] = useState("");

  const contains = (text: string | number, fragment: string) =>
    String(text).toLowerCase().indexOf(fragment) !== -1;
  const fPeople = people.filter((person: Person) => {
    const text = filter.toLowerCase();
    return (
      contains(person.age, text) ||
      contains(person.name, text) ||
      contains(person.location, text)
    );
  });
  return (
    <div>
      <span>
        <label>Filter:</label>{" "}
        <input
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />{" "}
      </span>
      showing {fPeople.length} of {people.length} records.
      <ul className="table">
        <li className="row header">
          <div className="action"></div>
          <div className="name">Name</div>
          <div className="age">Age</div>
          <div className="location">Location</div>
        </li>
        {fPeople.map((person) => (
          <Row key={person.id} data={person} />
        ))}
      </ul>
    </div>
  );
};

const Row = ({ data }: { data: Person }) => {
  const [locked, setLocked] = useState(false);
  return (
    <li className="row">
      <div className="action">
        <button onClick={() => setLocked((locked) => !locked)}>
          {locked ? "🔐" : "🔓"}
        </button>
      </div>
      <div className="name">{data.name}</div>
      <div className="age">{data.age}</div>
      <div className="location">{data.location}</div>
    </li>
  );
};
