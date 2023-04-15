//获取路径数据的封装
export function getUrlData() {
    const str = location.search.substring(1);
    const arr = str.split("&").map((item) => item.split("="));
    //构建对象
    let obj = {};
    arr.forEach((item) => {
        obj[item[0]] = item[1];
    });
    return obj;
}