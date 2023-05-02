<template>
    <div>
        <!-- 添加文章模态框 -->
        <template v-if="goAddArticle">
            <div class="articleMask"></div>
            <div class="articleDialog">
                <div class="dialogTitle">
                    <div>创建文章分类</div>
                    <span @click="closeAddArticle()">X</span>
                </div>
                <div class="dialogContent">
                    <div class="dialogItem">

                        <div class="classificationText">
                            <span>*</span>分类名称
                        </div>
                        <input type="text" placeholder="分类名称" class="classificationName" v-model="objArticle.classificationName">
                    </div>
                    <div class="dialogItem">
                        <div class="classificationText">分类图标(180*180)</div>
                        <input type="text" class="classificationIcon" v-model="objArticle.classificationIcon">
                    </div>
                    <div class="dialogItem">
                        <div class="classificationText">排序</div>
                        <div class="sort_warp">
                            <div class="reduce">-</div>
                            <input class="sortNum" :placeholder="0" v-model="objArticle.sortNum">
                            <div class="add">+</div>
                        </div>
                    </div>
                    <div class="dialogItem">
                        <div class="classificationText">状态</div>
                        <input type="text" class="status" placeholder=" 显示" v-model="objArticle.status">
                    </div>
                    <div class="dialogItem">
                        <div class="btn_warp">
                            <button @click="saveArticleData()">确认</button>
                            <button @click="closeAddArticle()">取消</button>
                        </div>
                    </div>


                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goAddArticle: true,
            objArticle: {
                classificationName:'',
                classificationIcon: '',
                sortNum: 0,
                status:''
            },
        }
    },
    methods:{
        closeAddArticle() {
            this.goAddArticle = false;
            this.$emit('goAddArticle',this.goAddArticle);
        },
        saveArticleData() {
            this.goAddArticle = false;
            this.$emit('saveArticle',this.objArticle);
        }
    }
}
</script>

<style lang="scss" scoped>
.alertBg {
    background-color: #fff;
}

.articleDialog {
    position: absolute;
    width: 40vw;
    height: 40vh;
    top: 25vh;
    left: 25vw;
    border: 1px solid #000;
    border-radius: 5px;
    background-color: #fff;
}

.articleMask {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.5);
}

.dialogTitle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;
    font-size: 20px;

    span {
        font-size: 18px;
        color: #666;
        cursor: pointer;
    }

}

.dialogItem {
    display: flex;
    align-items: center;
    height: 60px;

    .classificationText {
        width: 150px;
        text-align: right;
        margin-right: 10px;

        span {
            color: red;
        }
    }

    .classificationName {
        width: 400px;
        height: 30px;
        border: 1px solid #dcdfe6;
        border-radius: 3px;

        &:focus {
            outline: none;
        }
    }

    .classificationIcon {
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 3px;
        background-color: #f5f7fa;

        &:focus {
            outline: none;
        }
    }


}

.sort_warp {
    display: flex;
    border: 1px solid #dcdfe6;

    .reduce {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #f5f7fa;
        border-right: 1px solid #dcdfe6;
        cursor: pointer;
    }

    .add {
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #f5f7fa;
        border-left: 1px solid #dcdfe6;
        cursor: pointer;
    }

    .sortNum {
        width: 100px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border: none;

        &:focus {
            outline: none;
        }
    }
}

.btn_warp {
    margin-left: 160px;

    button {
        width: 60px;
        height: 40px;
        border: none;
        border-radius: 5px;
        margin-right: 20px;
        cursor: pointer;

        &:nth-child(1) {
            color: #fff;
            background-color: #0189ff;
        }
        
    }

}

.status {
    width: 50px;
    height: 20px;
    border-radius: 20px;
    border: none;
    background-color: #0189ff;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #fff;
    }
}
</style>