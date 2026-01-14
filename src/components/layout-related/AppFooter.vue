<template>
  <footer class="app-footer text-white">
    <div class="max-w-[1240px] mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Menu Column -->
        <div class="flex flex-col gap-6">
          <h3 class="footer-heading">Menu</h3>
          <nav class="flex flex-col gap-4">
            <router-link to="/" class="footer-link">Get inspired</router-link>
            <router-link to="/" class="footer-link">Our products</router-link>
            <router-link to="/" class="footer-link"
              >For a better world</router-link
            >
            <router-link to="/" class="footer-link">Contact</router-link>
            <router-link to="/" class="footer-link">Blog</router-link>
            <router-link to="/" class="footer-link">FAQ</router-link>
          </nav>
        </div>
        <!-- Store Locator Column -->
        <div class="flex flex-col gap-6">
          <h3 class="footer-heading">Cafe Location</h3>
          <div class="flex flex-col gap-4">
            <p class="footer-link opacity-100">We are available in</p>
            <p class="footer-link">lorem ipsum</p>
          </div>
        </div>
        <!-- Contact Column -->
        <div class="flex flex-col gap-6">
          <h3 class="footer-heading">Contact</h3>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
              <p class="footer-link opacity-100">
                Do you have a question? Send it to us!
              </p>
              <a
                href="mailto:info@example.com"
                class="footer-link hover:text-white transition-colors underline"
                >info@example.com</a
              >
            </div>
            <div class="flex flex-col">
              <p class="footer-link opacity-100">Phone</p>
              <a
                href="tel:000000000"
                class="footer-link hover:text-white transition-colors"
                >000000000</a
              >
            </div>
          </div>
        </div>
        <!-- Right info/Social -->
        <div class="flex flex-col gap-6 lg:items-end">
          <h3 class="footer-heading">Social Media</h3>
          <div class="flex gap-4">
            <a href="#" class="social-circle group">
              <svg
                class="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                />
              </svg>
            </a>
            <a href="#" class="social-circle group">
              <svg
                class="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>
            <a href="#" class="social-circle group">
              <svg
                class="w-4 h-4 text-white group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!-- Divider -->
      <div class="w-full h-[1px] bg-white opacity-40 my-10 divider"></div>
      <!-- Bottom -->
      <div class="flex flex-col sm:flex-row justify-between items-center gap-6">
        <router-link to="/" class="privacy-link">Privacy policy</router-link>
        <p class="text-xs opacity-60 font-sans tracking-wide uppercase">
          © {{ new Date().getFullYear() }} Coffee Shop. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
<style scoped>
.app-footer {
  background: linear-gradient(90deg, #004876 0%, #1e71a6 100%);
}
.footer-heading {
  font-family: "Cormorant Infant", serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1px;
  text-transform: capitalize;
}
.footer-link {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.584);
  transition: color 0.2s ease;
}
.footer-link:hover {
  color: #ffffff;
}
.social-circle {
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(255, 255, 255, 0.584);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}
.social-circle:hover {
  border-color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}
.privacy-link {
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 1;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.584);
  transition: color 0.2s ease;
}
.privacy-link:hover {
  color: #ffffff;
}
.divider {
  max-width: 654px;
}
</style>
