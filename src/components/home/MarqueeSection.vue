<script setup lang="ts">
import { ref } from "vue";
import { VueMarqueeSlider } from "vue3-marquee-slider";
import { useLang } from "@/composables/useLang";
import "../../../node_modules/vue3-marquee-slider/dist/style.css";

const { locale, isRtl } = useLang();
const isPaused = ref(false);
</script>

<template>
  <section
    class="w-full overflow-hidden bg-[#fdfdfd] py-[10px] border-b border-[#f2f2f2] [&_.vue-marquee-slider]:h-[18px] [&_.vue-marquee-slider]:flex [&_.vue-marquee-slider]:items-center"
    @mouseenter="isPaused = true" @mouseleave="isPaused = false">
    <div class="w-full">
      <!-- Using :key="locale" ensures the marquee re-initializes on language change -->
      <!-- Added logic to handle direction if supported by the library -->
      <VueMarqueeSlider :key="locale" id="coffee-marquee" :speed="12000" :space="32" :paused="isPaused"
        :auto-width="true" :repeat="20" :reverse="isRtl">
        <template v-for="i in 10" :key="i">
          <img src="/marquee/peen.png" alt="Bean" class="h-[18px] w-auto object-contain block" />
          <img src="/marquee/text.png" alt="Coffee House" class="h-[18px] w-auto object-contain block" />
        </template>
      </VueMarqueeSlider>
    </div>
  </section>
</template>
