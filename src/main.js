/*jshint esversion: 6 */ 
import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VeeValidate from 'vee-validate';
import { routes } from './routes.js';
import './directives/Transform';
import msg from './pt_BR';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/teste.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'jquery/dist/jquery.js';
import './assets/js/teste';

Vue.use(VueResource);
Vue.http.options.root = process.env.API_URL ? process.env.API_URL : 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {
  //colocando informações no header
  //req.headers.set('Wimmer', 'qualquerCoisa');
  console.log('----------------Lidando com o request--------------');

  next(res => {
    console.log('_________________Lidando com a resposta_________________');
    //pegando os dados da resposta
    console.log(res.body);
  });
});

Vue.use(VueRouter);

const router = new VueRouter({
  routes : routes,
  mode: 'history'
});

Vue.use(VeeValidate, {
  locale: 'pt_BR',
  dictionary: {
    pt_BR: {
      messages: msg
    }
  }
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
