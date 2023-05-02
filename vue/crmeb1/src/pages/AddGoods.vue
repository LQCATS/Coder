<template>
    <div style="margin: 30px">
        <div>
            添加拼团商品
        </div>
        <div class="formRow">
            <div class="formTitle">商品主图:</div>
            <input v-model="objGoods.mainImg" type="text" />
        </div>
        <div class="formRow">
            <div class="formTitle">商品轮播图:</div>
            <input type="text" v-model="objGoods.swiper1" />
            <input type="text" v-model="objGoods.swiper2" />
            <input type="text" v-model="objGoods.swiper3" />
        </div>
        <div class="formRow">
            <div class="formTitle">拼团名称:</div>
            <input type="text" v-model="objGoods.groupName"/>
        </div>
        <div class="formRow">
            <div class="formTitle">拼团简介:</div>
            <textarea v-model="objGoods.intro"></textarea>
        </div>
        <div class="formRow">
            <div class="formTitle">单位:</div>
            <input type="text" v-model="objGoods.unit"/>
        </div>
        <div class="formRow">
            <div class="formTitle">活动日期:</div>
            <input type="date" v-model="objGoods.startDate"/><input type="date" v-model="objGoods.endDate"/>
        </div>
        <div class="formRow">
            <div class="formTitle">拼团有效时间:</div>
            <input type="text" v-model="objGoods.validTime"/>
        </div>
        <div class="formRow">
            <div class="formTitle">拼团人数:</div>
            <input type="text" v-model="objGoods.groupCount" />
        </div>
        <div class="formRow">
            <div class="formTitle">购买数量限制:</div>
            <input type="text" v-model="objGoods.limitCount"/>
        </div>
        <div class="formRow">
            <div class="formTitle">单次购买数量限制:</div>
            <input type="text" v-model="objGoods.sigleCount"/>
        </div>
        <div class="formRow">
            <div class="formTitle">补齐人数:</div>
            <input type="text" v-model="objGoods.completionCount"/>
        </div>
        <div class="formRow">
            <div class="formTitle">排序:</div>
            <input type="text" v-model="objGoods.sortNum"/>
        </div>
        <div class="formRow">
            <div class="formTitle">运费模板:</div>
            <select v-model="objGoods.postTemplate">
                <option value="by">包邮</option>
                <option value="third">3公斤</option>
                <option value="five">5公斤</option>
            </select>
        </div>
        <div class="formRow">
            <div class="formTitle">活动状态:</div>
            <label>
                <input type="radio" v-model="objGoods.status" :value="0"/>关闭
            </label>
            <label>
                <input type="radio" v-model="objGoods.status" :value="1"/>开启
            </label>
        </div>

        <button @click="doSave">保存</button>
        <button @click="testChange">改变mainImg</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                objGoods: {
                    mainImg: "",
                    swiper1: "",
                    swiper2: "",
                    swiper3: "",
                    groupName: "",
                    intro: "拼团简介",
                    startDate: "",
                    endDate: "",
                    validTime: "",
                    groupCount: "",
                    limitCount: "",
                    sigleCount: "",
                    completionCount: "",
                    sortNum: "",
                    postTemplate: "third",
                    status: 0
                }
            }
        },
        methods: {
            txtInput(e) {
                console.log(e.target.value, 111);
                this.mainImg =e.target.value;
            },
            //保存按钮事件
            doSave() {
                console.log("doSave", this.objGoods);
                this.$emit("saveData", this.objGoods);
            },
            testChange() {
                this.mainImg = new Date().getTime();
            }
        }
    }
</script>

<style lang="scss" scoped>
.formRow {
    display:flex;
    margin: 20px;
    .formTitle {
        width: 120px;
        text-align:right;
        font-size: 14px;
        margin-right: 8px;
    }
}
</style>