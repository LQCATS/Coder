/**
 * 登录注册
 */

//全局变量

//登录全局变量
let login = document.querySelector("#login");//header
let loginElem = document.querySelector(".login");//login-border
let topRightElem = document.querySelector(".top-right");//header

//注册全局变量
let register = document.querySelector("#register");//hesder
let registerElem = document.querySelector(".register");//login-border

//登陆注册的全局变量
let loginBox = document.querySelector(".login-border");//login-border
let login2 = document.querySelector(".login-title1");//login-border
let register2 = document.querySelector(".login-title2");//login-border




//关闭登陆注册页面的标签
let iElem = document.querySelector(".fa-remove");

/**
 * 主函数
 */
function main() {
    showLogin();
    
};

/**
 * 登录注册页面展示并关闭函数 
 */
function showLogin() {
    //打开登录注册页面
    //委托事件给父盒子top-right
    topRightElem.onclick = function (event) {
        let element = event.target;
        switch (element.id) {
            case "login":
                //点击登录登录页面显示出来
                //先隐藏原有的页面
                registerElem.style.display = "none";
                loginBox.style.display = "block";
                loginElem.style.display = "block";
                break;
            case "register":
                //点击注册注册页面显示出来
                loginElem.style.display = "none";
                loginBox.style.display = "block";
                registerElem.style.display = "block";
                break;
        }
    }

    //委托事件给父盒子login-title
    login2.onclick = function (event) {
        let element2 = event.target;
        switch (element2.id) {
            case "login2":
                //点击登录登录页面显示出来
                //先隐藏原有的页面
                registerElem.style.display = "none";
                loginBox.style.display = "block";
                loginElem.style.display = "block";
                // element2.className = "login-click";
                break;
            case "register2":
                //点击注册注册页面显示出来
                loginElem.style.display = "none";
                loginBox.style.display = "block";
                registerElem.style.display = "block";
                // element2.className = "login-click";
                break;
        }
    }

    register2.onclick = function (event) {
        let element3 = event.target;
        switch (element3.id) {
            case "login3":
                //点击登录登录页面显示出来
                //先隐藏原有的页面
                registerElem.style.display = "none";
                loginBox.style.display = "block";
                loginElem.style.display = "block";
                // element3.className = "login-click";
                break;
            case "register3":
                //点击注册注册页面显示出来
                loginElem.style.display = "none";
                loginBox.style.display = "block";
                registerElem.style.display = "block";
                // element3.className = "login-click";
                break;
        }
    }

    //关闭登录页面
    iElem.onclick = function () {
        loginBox.style.display = "none";
    }

};


/**
 * 登录函数
 */




main();