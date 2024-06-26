import React from "react";

export default function DataForm() {
  return (
    <div className="form">
      {/* getting user's info from local storage and displaying */}
      <p>Name: {JSON.parse(localStorage.getItem("formData")).name}</p>
      <p>Email: {JSON.parse(localStorage.getItem("formData")).email}</p>
      <p>Message: {JSON.parse(localStorage.getItem("formData")).message}</p>
    </div>
  );
}
