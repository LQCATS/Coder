export function ajax({method,url,data,success}) {
    //创建原生的ajax
    //1.创建请求对象
    let xhr = new XMLHttpRequest();
    //2.开启请求链接
    xhr.open(method,url,true);

    //设置响应的数据格式
    xhr.responseType = 'json';
    //3.监听响应
    xhr.onreadystatechange = function() {
        console.log(xhr.readyState)
        if(xhr.readyState == 4) {
            success(xhr.response)
        }
    }
    xhr.send()
}