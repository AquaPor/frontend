import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-[100vh] flex justify-center items-center text-4xl text-pink-400' >
          <p>{count}</p>
    </div>
        
  );
}
