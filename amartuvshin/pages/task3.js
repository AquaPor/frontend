import { useState } from 'react';

function Task1() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <input 
        type='search' 
        onChange={(e) => setSearch(e.target.value)} 
        value={search}
      />
      <p>search: {search}</p>
    </div>
  );
}

export default Task1;
