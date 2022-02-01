import React from 'react';
export default function Input(props) {
  return (
    <div className="inputBox">
      <input
        type="text"
        name="calc"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
