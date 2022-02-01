import React from 'react';
export default function Button({ dataa }) {
  const { classname, data, func } = dataa;
  return (
    <button onClick={() => func(data)} className={classname}>
      {data}
    </button>
  );
}
