<script setup lang="ts">
import { ref } from "vue";
import { VueMarqueeSlider } from "vue3-marquee-slider";
import "../../../node_modules/vue3-marquee-slider/dist/style.css";
const isPaused = ref(false);
</script>
<template>
  <section
    class="marquee-section"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <div class="marquee-container">
      <VueMarqueeSlider
        id="coffee-marquee"
        :speed="12000"
        :space="48"
        :paused="isPaused"
        :auto-width="true"
        :repeat="20"
      >
        <template v-for="i in 10" :key="i">
          <img src="/marquee/peen.png" alt="Bean" class="marquee-asset" />
          <img
            src="/marquee/text.png"
            alt="Coffee House"
            class="marquee-asset"
          />
        </template>
      </VueMarqueeSlider>
    </div>
  </section>
</template>
<style scoped>
.marquee-section {
  width: 100%;
  overflow: hidden;
  background-color: #fdfdfd;
  padding: 20px 0;
  border-bottom: 1px solid #f2f2f2;
  cursor: pointer;
}
.marquee-container {
  width: 100%;
}
.marquee-asset {
  height: 28px;
  width: auto;
  object-fit: contain;
  display: block;
}
:deep(.vue-marquee-slider) {
  height: 28px;
  align-items: center;
}
</style>
