import React from "react";
export default function Alert({ err }) {
  return (
    <div>
      <div className="alert alert-danger" role="alert">
        {err}
      </div>
    </div>
  );
}