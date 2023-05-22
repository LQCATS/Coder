<template>
    <div class="bg">
        <particles></particles>
        <el-card class="login_box">
            <div class="log">
                <img src="@/assets/resource/images/logo.png" alt="">
            </div>
            <el-row :gutter="20" class="row">
                <el-col :span="6">
                    <div class="title">用户名:</div>
                </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入用户名" v-model="userName"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20" class="row">
                <el-col :span="6">
                    <div class="title">密码:</div>
                </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入密码" v-model="pwd"></el-input>

                </el-col>
            </el-row>
            <el-row :gutter="20" class="row">
                <el-col :span="6">
                    <div class="title">确认密码:</div>
                </el-col>
                <el-col :span="16">
                    <el-input placeholder="请确认密码" v-model="pwdAgain"></el-input>

                </el-col>
            </el-row>
            <el-row :gutter="20" class="row">
                <el-col :span="6">
                    <div class="title"></div>
                </el-col>
                <el-col :span="16">
                    <el-button type="primary" class="loginBtn" @click="goPage">登录</el-button>
                </el-col>
            </el-row>
        </el-card>

    </div>
</template>

<script>
import particles from '@/components/particles';
import sessionTool from '@/tool/sessionTool';

export default {
    data() {
        return {
            userName: '',
            pwd: '',
            pwdAgain: '',
        }
    },
    components: {
        particles,
    },
    methods: {
        goPage() {
            // this.$router.push('/layout/order');

            this.$login.login({
                username: this.userName,
                pwd: this.pwd,
            }).then(async res => {
                if (200 == res.code) {
                    // console.log(res);

                    //1.调用接口拿到当前登录用户的按钮权限，并存储在本地
                    let btnPower = [
                        {
                            '/layout/member': ["update", 'add']
                        }
                    ]
                    sessionTool.setLocalItem('BtnPower', JSON.stringify(btnPower));


                    //本地存储用户信息
                    // localStorage.setItem('LoginUser', JSON.stringify(res.data));
                    sessionTool.setLoginUser(res.data);

                    //本地存储当前用户的所有菜单权限
                    let powerRes = await this.$role.getAllMenu({
                        userid: res.data.id
                    });
                    // localStorage.setItem('ListMenu', JSON.stringify(powerRes.data));
                    sessionTool.saveSysMenu(powerRes.data);

                    let listMenu = powerRes.data;

                    //调用封装的动态加载路由方法
                    if (!this.$router.options.routes.find(item => 'Layout' == item.name)) {
                        //如果没有加载过路由，才加载新路由
                        sessionTool.loadRoute(listMenu, this.$router);
                    };


                    console.log(this.$router);

                    //登录成功，跳转页面
                    this.$router.push('/layout/home');

                } else {
                    //登录失败，提示用户
                    this.$message.error('登录失败，请稍后重试！');
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100vw;
    height: 100vh;
    background: url(@/assets/resource/images/loginBg.jpg) no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;


}

.login_box {
    width: 500px;
    height: 350px;
    background-color: #fff;
    z-index: 999;

    .row {
        display: flex;
        align-items: center;
        margin-top: 20px;

        .title {
            text-align: right;
        }
    }

}


.loginBtn {
    width: 75%;

}

.log {
    width: 271px;
    height: 74px;
    margin: 0 auto;
}
</style>