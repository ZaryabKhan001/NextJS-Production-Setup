import 'server-only';

import { Locale } from './i18n.config';

const dictionaries = {
  'en-US': () =>
    import('./dictionaries/en-US.json').then(module => module.default),
  ar: () => import('./dictionaries/ar.json').then(module => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries['en-US']();

export type Dictionary = Record<string, any>;
