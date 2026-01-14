<script setup lang="ts">
import { useLang } from "@/composables/useLang";
const { t, dir } = useLang();
import IconFacebook from "@/components/icons/IconFacebook.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
</script>
<template>
  <footer
    class="bg-linear-to-r from-cs-medici-blue to-cs-deep-water text-white relative mt-20"
    :dir="dir"
  >
    <div class="absolute top-[-80%] right-0 z-10">
      <img
        src="/footer/footer.webp"
        alt="Footer Decorative Image"
        width="400"
        height="400"
        loading="lazy"
        class="object-contain drop-shadow-2xl max-w-[25vw] hidden lg:block"
      />
    </div>
    <div class="max-w-[654.62px] mx-auto px-4 py-20 pb-10">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div class="flex flex-col gap-4 text-left rtl:text-right">
          <h3
            class="font-['Cormorant_Infant'] font-semibold text-[18px] leading-[22px] tracking-[1px] capitalize"
          >
            {{ t("footer.menu") }}
          </h3>
          <nav class="flex flex-col gap-3">
            <router-link
              to="/"
              class="font-['Inter'] font-medium text-[14px] text-white/60 transition-colors duration-200 hover:text-white"
              >{{ t("footer.getInspired") }}</router-link
            >
            <router-link
              to="/"
              class="font-['Inter'] font-medium text-[14px] text-white/60 transition-colors duration-200 hover:text-white"
              >{{ t("footer.ourProducts") }}</router-link
            >
            <router-link
              to="/"
              class="font-['Inter'] font-medium text-[14px] text-white/60 transition-colors duration-200 hover:text-white"
              >{{ t("footer.contact") }}</router-link
            >
          </nav>
        </div>
        <div class="flex flex-col gap-4 text-left rtl:text-right">
          <h3
            class="font-['Cormorant_Infant'] font-semibold text-[18px] leading-[22px] tracking-[1px] capitalize"
          >
            {{ t("footer.location") }}
          </h3>
          <div class="flex flex-col gap-3">
            <p class="font-['Inter'] font-medium text-[14px]">
              {{ t("footer.availableIn") }}
            </p>
            <p class="font-['Inter'] font-medium text-[14px] text-white/60">
              {{ t("footer.lorem") }}
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-4 text-left rtl:text-right">
          <h3
            class="font-['Cormorant_Infant'] font-semibold text-[18px] leading-[22px] tracking-[1px] capitalize"
          >
            {{ t("footer.contact") }}
          </h3>
          <div class="flex flex-col gap-3">
            <p class="font-['Inter'] font-medium text-[14px]">
              {{ t("footer.question") }}
            </p>
            <a
              href="mailto:info@example.com"
              class="font-['Inter'] font-medium text-[14px] text-white/60 hover:text-white underline"
              >info@example.com</a
            >
          </div>
        </div>
      </div>
      <div class="w-full h-[1px] bg-white opacity-20 my-10"></div>
      <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
        <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p class="text-[10px] opacity-60 font-sans tracking-wide uppercase">
            © {{ new Date().getFullYear() }} Coffee Shop.
            {{ t("footer.rights") }}
          </p>
          <router-link
            to="/"
            class="font-['Inter'] font-medium text-[10px] tracking-[2.4px] uppercase text-white/60 hover:text-white"
            >{{ t("footer.privacy") }}</router-link
          >
        </div>
        <div class="flex gap-3">
          <a
            href="#"
            aria-label="Facebook"
            class="w-[28px] h-[28px] border border-white/20 rounded-full flex items-center justify-center transition-all hover:border-white hover:bg-white/10"
          >
            <IconFacebook class="w-3 h-3 text-white" />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            class="w-[28px] h-[28px] border border-white/20 rounded-full flex items-center justify-center transition-all hover:border-white hover:bg-white/10"
          >
            <IconInstagram class="w-3 h-3 text-white" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            class="w-[28px] h-[28px] border border-white/20 rounded-full flex items-center justify-center transition-all hover:border-white hover:bg-white/10"
          >
            <IconLinkedIn class="w-3 h-3 text-white" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
