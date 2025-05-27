import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["tr", "en", "ru", "az"],

  // Used when no locale matches
  defaultLocale: "tr",
});
