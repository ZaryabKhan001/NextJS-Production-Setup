'use client';
import React, { useState } from 'react';

import { useDictionary } from '@/shared/context/DictionaryContext';

const Counter = () => {
  const [count, setCount] = useState(0);
  const dictionary = useDictionary();
  return (
    <p>
      This component is rendered on client:
      <button onClick={() => setCount(n => n - 1)}>
        {dictionary.counter.decrement}
      </button>
      {count}
      <button onClick={() => setCount(n => n + 1)}>
        {dictionary.counter.increment}
      </button>
    </p>
  );
};

export default Counter;
