<script setup lang="ts">
import HomeCarousel from "./HomeCarousel.vue";
import HeroText from "./HeroText.vue";
</script>
<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 md:px-0 bg-transparent pb-10 lg:pb-0 overflow-x-hidden! overflow-y-hidden!"
  >
    <div
      class="absolute top-[-50%] lg:top-[-20%] w-screen h-screen scale-150 z-0 opacity-50 md:opacity-100 pointer-events-none transition-all duration-700 right-[-15%] md:right-[-30%] rtl:right-auto rtl:left-[-15%] rtl:md:left-[-30%]"
    >
      <img
        src="../../../public/hero/beside-the-carousel.png"
        alt=""
        class="w-full h-full object-contain rtl:scale-x-[-1]"
      />
    </div>
    <div
      class="absolute w-fit top-[-10%] h-screen scale-100 z-0 opacity-50 md:opacity-100 pointer-events-none transition-all duration-700 left-[-0%] md:left-[-0%] rtl:left-auto rtl:right-[-0%] rtl:md:right-0"
    >
      <img
        src="../../../public/hero/squares-beside the text.png"
        alt=""
        class="w-full h-full object-contain rtl:scale-x-[-1]"
      />
    </div>
    <section
      class="relative w-full max-w-screen min-h-[720px] flex items-center overflow-hidden mt-12 md:mt-0"
    >
      <div
        class="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center h-full gap-12 py-10 lg:py-0 ps-0 md:ps-[15%] rtl:ps-0 rtl:pe-0 rtl:md:ps-[15%]"
      >
        <HeroText />
        <div
          class="w-full flex-1 flex items-center justify-center lg:justify-end overflow-hidden max-w-[800px] lg:pl-16 mt-8 lg:mt-0"
        >
          <HomeCarousel />
        </div>
      </div>
    </section>
  </div>
</template>
