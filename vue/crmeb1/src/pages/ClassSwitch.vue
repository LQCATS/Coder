<template>
    <div style="display:flex;margin: 20px; 20px;">
        <div class="tab" :class="tab1" @click="changeTab(0)">全部</div>
        <div class="tab" :class="tab2" @click="changeTab(1)">商城订单</div>
        <div class="tab" :class="tab3" @click="changeTab(2)">视频号订单</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tab1: [],
                tab2: [],
                tab3: [],
                
            }
        },
        methods: {
            changeTab(pos) {
                console.log(pos)
                this.tab1.splice(0);
                this.tab2.splice(0);
                this.tab3.splice(0);
                
                if (pos == 0) {
                    this.tab1.push('tabActive');
                } else if (pos == 1) {
                    this.tab2.push('tabActive');
                } else if (pos == 2) {
                    this.tab3.push('tabActive');
                }
                console.log(this.tab1)
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