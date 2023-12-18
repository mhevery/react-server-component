import { Person } from "./person";

export const TableStatic = ({ people }: { people: Person[] }) => {
  return (
    <div>
      showing {people.length} of {people.length} records.
      <ul className="table">
        <li className="row header">
          <div className="action"></div>
          <div className="name">Name</div>
          <div className="age">Age</div>
          <div className="location">Location</div>
        </li>
        {people.map((person) => (
          <Row key={person.id} data={person} />
        ))}
      </ul>
    </div>
  );
};

const Row = ({ data }: { data: Person }) => {
  return (
    <li className="row">
      <div className="action"></div>
      <div className="name">{data.name}</div>
      <div className="age">{data.age}</div>
      <div className="location">{data.location}</div>
    </li>
  );
};
