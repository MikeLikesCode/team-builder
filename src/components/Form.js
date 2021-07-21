import React from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (event) => {
    const { name, value } = event.target;
    update(name,value);
  };

  const onSubmit = (event) => {
      event.preventDefault();
      submit();
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            onChange={onChange}
            value={values.name}
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            onChange={onChange}
            value={values.email}
          />
        </label>

        <label>
          Role
          <select name="role" onChange={onChange} value={values.role}>
            <option value=""> -- Select a role --</option>
            <option value="Frontend">Frontend Developer</option>
            <option value="Backend">Backend Developer</option>
            <option value="Designer">Designer</option>
            <option value="Alumni">Alumni</option>
          </select>
        </label>

        <div className="submit">
          <button>submit</button>
        </div>
      </div>
    </form>
  );
}
