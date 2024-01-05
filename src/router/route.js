// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Buy from '../views/Buy.vue';
import Rent from '../views/Rent.vue';
import Sold from '../views/Sold.vue';
import NewHomes from '../views/NewHomes.vue';
import FindAgent from '../views/FindAgent.vue';
import News from '../views/News.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  
  {
    path: '/buy',
    name: 'Buy', // Name for the route
    component: Buy,
    
  },
  {
    path: '/rent',
    name: 'Rent', // Name for the route
    component: Rent,
  },
  
  {
    path: '/sold',
    name: 'Sold', // Name for the route
    component: Sold,
  },
  {
    path: '/new-homes',
    name: 'NewHomes', // Name for the route
    component: NewHomes,
  },
  {
    path: '/find-agent',
    name: 'FindAgent', // Name for the route
    component: FindAgent,
  },
  {
    path: '/news',
    name: 'News', // Name for the route
    component: News,
  },
  {
    path: '/about',
    name: 'About', // Name for the route
    component: About,
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
