import HomePage from '@/views/HomePage.vue';
import SignupPage from '@/views/SignupPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/signup', name: 'SignupPage', component: SignupPage },
  { path: '/contact', name: 'ContactPage', component: ContactPage}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
