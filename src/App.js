import React, { useState } from 'react';
import useSWR from 'swr';

const LIST_ALL_BREEDS_ENDPOINT = 'https://dog.ceo/api/breeds/list/all';

const fetchJSON = async (endpoint) =>
  await fetch(endpoint).then((x) => x.json());

const App = () => {
  const { data } = useSWR(LIST_ALL_BREEDS_ENDPOINT, fetchJSON);
  const [selectedbreef, setselectedbreed] = useState(null);

  if (!data) return null;
  const list = Object.keys(data.message);

  return (
    <div>
      {selectedbreef}
      <ul>
        {list.map((breed) => (
          <li>
            <button onClick={() => setselectedbreed(breed)}>{breed}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
