//全局变量
// let saveUsers = [];
let saveUsers = [{
    userName: "13988888888",
    userPwd: "l23456",
}];

let user = {
    userName: "",
    userPwd: "",
};
// let loginUser = {
//     userName: "",
//     userPwd: "",
// };

let loginUser = {
    userName: "13988888888",
    userPwd: "l23456",
};


//判断用户名，密码，确认密码，验证码是否正确
/**
 * 状态管理器
 */
const statusMgr = {
    /** 登录状态 */
    login: {
        /** 是否名字输入正确 */
        isNameTrue: false,
        /** 是否密码输入正确 */
        isPassWordTrue: false,
        /** 是否验证码输入正确 */
        isCaptchaTrue: false,
        /** 登录成功 */
        isLoginSuccess: false,
        userName: '',
        userPwd: '',
    },
    // 注册状态
    register: {
        /** 是否电话号码输入正确 */
        isTel: false,
        /** 是否密码输入正确 */
        isPwd: false,
        /** 是否密码再次输入正确 */
        isPwdAgain: false,
        /** 是否验证码输入正确 */
        isCaptcha: false,
    }
};

/**
 * 帮助工具
 */
const HelpUtils = {
    /**
     * 随机生成四位数的验证码
     * @returns string
     */
    generateCaptcha: () => {

        let captchaArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "q", "w", "e", "r", "t", "y", "u", "i", "o", "a", "s", "d"];

        let captchaNum = "";
        for (let j = 1; j <= 4; j++) {
            let i = parseInt(Math.random() * captchaArr.length);
            captchaNum += captchaArr[i];
        };

        return captchaNum;
    }
};

//头部
//头部的登录标签
let login = document.querySelector("#login");
//头部的注册标签
let headRegister = document.querySelector("#register");
//头部登录和注册的父标签
let topRightElem = document.querySelector(".top-right");


//弹出界面
//登录弹出页面的登录标签span
let loginElem = document.querySelector("#login2");
//注册弹出页面的注册标签span
let registerElem = document.querySelector("#register2");
//登录注册的边框标签
let loginRegisterBox1 = document.querySelector(".login-border");
//登录注册的父标签
let loginRegisterBox2 = document.querySelector(".login-register");
//登录注册弹出页面标题的父盒子title
let loginRegister = document.querySelector(".login-title");
//登录信息盒子
let loginBox = document.querySelector(".login");
//注册信息盒子
let registerBox = document.querySelector(".register");


//关闭登陆注册页面的标签
let iElem = document.querySelector(".fa-remove");


//搜索电影全部变量
let inputElem = document.querySelector(".search input");
let headerList = document.querySelector(".header-list");
let choiceId = 0;
let jumpElem = document.querySelector(".search-right");

//注册输入电话号码标签
let registerTel = document.querySelector(".register input:nth-child(1)");
//手机号判断信息标签
let registerP1 = document.querySelector(".p1");
//注册输入密码标签
let registerPwd = document.querySelector(".register input:nth-child(3)");
let registerP2 = document.querySelector(".p2");
//注册确认密码标签
let registerPwdAgain = document.querySelector(".register input:nth-child(5)");
let registerP3 = document.querySelector(".p3");


// ======================================注册验证码
//生成验证码标签
let captchaElem = document.querySelector(".register .captcha div");
//点击刷新标签
let captchaAgainElem = document.querySelector(".register .captcha span");
//输入验证码标签
let captchaInputElem = document.querySelector(".register .captcha input");
//验证码父级
let captchaFather = document.querySelector(".register .captcha");
//判断验证码信息
let registerP4 = document.querySelector(".register .p4");

//注册标签
let registerButtonElem = document.querySelector(".register button");


// ======================================登录
//输入电话号码标签
let loginTel = document.querySelector(".login>input:nth-child(1)");
//手机号判断信息标签
let loginP1 = document.querySelector(".login-p1");
//输入密码标签
let loginPwd = document.querySelector(".login>input:nth-child(3)");
let loginP2 = document.querySelector(".login-p2");
//输入验证码标签
let captchaLoginElem = document.querySelector(".login .captcha input");
//点击刷新标签
let captchaAgainElem2 = document.querySelector(".login .captcha span");
//生成验证码标签
let captchaElem2 = document.querySelector(".login .captcha div");
//验证码判断信息
let loginP3 = document.querySelector(".login-p3");
//登录按钮
let loginButtonElem = document.querySelector(".login button");




/**
 * 主函数
 */
function main() {
    searchReader(nowPlaying);
    choiceLi();
    jump();
    open();
    handleRegister(saveUsers);
    handleLogin(saveUsers);
};



/**
 * 搜索页面跳转
 */
function jump() {
    jumpElem.onclick = function () {
        //判定当前是否选中商品，选中之后跳转
        if (choiceId == 0) {
            alert("请选择电影");
        } else {
            location.href = `../html/particulars.html?id=${choiceId}`
        }
    };
};


/**
 * li点击数据关联功能
 */
function choiceLi() {
    //委托事件给父标签
    headerList.onclick = function (event) {
        let element = event.target;
        if (element.className != "header-list") {
            //将选中标签内容赋值给input的value
            inputElem.value = element.innerText;
            //隐藏ul列表
            headerList.style.display = "none";
            //将选中标签身上的data-id给全局变量
            choiceId = element.getAttribute("data-id");
        }
    };
};


/**
 * 搜索数据回显渲染
 */
function searchReader(arr) {
    inputElem.oninput = function () {
        //用户输入数据
        let val = inputElem.value;
        //将数据和数据库数据进行比对
        let str = "";
        arr.forEach(element => {
            //模糊查询

            if (element.title.indexOf(val) != -1) {
                str += `<li data-id="${element.id}">${element.title}</li> `
            };
        });
        //将数据渲染到页面列表中
        headerList.innerHTML = str;
        //更改ul的css属性值
        headerList.style.display = "block";
    }
};


/**
 * 登录注册页面展示并关闭函数 
 */
function open() {
    //打开登录注册页面
    //委托事件给父盒子top-right
    topRightElem.onclick = function (event) {
        clearLoginAndRegisterText();
 
        let element = event.target;
        switch (element.id) {
            case "login":
                //点击登录登录页面显示出来
                //先隐藏原有的页面
                if (!statusMgr.login.isLoginSuccess) {
                    loginRegisterBox1.style.display = "block";
                    loginRegisterBox2.style.display = "block";
                    loginBox.style.display = "block";
                    registerBox.style.display = "none";
                    loginElem.style.color = "#333";
                    loginElem.style.borderBottom = "2px solid #f99135";
                    registerElem.style.color = "#999";
                    registerElem.style.borderBottom = null;
                }
                
                break;
            case "register":
                if (statusMgr.login.isLoginSuccess) {
                    statusMgr.login.isLoginSuccess = false;
        
                    statusMgr.login.userName = '';
                    statusMgr.login.userPwd = false;
                    statusMgr.login.isNameTrue = false;
                    statusMgr.login.isPassWordTrue = false;
                    statusMgr.login.isCaptchaTrue = false;
        
                    login.innerText = '登录';
                    headRegister.innerText = "注册";
                    headRegister.style.color = "red";
        
                } else {
                    //点击注册注册页面显示出来
                    loginRegisterBox1.style.display = "block";
                    loginRegisterBox2.style.display = "block";
                    registerBox.style.display = "block";
                    loginBox.style.display = "none";
                    registerElem.style.color = "#333";
                    registerElem.style.borderBottom = "2px solid #f99135";
                    loginElem.style.color = "#999";
                    loginElem.style.borderBottom = null;
                }
                
                break;
        }
        
    }

    //委托事件给父盒子login-title
    loginRegister.onclick = function (event) {
        let element2 = event.target;
        switch (element2.id) {
            case "login2":
                //点击登录登录页面显示出来
                //先隐藏原有的页面
                loginBox.style.display = "block";
                registerBox.style.display = "none";
                loginElem.style.color = "#333";
                loginElem.style.borderBottom = "2px solid #f99135";
                registerElem.style.color = "#999";
                registerElem.style.borderBottom = null;
                break;
            case "register2":
                //点击注册注册页面显示出来
                registerBox.style.display = "block";
                loginBox.style.display = "none";
                registerElem.style.color = "#333";
                registerElem.style.borderBottom = "2px solid #f99135";
                loginElem.style.color = "#999";
                loginElem.style.borderBottom = null;
                break;
        }
    }

    //关闭登录页面
    iElem.onclick = function () {
        loginRegisterBox1.style.display = "none";
    }

};


/**
 * 注册
 */
function handleRegister(arr) {
    function verifyRegisterSuccess() {
        if (statusMgr.register.isTel && statusMgr.register.isPwd && statusMgr.register.isPwdAgain && statusMgr.register.isCaptcha) {
            registerButtonElem.style.backgroundColor = "#f99135";
            return true;
        }
        registerButtonElem.style.backgroundColor = "#999";
        return false;
    };


    //初始化验证码
    captchaElem.innerText = HelpUtils.generateCaptcha();

    // 用户名验证
    registerTel.onblur = function () {
        //获得电话号码信息
        let message1 = registerTel.value;
        //判断用户是否注册过用户名
        let isHave = false;
        for (let i = 0; i < arr.length; i++) {
            if (message1 == arr[i].userName) {
                isHave = true;
                break;
            }
        }

        if (isHave) {
            //用户名已存在
            registerP1.innerText = "用户名已存在";
            registerP1.style.color = "red";
        } else {
            //用户名不存在
            //电话号码正则表达
            let regExp1 = /^13[0-9]{9}$/;
            //电话格式是否正确
            let registerTelTrue = regExp1.test(message1);
            if (registerTelTrue) {
                registerP1.innerText = "手机格式正确";
                registerP1.style.color = "green";

                //将用户名保存在对象里
                user.userName = message1;
                statusMgr.register.isTel = true;
            } else {
                registerP1.innerText = "手机格式不正确";
                registerP1.style.color = "red";

                statusMgr.register.isTel = false;
            }
        }
        verifyRegisterSuccess();
    };

    // 密码验证
    registerPwd.onblur = function () {
        //获得密码信息
        let message2 = registerPwd.value;
        //密码正则表达
        let regExp2 = /^[a-zA-Z][A-Za-z0-9]{5,11}/;
        //密码格式是否正确
        let registerPwdTrue = regExp2.test(message2);
        if (registerPwdTrue) {
            registerP2.innerText = "密码格式正确";
            registerP2.style.color = "green";

            //密码正确，将密码放进用户对象里面
            user.userPwd = message2;
            statusMgr.register.isPwd = true;
        } else {
            registerP2.innerText = "密码格式不正确";
            registerP2.style.color = "red";
            statusMgr.register.isPwd = false;

        }
        verifyRegisterSuccess();
    };

    // 确认密码验证

    registerPwdAgain.onblur = function () {
        //获得确认密码信息
        let message3 = registerPwdAgain.value;
        let message2 = registerPwd.value;
        let regExp3 = /^[a-zA-Z][A-Za-z0-9]{5,11}/;
        //密码格式是否正确
        let registerPwdAgainTrue = regExp3.test(message3);
        if (message3 == message2 && registerPwdAgainTrue) {
            registerP3.innerText = "密码验证成功";
            registerP3.style.color = "green";
            statusMgr.register.isPwdAgain = true;
        } else {
            registerP3.innerText = "密码验证失败";
            registerP3.style.color = "red";
            statusMgr.register.isPwdAgain = false;

        }
        verifyRegisterSuccess();
    };

    // 绑定刷新验证码
    captchaAgainElem.onclick = () => {
        captchaElem.innerText = HelpUtils.generateCaptcha();
    };

    // 验证码验证
    captchaInputElem.onblur = function () {
        //获得用户输入的验证码
        let message4 = captchaInputElem.value;
        if (message4 == captchaElem.innerText) {
            registerP4.innerText = "验证码正确";
            registerP4.style.color = "green";
            statusMgr.register.isCaptcha = true;
        } else {
            registerP4.innerText = "验证码错误";
            registerP4.style.color = "red";
            statusMgr.register.isCaptcha = false;
        }
        verifyRegisterSuccess();
    };

    // 绑定注册按钮事件
    registerButtonElem.onclick = () => {
        let isRegister = verifyRegisterSuccess();
        if (isRegister) {
            saveUsers.push(user);
        };
    };

};

const clearLoginAndRegisterText = () => {
    registerTel.value = '';
    registerPwd.value = '';
    registerPwdAgain.value = '';
    captchaInputElem.value = '';

    loginTel.value = '';
    loginPwd.value = '';
    captchaLoginElem.value = '';
    
    loginP1.innerText = '';
    loginP2.innerText = '';
    loginP3.innerText = '';

    registerP1.innerText = '';
    registerP2.innerText = '';
    registerP3.innerText = '';
    registerP4.innerText = '';
};

// 处理登录逻辑
const handleLogin = (arr) => {
    function verifyLoginSuccess() {
        if (statusMgr.login.isNameTrue && statusMgr.login.isPassWordTrue && statusMgr.login.isCaptchaTrue) {
            loginButtonElem.style.backgroundColor = "#f99135";
            return true;
        }
        loginButtonElem.style.backgroundColor = "#999";
        return false;
    };

    //初始化验证码
    captchaElem2.innerText = HelpUtils.generateCaptcha();


    // 用户名验证
    loginTel.onblur = () => {
        let message11 = loginTel.value;

        let regExp11 = /^13[0-9]{9}$/;
        //电话格式是否正确
        let loginTelTrue = regExp11.test(message11);
        if (loginTelTrue) {

            //判断用户是否注册过用户名
            let isHave11 = false;
            for (let i = 0; i < arr.length; i++) {
                if (message11 == arr[i].userName) {
                    isHave11 = true;
                    break;
                }
            }

            if (isHave11) {
                //用户名已存在
                loginP1.innerText = "手机号码正确";
                loginP1.style.color = "green";
                statusMgr.login.isNameTrue = true;
                statusMgr.login.userName = message11;

            } else {
                //用户名不存在
                loginP1.innerText = "用户名不存在";
                loginP1.style.color = "red";
                statusMgr.login.isNameTrue = false;

            }

        } else {
            loginP1.innerText = "手机格式不正确";
            loginP1.style.color = "red";

            statusMgr.login.isNameTrue = false;
        }

        verifyLoginSuccess();
    }

    // 密码验证
    loginPwd.onblur = () => {
        //获得密码信息
        let message22 = loginPwd.value;
        //密码正则表达
        let regExp22 = /^[a-zA-Z][A-Za-z0-9]{5,11}/;
        //密码格式是否正确
        let loginPwdTrue = regExp22.test(message22);
        if (loginPwdTrue) {
            //判断密码是否正确
            let isHave22 = false;
            for (let i = 0; i < arr.length; i++) {
                if (message22 == arr[i].userPwd) {
                    isHave22 = true;
                    break;
                }
            }

            if (isHave22) {
                //密码正确
                loginP2.innerText = "密码正确";
                loginP2.style.color = "green";
                statusMgr.login.isPassWordTrue = true;
                statusMgr.login.userPwd = message22;
            } else {
                //密码不存在
                loginP2.innerText = "密码错误";
                loginP2.style.color = "red";
                statusMgr.login.isPassWordTrue = false;

            }
           
        } else {
            loginP2.innerText = "密码格式不正确";
            loginP2.style.color = "red";
            statusMgr.login.isPassWordTrue = false;
        }
        verifyLoginSuccess();
    }

    // 绑定刷新验证码
    captchaAgainElem2.onclick = () => {
        captchaElem2.innerText = HelpUtils.generateCaptcha();
    };


    // 验证码验证
    captchaLoginElem.onblur = () => {
        //获得用户输入的验证码
        let message33 = captchaLoginElem.value;
        if (message33 == captchaElem2.innerText) {
            loginP3.innerText = "验证码正确";
            loginP3.style.color = "green";
            statusMgr.login.isCaptchaTrue = true;
        } else {
            loginP3.innerText = "验证码错误";
            loginP3.style.color = "red";
            statusMgr.login.isCaptchaTrue = false;
        }
        verifyLoginSuccess();
    }

    // 绑定登录按钮事件
    loginButtonElem.onclick = () => {
        
            let isLogin = verifyLoginSuccess();
            if (isLogin) {

                statusMgr.login.isLoginSuccess = true;

                login.innerText = statusMgr.login.userName;
                headRegister.innerText = "注销";
                headRegister.style.color = "red";
                loginRegisterBox1.style.display = 'none';

                clearLoginAndRegisterText();
            }
        
        
    };

};



//判断，电话号码符合格式，在数据库中不存在，符合要求边框变为绿色



//获取用户输入的信息在input失去焦点的时候判断




//密码信息


//确认密码信息










/**
 * 生成验证码函数
 */
function captch() {
    //随机生成四位数的验证码
    let captchaArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "q", "w", "e", "r", "t", "y", "u", "i", "o", "a", "s", "d"];

    let captchaNum = "";
    for (let j = 1; j <= 4; j++) {
        let i = parseInt(Math.random() * captchaArr.length);
        captchaNum += captchaArr[i];
    };
    return str;
};

main();
