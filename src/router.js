import VueRouter from 'vue-router';
import Home from './pages/Home';
import Apartment from './pages/Apartment';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'homepage',
  },
  {
    path: '/item',
    component: Apartment,
    name: 'apartment',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
0;
