import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			// 给项目的 src 目录，取名 @
			'@': path.resolve(__dirname, 'src'),
			// 给项目的 src/pages 目录，取名 @p
			'@p': path.resolve(__dirname, 'src/pages'),
			// 给项目的 src/components 目录，取名 @c
			'@c': path.resolve(__dirname, 'src/components'),
		}
	},
	// less 配置
	css: {
		preprocessorOptions: {
			less: {
				charset: false,
				// less全局变量
				additionalData: `@import "${path.resolve(__dirname, 'src/App.less')}";`,
				javascriptEnabled: true,
			},
		},
	},

})
