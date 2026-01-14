<template>
  <div
    class="h-screen flex items-center justify-center px-4 md:px-[69px] bg-transparent"
  >
    <div class="absolute top-[-60%] right-[-10%] w-2/3 h-full z-0">
      <img
        src="../../../public/hero/beside-the-carousel.png"
        alt=""
        srcset=""
      />
    </div>
    <section
      class="relative w-full max-w-[100vm] h-[720px] flex items-center overflow-hidden"
    >
      <div
        class="relative z-10 w-full px-6 md:px-20 flex justify-between items-center h-full gap-12"
      >
        <div class="space-y-8 duration-1000">
          <div class="">
            <h1 class="flex items-center h-fit!">
              <img
                src="../../../public/hero/main-logo-hero.png"
                class="max-w-[351px]"
                alt=""
                srcset=""
              />
            </h1>
            <p
              class="text-neutral-500 text-xl max-w-md font-medium leading-relaxed"
            >
              Get your ordered (better) coffee delivered to you if you want.
            </p>
          </div>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              class="border border-neutral-300 hover:border-amber-600 hover:shadow-lg text-neutral-800 px-8 py-3 rounded-full font-bold flex items-center group transition-all duration-300"
            >
              <span>SHOP 20% OFF</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              class="bg-[#004876] p-4 rounded-full text-white hover:bg-[#00365a] hover:shadow-lg transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="flex-1 h-full flex items-center justify-end overflow-hidden max-w-[800px] pl-16"
        >
          <HeroCarousel />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import HeroCarousel from "./HeroCarousel.vue";
</script>
