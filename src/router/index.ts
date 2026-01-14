import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import ProductDetails from "@/pages/ProductDetails.vue";
import { useLangStore } from "@/stores/useLangStore";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: true,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  const langStore = useLangStore();
  const lang =
    (to.query.lang as string) ||
    (from.query.lang as string) ||
    langStore.currentLocale;
  if (lang && to.query.lang !== lang) {
    next({ ...to, query: { ...to.query, lang } });
  } else {
    if (
      to.query.lang &&
      (to.query.lang === "en" || to.query.lang === "ar") &&
      to.query.lang !== langStore.currentLocale
    ) {
      langStore.currentLocale = to.query.lang;
    }
    next();
  }
});
export default router;
