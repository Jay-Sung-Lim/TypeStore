import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button className='bg-brand text-white py-3 px-4 rounded hover:brightness-110' onClick={onClick}>
      {text}
    </button>
  );
}
