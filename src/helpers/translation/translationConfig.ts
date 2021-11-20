//goes down to native ios or android to find out wich locale they are using
import * as Localization from "expo-localization";
import i18n from "i18n-js"; //does the translation

import { english } from "./en";
import { swedish } from "./sv";

export const translate = (key: string) => i18n.t(key);

const getLocale = () => {
  return Localization.locale.slice(0, 2); //to overcome the difference between ios and android returned locale.
};
export const setI18nConfig = () => {
  i18n.translations = { en: english, sv: swedish };
  i18n.fallbacks = true;  
  i18n.locale = getLocale();
};