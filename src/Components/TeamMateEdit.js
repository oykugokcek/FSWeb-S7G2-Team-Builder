import { useState } from "react";

export default function TeamMateEdit({ person, onSubmit }) {
  const [editingPerson, setEditingPerson] = useState(person);

  const handleChange = (event) => {
    setEditingPerson(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(
      person.id,
      editingPerson.name,
      editingPerson.email,
      editingPerson.role
    );
  };

  return (
    <div>
      <form className="form">
        <p>
          <label htmlFor="name" className="formItem">
            <input
              placeholder="Name"
              id="name"
              value={editingPerson.name}
              type="text"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="email" className="formItem">
            <input
              placeholder="Email"
              id="email"
              value={editingPerson.email}
              type="text"
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <label htmlFor="role" className="formItem">
            <input
              placeholder="Role"
              id="role"
              value={editingPerson.role}
              type="text"
              onChange={handleChange}
            />
          </label>
        </p>
        <button onClick={handleSubmit}>Edit</button>
      </form>
    </div>
  );
}
