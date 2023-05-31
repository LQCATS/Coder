<template>
	<view>
		<u-picker :show="showpickers" ref="uPicker" :columns="columns" @cancel="showpickers = false"
			@confirm="showpickers =false" @change="changeHandler"></u-picker>
		<button @tap="showpickers = true">打开多级联动选项卡</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showpickers: false,
				columns: [
					['中国', '美国'],
					['深圳', '厦门', '上海', '拉萨']
				],
				columnData: [
					['深圳', '厦门', '上海', '拉萨'],
					['得州', '华盛顿', '纽约', '阿拉斯加']
				]
			};
		},
		methods: {
			changeHandler(ev) {
				console.log(ev);
				const {
					columnIndex,
					index,
					picker = this.$refs.uPicker
				} = ev;

				
				if (0 == columnIndex) {
					picker.setColumnValues(1, this.columnData[index])
				}

			}
		}
	}
</script>

<style lang="scss">

</style>