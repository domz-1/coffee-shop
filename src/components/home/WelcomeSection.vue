<template>
    <section class="py-16 md:py-24 bg-white" :dir="dir">
        <div class="max-w-[1240px] mx-auto px-4">
            <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <!-- Left Side: Image -->
                <div class="w-full lg:w-1/2 relative">
                    <div class="relative z-10">
                        <img src="/home/welcome-coffee-bags.png" alt="Welcome to Our Shop"
                            class="w-full h-auto drop-shadow-2xl rounded-2xl" />
                    </div>
                    <!-- Decorative circle behind image -->
                    <div class="absolute -top-10 -left-10 w-40 h-40 bg-[#004876]/5 rounded-full -z-0"></div>
                    <div class="absolute -bottom-10 -right-10 w-60 h-60 bg-[#6F4336]/5 rounded-full -z-0"></div>
                </div>

                <!-- Right Side: Content -->
                <div class="w-full lg:w-1/2 text-left rtl:text-right">
                    <h2 class="text-[#3B2F2F] font-bold text-3xl md:text-5xl mb-4 leading-tight">
                        {{ t('welcome.title') }}
                    </h2>
                    <p class="text-[#8B8BA5] text-lg md:text-xl font-medium mb-12">
                        {{ t('welcome.subtitle') }}
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Feature 1: Quality -->
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-14 h-14 bg-[#6F4336] rounded-full flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-[#004876] font-bold text-xl mb-1">{{ t('welcome.features.quality.title')
                                    }}</h3>
                                <p class="text-[#8B8BA5] text-sm leading-relaxed">
                                    {{ t('welcome.features.quality.desc') }}
                                </p>
                            </div>
                        </div>

                        <!-- Feature 2: Easy -->
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-14 h-14 bg-[#6F4336] rounded-full flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
                                    <line x1="6" y1="2" x2="6" y2="4" />
                                    <line x1="10" y1="2" x2="10" y2="4" />
                                    <line x1="14" y1="2" x2="14" y2="4" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-[#004876] font-bold text-xl mb-1">{{ t('welcome.features.easy.title') }}
                                </h3>
                                <p class="text-[#8B8BA5] text-sm leading-relaxed">
                                    {{ t('welcome.features.easy.desc') }}
                                </p>
                            </div>
                        </div>

                        <!-- Feature 3: Taste -->
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-14 h-14 bg-[#6F4336] rounded-full flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-[#004876] font-bold text-xl mb-1">{{ t('welcome.features.taste.title')
                                    }}</h3>
                                <p class="text-[#8B8BA5] text-sm leading-relaxed">
                                    {{ t('welcome.features.taste.desc') }}
                                </p>
                            </div>
                        </div>

                        <!-- Feature 4: Quick -->
                        <div class="flex items-start gap-4">
                            <div
                                class="flex-shrink-0 w-14 h-14 bg-[#6F4336] rounded-full flex items-center justify-center">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-[#004876] font-bold text-xl mb-1">{{ t('welcome.features.quick.title')
                                    }}</h3>
                                <p class="text-[#8B8BA5] text-sm leading-relaxed">
                                    {{ t('welcome.features.quick.desc') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useLang } from "@/composables/useLang";

const { t, dir } = useLang();
</script>

<style scoped>
.font-quicksand {
    font-family: 'Quicksand', sans-serif;
}
</style>
