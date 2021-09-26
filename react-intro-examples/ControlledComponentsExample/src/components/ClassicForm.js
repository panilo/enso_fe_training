import React from "react";

// This component describes a classic form
export default function Form() {
  function handleFormSubmission(event) {
    event.preventDefault();
    alert("Form sent!");
  }

  return (
    <form onSubmit={(event) => handleFormSubmission(event)}>
      <input type="text" name="name" placeholder="Name" />
      <button type="submit">Send form</button>
    </form>
  );
}
