import HomePage from '@/views/HomePage.vue';
import SignupPage from '@/views/SignupPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/signup', name: 'SignupPage', component: SignupPage },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
