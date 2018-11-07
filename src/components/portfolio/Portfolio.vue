<template>
	<div>
		<appStock v-for="stock in stocks" :stock="stock"></appStock>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import Stock from './Stock.vue';
	export default{
		
		computed:{
			...mapGetters({
				stocks: 'stockPorfolio',
			})
		},
		components:{
			appStock: Stock
		}
	}
</script>