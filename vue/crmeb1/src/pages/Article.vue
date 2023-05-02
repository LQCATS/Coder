<template>
    <div>
        <div class="page_content">
            <div class="search_content">
                <div class="search_item">
                    <div class="item_txt">状态：</div>
                    <select class="item_form">
                        <option>全部</option>
                        <option>显示</option>
                        <option>不显示</option>
                    </select>
                </div>

                <div class="search_item">
                    <div class="item_txt">名称：</div>
                    <input class="item_form" placeholder="请输入名称" />
                </div>

            </div>
            <div class="btn_warp">
                <button @click="goAddArticle()">新增文章分类</button>
            </div>
            <div class="table_warp">
                <table class="data_table" style="color:#666">
                    <tr class="myth">
                        <td>名称</td>
                        <td>类型</td>
                        <td>分类图标</td>
                        <td>排序</td>
                        <td>状态</td>
                        <td>操作</td>

                    </tr>
                    <tr class="mytr" v-for="(article, index) in articleList" v-bind:key="article.id">
                        <td>{{ article.name }} | {{ article.id }}</td>
                        <td>文章分类</td>
                        <td class="img_td" @click="goBigImg(index)">
                            <img src="@/assets/images/loadding.gif" ref="loaddingIcon">
                            <img v-show="isShow" @load="imgLoded(index)" :src="article.extra" ref="realImg">
                            <!-- <img :src="article.extra" alt="" :class="index"> -->

                        </td>
                        <td>{{ article.sort }}</td>
                        <td></td>
                        <td class="operate">
                            <span>编辑</span>
                            <span>删除</span>
                        </td>
                    </tr>
                </table>

            </div>


        </div>
        <!-- 显示大图模态框组件 -->
        <BigImg v-if="isShowBigImg" @goAddArticle="changeBigImgIsShow" v-bind:imgSrc="imgSrc"></BigImg>
        <!-- 添加文章模态框组件 -->
        <AddArticle v-if="addArticleIsShow" @goAddArticle="changeAddArticleIsShow" @saveArticle="doSave"></AddArticle>
    </div>
</template>

<script>
import { articleList } from '@/assets/js/articleData';
//引入组件
import AddArticle from '@/components/AddArticle.vue';
import BigImg from '@/components/BigImg.vue';

export default {
    components: {
        AddArticle,
        BigImg
    },
    data() {
        return {
            articleList,
            addArticleIsShow: false,
            isShow: false,
            isShowBigImg: false,
            imgSrc: '',
        }
    },
    methods: {
        imgLoded(pos) {
            this.$refs.realImg[pos].style.display = "block";
            this.$refs.loaddingIcon[pos].style.display = "none";
        },
        goAddArticle() {
            this.addArticleIsShow = true;
        },
        changeAddArticleIsShow(pos) {
            this.addArticleIsShow = pos;
        },
        //保存新增文章分类
        doSave(pos) {
            this.articleList.push({
                id: 1314,
                name: '默认',
                type: 3,
                extra: pos.classificationIcon ? pos.classificationIcon : require('@/assets/images/beer.png'),
                status: pos.status == '显示' ? true : false,
                sort: pos.sortNum
            })
        },
        goBigImg(pos) {
            this.isShowBigImg = true;
            this.imgSrc = this.$refs.realImg[pos].src;
        },
        changeBigImgIsShow(pos) {
            this.isShowBigImg = pos;
        }
    }
}
</script>

<style lang="scss" scoped>
.operate {
    color: #819ff0;

    span {
        margin-right: 10px;

    }
}

.img_td {
    display: flex;
    align-items: center;

    img {
        width: 30px;
        height: 30px;
        cursor: pointer;
    }
}

.btn_warp {

    button {
        height: 30px;
        width: 100px;
        border: none;
        border-radius: 3px;
        background-color: #1890ff;
        color: #fff;
        cursor: pointer;
    }
}
</style>