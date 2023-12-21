import VueRouter from 'vue-router';
import Home from './pages/Home';
import Apartment from './pages/Apartment';
import ErrorPage from './pages/Error';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'homepage',
  },
  {
    path: '/apartments/:id',
    component: Apartment,
    name: 'apartment',
  },
  {
    path: '*',
    component: ErrorPage,
    name: 'error-page',
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
0;
