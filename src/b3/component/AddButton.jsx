import React from "react";

export default function AddButton({ handleAddTodo,color,Icon }) {
  return (
    <button
      type='button'
      className={`btn btn-primary w-25 btn-${color}`}
      style={{ height: "36px" }}
      onClick={() => handleAddTodo()}
    >
      +
    </button>
  );
}
