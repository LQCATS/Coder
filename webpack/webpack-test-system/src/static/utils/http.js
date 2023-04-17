export function http({ url, method = 'GET', data = {} }) {
    const BASE_URL = 'http://127.0.0.1:8888';
    const token = localStorage.getItem('token')
    return new Promise((resolve, reject) => {
        $.ajax({
            url: BASE_URL + url,
            method,
            data,
            dataType: "json",
            headers: {
                Authorization: 'Bearer ' + token  //将token每次请求的时候放在请求头中，然后需要在token之前拼接'Bearer '
            },
            success(msg) {
                resolve(msg)
            },
            error(err) {
                console.log(err)
                if (err.status == 401) {
                    alert('用户登录失效，请重新登录');
                    localStorage.removeItem('token');
                    location.assign('../../html/index.html')
                }
            }
        })
    })
}