<template>
	<div>
		<h2>Trade or View Your Portfolio</h2>
		<h6>You may Save & Load Your Data</h6>
		<h6>Click on the End Day to begin a New Day!</h6>
		<hr>
		<p>Your Fund: {{ funds }}</p>
	</div>
</template>

<script>
	export default{
		computed:{
			funds(){
			return this.$store.getters.funds;
			}
		}
	}
</script>