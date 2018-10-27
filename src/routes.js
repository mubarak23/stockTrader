import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';

export const routes = [
	{path:'/', component: Home, name: 'Home'},
	{path:'/portfolio', component: Portfolio, name:'Portfolio'},
	{path:'/stocks', component: Stocks, name: 'Stocks'},
	{path:'redirect-me', redirect:'/' },
	{path: '*', redirect: '/'}
]