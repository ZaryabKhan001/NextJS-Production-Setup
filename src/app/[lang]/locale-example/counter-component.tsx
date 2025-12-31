'use client';
import { useState } from 'react';

import { useTranslate } from '@/shared/hooks/useTranslate';

const Counter = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslate();

  return (
    <p>
      This component is rendered on client:
      <button onClick={() => setCount(n => n - 1)}>{t('decrement')}</button>
      {count}
      <button onClick={() => setCount(n => n + 1)}>{t('increment')}</button>
    </p>
  );
};

export default Counter;
