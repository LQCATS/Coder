<template>
    <div>
        <div style="display:flex;margin: 20px; 20px;">
            <div class="tab" :style="tab1" @click="changeTab(0)">全部</div>
            <div class="tab" :style="tab2" @click="changeTab(1)">商城订单</div>
            <div class="tab" :style="tab3" @click="changeTab(2)">视频号订单</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tab1: '',
                tab2: {},
                tab3: ''
            }
        },
        methods: {
            changeTab(pos) {
                this.tab1 = "";
                this.tab2 = {};
                this.tab3 = "";
                if (pos == 0) {
                    this.tab1 = "background: green;color:#fff";
                } else if (pos == 1) {
                    this.tab2 = {backgroundColor: "green", color: "#fff"};
                } else if (pos == 2) {
                    this.tab3 = "background: green;color:#fff"
                }
                console.log(pos)
            }
        }
    }
</script>

<style lang="scss" scoped>

.tab {
    width: 120px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #d9d9d9;
    border: 1px solid #ccc;
    cursor: pointer;
}

.tabActive {
    background: green;
    color: #fff;
}
</style>