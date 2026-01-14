import { defineStore } from 'pinia';
import { ref, watch, onMounted } from 'vue';
import i18n from '@/i18n';
import router from '@/router';

export const useLangStore = defineStore('lang', () => {
    const getUrlLang = () => {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang');
    };

    const getStoredLocale = () => {
        const urlLang = getUrlLang();
        if (urlLang === 'en' || urlLang === 'ar') return urlLang;
        return localStorage.getItem('user-locale') || 'en';
    };

    const currentLocale = ref(getStoredLocale());

    const syncWithLocale = (newLocale: string) => {
        i18n.global.locale.value = newLocale as 'en' | 'ar';
        document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLocale;
        localStorage.setItem('user-locale', newLocale);

        const currentRoute = router.currentRoute.value;
        if (currentRoute.query.lang !== newLocale) {
            router.replace({
                query: { ...currentRoute.query, lang: newLocale }
            });
        }
    };

    watch(currentLocale, (newVal) => {
        syncWithLocale(newVal);
    });

    const toggleLocale = () => {
        currentLocale.value = currentLocale.value === 'en' ? 'ar' : 'en';
    };

    const handleUrlSync = () => {
        const urlLang = getUrlLang();
        if (urlLang === 'en' || urlLang === 'ar') {
            currentLocale.value = urlLang;
            syncWithLocale(urlLang);
        } else {
            syncWithLocale(currentLocale.value);
        }
    };

    onMounted(() => {
        handleUrlSync();
    });

    window.addEventListener('popstate', handleUrlSync);

    return {
        currentLocale,
        toggleLocale
    };
});
