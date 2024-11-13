import { useState } from 'react';

export default function Task1() {
  const [color, setColor] = useState('');

  return (
    <div className={`flex space-x-4 w-full h-screen ${color ? color : 'bg-slate-800'}`}>
      <p className='text-white'>Change Color</p>
      <button
        className='border bg-red-800 py-4 px-6'
        onClick={() => setColor('bg-red-800')}
      >
        Red
      </button>
      <button
        className='border bg-blue-800 py-4 px-6'
        onClick={() => setColor('bg-blue-800')}
      >
        Blue
      </button>
      <button
        className='border bg-green-800 py-4 px-6'
        onClick={() => setColor('bg-green-800')}
      >
        Green
      </button>
      {color && <p className='text-white'>{`Selected Color: ${color.split('-')[1]}`}</p>}
    </div>
  );
}




