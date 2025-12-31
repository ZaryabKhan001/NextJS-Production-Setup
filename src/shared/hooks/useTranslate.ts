import { useDictionary } from '@shared/context/DictionaryContext';

export const useTranslate = () => {
  const dictionary = useDictionary();

  const t = (key: string): string => {
    return dictionary[key] ?? key;
  };

  return { t };
};
