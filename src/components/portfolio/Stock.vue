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
					@click="sellStuck"
					:disabled="quantity <= 0 || Number.isInteger(quantity)">
					Sell</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	imort { mapActions } from 'vuex';
	export default {
		props: ['stock'],
		data(){
			return {
				quantity:0
			}
		},
		methods:{
			...mapActions([
				'sellStuck'
			]),

			sellStock(){
				const order = {
				stockId: this.stock.id,
				stockPrice: this.stock.price,
				quantity: this.quantity
				};
				this.sellStock();
			}
		}
	}

</script>


