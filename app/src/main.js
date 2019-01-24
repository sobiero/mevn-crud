/* eslint-disable */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vue from 'vue';
import DatatableFactory from 'vuejs-datatable';
// import DatatableFactory from 'vuejs-datatable/dist/vuejs-datatable.esm.js';
import BootstrapVue from 'bootstrap-vue';

import App from './App';
import router from './router';

DatatableFactory.useDefaultType(false)
.registerTableType('datatable', (table_type) => {
	table_type.mergeSettings({
		table: {
		class: 'table hover table-scroll', // table
			sorting: {
			classes: {
				canSort: ['sort'], // 'btn', 'btn-link', 'text-muted', 
				sortNone: ['fas', 'fa-sort'],
				sortAsc: ['fas', 'fa-sort-down'],
				sortDesc: ['fas', 'fa-sort-up'],
			}
			}
		},
		pager: {
			classes: {
        pager: 'pagination text-center',
        // selected: 'current',
        li: 'page-item',
        a: 'page-link',
			}
		}
	});
});

Vue.use(BootstrapVue);
Vue.use(DatatableFactory);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
