<template>
	<view>
		test3
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		beforeCreate() {
			console.log("test3 beforeCreate")
		},
		created() {
			console.log("test3 created")
		},
		beforeMount() {
			console.log("test3 beforeMount")
		},
		mounted() {
			console.log("test3 mounted")
		},
		beforeUpdate() {
			console.log("test3 beforeUpdate")
		},
		updated() {
			console.log("test3 updated")
		},
		beforeDestroy() {
			console.log("test3 beforeDestroy")
		},
		destroyed() {
			console.log("test3 destroyed")
		},
		onInit() {
			console.log("test3 onInit");
		},
		onLoad() {
			console.log("test3 onLoad");
		},
		onShow() {
			console.log("test3 onShow");
		},
		onReady() {
			console.log("test3 onReady");
		},
		onHide() {
			console.log("test3 onHide");
		},
		onUnload() {
			console.log("test3 onUnload");
		},
		onResize() {
			console.log("test3 onResize");
		}
		
		
	}
</script>

<style lang="scss">

</style>
