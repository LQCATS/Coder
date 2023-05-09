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
                    <el-input placeholder="请输入用户名"></el-input>
                </el-col>
            </el-row>
            <el-row :gutter="20" class="row">
                <el-col :span="6">
                    <div class="title">密码:</div>
                </el-col>
                <el-col :span="16">
                    <el-input placeholder="请输入密码"></el-input>

                </el-col>
            </el-row>
            <el-row :gutter="20" class="row">
                <el-col :span="6">
                    <div class="title">确认密码:</div>
                </el-col>
                <el-col :span="16">
                    <el-input placeholder="请确认密码"></el-input>

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
export default {
    components: {
        particles,
    },
    methods: {
        goPage() {
            this.$router.push('/layout/order');
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