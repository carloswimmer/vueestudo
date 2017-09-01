/*jshint esversion: 6 */ 
import Home from './components/home/Home.vue';
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');
const Contatos = () => System.import('./components/contatos/Contatos.vue');

export const routes = [
    { path: '', name: 'home', component: Home, nome: 'Home', menu: true },
    { path: '/cadastro', name: 'cadastro', component: Cadastro, nome: 'Cadastro', menu: true },
    { path: '/contatos', name: 'contatos', component: Contatos, nome: 'Contatos', menu: true },
    { path: '/cadastro/:id', name: 'alteracao', component: Cadastro, nome: 'Cadastro', menu: false },
    { path: '/*', component: Home, menu: false }
];