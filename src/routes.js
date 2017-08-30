/*jshint esversion: 6 */ 
import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';
import Contatos from './components/contatos/Contatos.vue';

export const routes = [
    { path: '', component: Home, nome: 'Home' },
    { path: '/cadastro', component: Cadastro, nome: 'Cadastro' },
    { path: '/contatos', component: Contatos, nome: 'Contatos' }
];