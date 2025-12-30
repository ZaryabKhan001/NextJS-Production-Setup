'use client';
import React, { createContext, useContext } from 'react';

import type { Dictionary } from '@/features/internationalization/get-dictionaries';

const DictionaryContext = createContext<Dictionary | null>(null);

export const DictionaryProvider = ({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: React.ReactNode;
}) => {
  return (
    <DictionaryContext.Provider value={dictionary}>
      {children}
    </DictionaryContext.Provider>
  );
};

export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (!context)
    throw new Error('useDictionary must be used within a DictionaryProvider');
  return context;
};
