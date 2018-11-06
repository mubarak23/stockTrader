<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-success">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{ stock.name }}
					<small>(Price: {{ stock.price }} | Quatity: {{ stock.quantity }})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
				<input type="number" 
				class="form-control"
				name="quantity"
				v-model="quantity"
				>
				</div>
				<div class="pull-right">
					<button class="btn 
					btn-success"
					@click="sellStocks"
					:disabled="insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)">
					{{ insufficientQuantity ? 'No Enough' : 'Sell'}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex';
	export default {
		props: ['stock'],
		data(){
			return {
				quantity:0
			}
		},
		computed:{
			insufficientQuantity(){
				return this.quantity > this.stock.quantity;
			}
		},
		methods:{
			...mapActions([
				'sellStock'
			]),

			sellStocks(){
				const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
				};
				this.sellStock(order);
				this.quantity = 0;
			}
		}
	}

</script>


