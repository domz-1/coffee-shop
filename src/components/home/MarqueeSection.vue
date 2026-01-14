<script setup lang="ts">
import { ref } from "vue";
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "../../../node_modules/vue3-marquee-slider/dist/style.css";
const isPaused = ref(false);
</script>
<template>
  <section
    class="w-full overflow-hidden bg-[#fdfdfd] py-[20px] border-b border-[#f2f2f2] cursor-pointer [&_.vue-marquee-slider]:h-[28px] [&_.vue-marquee-slider]:flex [&_.vue-marquee-slider]:items-center"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <div class="w-full">
      <VueMarqueeSlider
        id="coffee-marquee"
        :speed="12000"
        :space="48"
        :paused="isPaused"
        :auto-width="true"
        :repeat="20"
      >
        <template v-for="i in 10" :key="i">
          <img
            src="/marquee/peen.png"
            alt="Bean"
            class="h-[28px] w-auto object-contain block"
          />
          <img
            src="/marquee/text.png"
            alt="Coffee House"
            class="h-[28px] w-auto object-contain block"
          />
        </template>
      </VueMarqueeSlider>
    </div>
  </section>
</template>
