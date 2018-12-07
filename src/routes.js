import Home from './components/Home.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Stocks from './components/stocks/Stocks.vue';
import Signin from './components/auth/Signin.vue';
import Signup from './components/auth/Signup.vue';

export const routes = [
	{path:'/', component: Home, name: 'Home'},
	{path:'/portfolio', component: Portfolio, name:'Portfolio'},
	{path:'/stocks', component: Stocks, name: 'Stocks'},
	{path:'/signin', component: Signin, name: 'signin'},
	{path: '/signup', component: Signup, name: 'signup'},
	{path:'redirect-me', redirect:'/' },
	{path: '*', redirect: '/'}
]