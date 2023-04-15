
//获取地址栏传递的位置,并转解析成文字
let address = decodeURIComponent(location.search).substring(9).trim()
// console.log(address);

var map = new BMapGL.Map("container");          // 创建地图实例 
var point = new BMapGL.Point(116.404, 39.915);  // 创建点坐标 
map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

// map.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式

var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
map.addControl(scaleCtrl);
var zoomCtrl = new BMapGL.ZoomControl();  // 添加缩放控件
map.addControl(zoomCtrl);
var cityCtrl = new BMapGL.CityListControl();  // 添加城市列表控件
map.addControl(cityCtrl);


//定位到当前位置
var geolocation = new BMapGL.Geolocation();
geolocation.getCurrentPosition(function (r) {

    if (this.getStatus() == BMAP_STATUS_SUCCESS) {
        //解析电影院的位置
        //创建地址解析器实例
        var myGeo = new BMapGL.Geocoder();
        // 将地址解析结果显示在地图上，并调整地图视野
        myGeo.getPoint(address, function (point) {
            if (point) {
                var driving = new BMapGL.DrivingRoute(map, { renderOptions: { map: map, autoViewport: true } });
                driving.search(r.point, point);
            } else {
                alert('您选择的地址没有解析到结果！');
            }
        }, '成都市')


    }
    else {
        alert('failed' + this.getStatus());
    }
});





