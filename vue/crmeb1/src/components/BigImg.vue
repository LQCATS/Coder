<template>
    <div>
        <!-- 显示大图 -->
        <template v-if="goAddArticle">
            <div class="imgMask"></div>
            <div class="imgDialog">
                <img :src="imgSrc" alt="">
            </div>
            <div class="close" @click="closeBigImg">
                X
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        imgSrc: {
            type: String,
            default: require('@/assets/images/loadding.gif'),
        }
    },
    data() {
        return {
            goAddArticle: true,
        }
    },
    methods: {
        closeBigImg() {
            this.goAddArticle = false;
            this.$emit('goAddArticle',this.goAddArticle)
        }
    }

}
</script>

<style lang="scss" scoped>
.imgDialog {
    position: absolute;
    width: 50vw;
    height: 80vh;
    top: 10vh;
    left: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        right: 20%;
        max-width: 100%;
        max-height: 100%;
    }
}

.imgMask {
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.5);
}

.close {
    position: absolute;
    top: 5vh;
    right: 5vw;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #ccc;
    border: 3px solid #ccc;
    border-radius: 30px;
    cursor: pointer;
}
</style>