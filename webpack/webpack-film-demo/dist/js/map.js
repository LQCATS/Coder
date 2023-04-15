/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/map.js":
/*!***********************!*\
  !*** ./src/js/map.js ***!
  \***********************/
/***/ (() => {

eval("\r\n//获取地址栏传递的位置,并转解析成文字\r\nlet address = decodeURIComponent(location.search).substring(9).trim()\r\n// console.log(address);\r\n\r\nvar map = new BMapGL.Map(\"container\");          // 创建地图实例 \r\nvar point = new BMapGL.Point(116.404, 39.915);  // 创建点坐标 \r\nmap.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别\r\nmap.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放\r\n\r\n// map.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式\r\n\r\nvar scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件\r\nmap.addControl(scaleCtrl);\r\nvar zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件\r\nmap.addControl(zoomCtrl);\r\nvar cityCtrl = new BMapGL.CityListControl();  // 添加城市列表控件\r\nmap.addControl(cityCtrl);\r\n\r\n\r\n//定位到当前位置\r\nvar geolocation = new BMapGL.Geolocation();\r\ngeolocation.getCurrentPosition(function (r) {\r\n\r\n    if (this.getStatus() == BMAP_STATUS_SUCCESS) {\r\n        //解析电影院的位置\r\n        //创建地址解析器实例\r\n        var myGeo = new BMapGL.Geocoder();\r\n        // 将地址解析结果显示在地图上，并调整地图视野\r\n        myGeo.getPoint(address, function (point) {\r\n            if (point) {\r\n                var driving = new BMapGL.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });\r\n                driving.search(r.point, point);\r\n            } else {\r\n                alert('您选择的地址没有解析到结果！');\r\n            }\r\n        }, '成都市')\r\n\r\n\r\n    }\r\n    else {\r\n        alert('failed' + this.getStatus());\r\n    }\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/js/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/map.js"]();
/******/ 	
/******/ })()
;