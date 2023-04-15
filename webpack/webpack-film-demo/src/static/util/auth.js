//这个js用来进行前端的页面token验证，验证token是否存在
const token = localStorage.getItem('token')
console.log(token)
if(!token){
    alert('登录失效，请重新登录')
    location.assign('../../html/login.html')
}