import React, { useState } from 'react';

const StudentForm = () => {
  const [student, setStudent] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${student.name}, Age: ${student.age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Form</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;