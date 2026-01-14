import { computed } from 'vue';
import { useLangStore } from '@/stores/useLangStore';
import { useI18n } from 'vue-i18n';

export function useLang() {
    const { t } = useI18n();
    const langStore = useLangStore();

    const currentLocale = computed(() => langStore.currentLocale);
    const isRtl = computed(() => langStore.currentLocale === 'ar');
    const dir = computed(() => isRtl.value ? 'rtl' : 'ltr');

    return {
        t,
        locale: currentLocale,
        isRtl,
        dir,
        toggleLocale: langStore.toggleLocale
    };
}
