import { defineStore } from "pinia";
import { ref, watch } from "vue";
import i18n from "@/i18n";
import router from "@/router";
export const useLangStore = defineStore("lang", () => {
  const getStoredLocale = () => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "en" || urlLang === "ar") return urlLang;
    return localStorage.getItem("user-locale") || "en";
  };
  const currentLocale = ref(getStoredLocale());
  const syncWithLocale = (newLocale: string) => {
    i18n.global.locale.value = newLocale as "en" | "ar";
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLocale;
    localStorage.setItem("user-locale", newLocale);
  };
  // Initial sync on store creation
  syncWithLocale(currentLocale.value);
  watch(currentLocale, (newVal) => {
    syncWithLocale(newVal);
  });
  const toggleLocale = () => {
    const nextLocale = currentLocale.value === "en" ? "ar" : "en";
    currentLocale.value = nextLocale;
    // Explicitly update router query when manually toggling
    router.replace({
      query: { ...router.currentRoute.value.query, lang: nextLocale },
    });
  };
  return {
    currentLocale,
    toggleLocale,
  };
});
