import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import User from '@/pages/user/Base';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user',
      name: 'User',
      component: User,
    },
  ],
});
