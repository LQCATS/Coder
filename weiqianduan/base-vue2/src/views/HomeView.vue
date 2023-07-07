<template>
	<div>
		<el-container>
			<el-aside width="200px">

				<!-- 菜单 -->
				<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
					background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>主应用(vue2)</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1">首页</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="2">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>子应用(vue2)</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="2-1">首页</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="3">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>子应用(vue3)</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="3-1">首页</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="4">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>子应用(react)</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="4-1">首页</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

					<el-submenu index="5">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>子应用(umi)</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="5-1">首页</el-menu-item>
						</el-menu-item-group>
					</el-submenu>

				</el-menu>
				<!-- 菜单 -->
			</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>
					<!-- 主应用二级路由出口 -->
					<router-view v-show="$route.name"></router-view>
					<!-- 子应用出口 -->
					<div id="container" v-show="!$route.name"></div>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>

<style lang="scss" scoped>
.el-header,
.el-footer {
	background-color: #B3C0D1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #545c64;
	color: #333;
	text-align: center;
	line-height: 200px;
	height: 100vh;
}

.el-main {
	background-color: #E9EEF3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

.el-submenu .el-menu-item {
	min-width: 197px;
}
</style>