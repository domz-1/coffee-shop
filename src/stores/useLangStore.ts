import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import i18n from '@/i18n';

export const useLangStore = defineStore('lang', () => {
    const currentLocale = ref(localStorage.getItem('user-locale') || 'en');

    // Watch for changes and update i18n and document attributes
    watch(currentLocale, (newLocale) => {
        i18n.global.locale.value = newLocale as 'en' | 'ar';
        document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLocale;
        localStorage.setItem('user-locale', newLocale);
    }, { immediate: true });

    const toggleLocale = () => {
        currentLocale.value = currentLocale.value === 'en' ? 'ar' : 'en';
    };

    return {
        currentLocale,
        toggleLocale
    };
}, {
    persist: true
});
