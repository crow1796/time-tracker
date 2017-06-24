<script>
	export default {
		created(){

		},
		data(){
			return {};
		}
	}
</script>

<template>
	<div id="app">
		<transition name="fade" mode="out-in">
			<router-view class="view" 
					keep-alive
					transition
					transition-mode="in-out">
			</router-view>
		</transition>
	</div>
</template>