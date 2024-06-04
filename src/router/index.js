import { createRouter, createWebHistory } from 'vue-router';
import PaginaInicial from '../pages/PaginaInicial.vue';
import CarSection from '../pages/CarSection.vue';

const routes = [
  { path: '/', component: PaginaInicial },
  { path: '/car-section', component: CarSection }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
