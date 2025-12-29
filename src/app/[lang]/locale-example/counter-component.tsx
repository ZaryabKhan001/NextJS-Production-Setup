'use client';
import React, { useState } from 'react';

import { getDictionary } from '@/features/internationalization/get-dictionaries';

const Counter = ({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['counter'];
}) => {
  const [count, setCount] = useState(0);
  return (
    <p>
      This component is rendered on client:
      <button onClick={() => setCount(n => n - 1)}>
        {dictionary.decrement}
      </button>
      {count}
      <button onClick={() => setCount(n => n + 1)}>
        {dictionary.increment}
      </button>
    </p>
  );
};

export default Counter;
