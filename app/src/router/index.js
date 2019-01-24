import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home';
import UserBase from '@/pages/user/Base';
import UserAdd from '@/pages/user/Add';
import UserEdit from '@/pages/user/Edit';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/user',
      component: { template: '<router-view/>' },
      children: [
        {
          path: '/',
          alias: 'list',
          name: 'list',
          component: UserBase,
        },
        {
          path: 'add',
          name: 'add-user',
          component: UserAdd,
        },
        {
          path: 'edit/:id',
          name: 'edit-user',
          component: UserEdit,
        },
      ],
    },

  ],
});
