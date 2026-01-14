<script setup lang="ts">
import { useLang } from "@/composables/useLang";
const { t, dir } = useLang();
import IconFeatureQuality from "@/components/icons/IconFeatureQuality.vue";
import IconFeatureEasy from "@/components/icons/IconFeatureEasy.vue";
import IconFeatureTaste from "@/components/icons/IconFeatureTaste.vue";
import IconFeatureQuick from "../icons/IconFeatureQuick.vue";
</script>
<template>
  <section
    class="py-16 md:py-24 lg:bg-[url('/why-us/image.webp')] lg:bg-size-[675px_1010.85px] bg-no-repeat relative min-h-[100vh] lg:min-h-[200vh]"
    :dir="dir"
  >
    <img
      src="/why-us/peens.png"
      alt=""
      width="200"
      height="200"
      loading="lazy"
      class="absolute bottom-[10%] right-4 w-[200px] hidden lg:block"
    />
    <div class="max-w-[1240px] mx-auto px-4">
      <div
        class="flex flex-col-reverse lg:flex-row rtl:lg:flex-row-reverse items-center gap-12 lg:gap-20"
      >
        <div class="w-full lg:w-1/2 relative">
          <div class="relative z-10">
            <img
              src="/home/welcome-coffee-bags.webp"
              alt="Welcome to Our Shop"
              width="600"
              height="400"
              loading="lazy"
              class="w-full h-auto rounded-2xl min-w-[1010px] -translate-x-12 translate-y-[70%] lg:-translate-x-[25%] lg:translate-y-[0%] lg:rtl:translate-x-[25%]"
            />
          </div>
        </div>
        <div
          class="w-full lg:w-1/2 text-left rtl:text-right translate-y-[50%] lg:translate-y-0 lg:mt-0 lg:translate-x-0"
        >
          <h2
            class="text-cs-smoked-black-coffee font-bold text-3xl md:text-5xl mb-4 leading-tight"
          >
            {{ t("welcome.title") }}
          </h2>
          <p
            class="text-cs-delicate-violet text-lg md:text-xl font-medium mb-12"
          >
            {{ t("welcome.subtitle") }}
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-14 h-14 bg-cs-uluru-sunset rounded-full flex items-center justify-center"
              >
                <IconFeatureQuality />
              </div>
              <div>
                <h3 class="text-cs-medici-blue font-bold text-xl mb-1">
                  {{ t("welcome.features.quality.title") }}
                </h3>
                <p class="text-cs-delicate-violet text-sm leading-relaxed">
                  {{ t("welcome.features.quality.desc") }}
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-14 h-14 bg-cs-uluru-sunset rounded-full flex items-center justify-center"
              >
                <IconFeatureEasy />
              </div>
              <div>
                <h3 class="text-cs-medici-blue font-bold text-xl mb-1">
                  {{ t("welcome.features.easy.title") }}
                </h3>
                <p class="text-cs-delicate-violet text-sm leading-relaxed">
                  {{ t("welcome.features.easy.desc") }}
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-14 h-14 bg-cs-uluru-sunset rounded-full flex items-center justify-center"
              >
                <IconFeatureTaste />
              </div>
              <div>
                <h3 class="text-cs-medici-blue font-bold text-xl mb-1">
                  {{ t("welcome.features.taste.title") }}
                </h3>
                <p class="text-cs-delicate-violet text-sm leading-relaxed">
                  {{ t("welcome.features.taste.desc") }}
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-14 h-14 bg-cs-uluru-sunset rounded-full flex items-center justify-center"
              >
                <IconFeatureQuick />
              </div>
              <div>
                <h3 class="text-cs-medici-blue font-bold text-xl mb-1">
                  {{ t("welcome.features.quick.title") }}
                </h3>
                <p class="text-cs-delicate-violet text-sm leading-relaxed">
                  {{ t("welcome.features.quick.desc") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
