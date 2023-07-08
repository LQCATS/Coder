import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if (window.__POWERED_BY_QIANKUN__) {
  window.__webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
};

let root = null;

// 渲染函数
function render() {
  root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <App />
  );
};

// 进入 if，则表示当前应用独立运行
if (!window.__POWERED_BY_QIANKUN__) {
  render();
};

// 生命周期函数
export async function bootstrap() {
  // console.log('React 子应用初始化');
};

export async function mount(props) {
  // console.log('React 子应用挂载');
  render(props);
};

export async function unmount() {
  // console.log('React 子应用卸载');
  if (root) {
    root.unmount();
    root = null;
  }
};
