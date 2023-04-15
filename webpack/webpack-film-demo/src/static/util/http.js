export function http({ url, method = 'GET', data = {} }) {
    //拼接请求的地址
    const BASE_URL = 'http://127.0.0.1:3000/';
    //获取登录成功后的token,发送给后端
    const token = localStorage.getItem('token');
    //向后端发送请求
    return new Promise((resolve, reject) => {
        $.ajax({
            url: BASE_URL + url,
            method,
            data,
            dataType: 'json',
            headers: {
                //将token每次请求的时候放在请求头中，然后需要在token之前拼接'Bearer '
                Authorization: 'Bearer ' + token
            },
            success(res) {
                resolve(res)
            },
            error(err) {
                console.log(err);
                if (err.status == 401) {
                    alert('用户登录失效，请重新登录');
                    localStorage.removeItem('token');
                    location.assign('../../html/login.html');

                }
            }
        })
    })
}

