<template>
    <div>
        <el-upload class="avatar-uploader" action="http://127.0.0.1:3000/api/uploadImg" :show-file-list="false"
            :on-success="uploadSuccess" :before-upload="beforeUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        
    </div>
</template>

<script>
export default {
    //接受的参数
    props: {
        value: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
            imageUrl: this.value,
        }
    },
    methods: {
        //图片上传后的回调函数
        uploadSuccess(res, file) {
            this.imageUrl = res.imgUrl;
            //将上传成功的图片地址赋值给form对象中的icon，便于在点击保存按钮时能够更新图片地址
            // this.form.icon = res.imgUrl;
            this.$emit('input', res.imgUrl);
        },
        //图片上传之前的回调函数,该函数可以返回一个boolean类型的值，返回true时上传继续，返回false时会中止上传动作
        beforeUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
        },
    }
}
</script>

<style lang="scss" scoped>
::v-deep .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

::v-deep .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
}

.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
}

.avatar {
    width: 78px;
    height: 78px;
    display: block;
}
</style>