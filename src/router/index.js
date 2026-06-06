import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicial from '../pages/PaginaInicial.vue';
import CarSection from '../pages/CarSection.vue';
import CarDetails from '../pages/CarDetails.vue';

const routes = [
  { path: '/', component: PaginaInicial },
  { path: '/car-section', component: CarSection },
  { path: '/car/:id', component: CarDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0 };
  },
});

export default router;
