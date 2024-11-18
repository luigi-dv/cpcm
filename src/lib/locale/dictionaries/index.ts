import Negotiator from 'negotiator';
import { LOCALES } from '@/constants/locales';
import { match } from '@formatjs/intl-localematcher';

import 'server-only';

type DictionaryLoader = () => Promise<any>; // Replace `any` with the actual type of the dictionary if known
type Dictionaries = {
  [key: string]: DictionaryLoader;
};

// Define the dictionaries object
const dictionaries: Dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  es: () => import('@/locales/es.json').then((module) => module.default),
  default: () => import('@/locales/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: string) => {
  const selectedLocale = LOCALES.includes(locale) ? locale : 'en';
  const dictionaryLoader = dictionaries[selectedLocale] || dictionaries.default;
  return await dictionaryLoader();
};

export const getLocale = (request: Request) => {
  let headers = { 'accept-language': 'en-US,en;q=0.5' };
  let languages = new Negotiator({ headers }).languages();
  let defaultLocale = 'en';

  return match(languages, LOCALES, defaultLocale);
};
