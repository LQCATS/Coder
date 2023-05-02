<template>
    <div>
        <div style="display:flex;">
            <div class="box" :class="{active: curPos == 0}" @click="curPos = 0">销售中</div>
            <div class="box" :class="{active: curPos == 1}" @click="curPos = 1">仓库中</div>
            <div class="box" :class="{active: curPos == 2}" @click="curPos = 2">预警中</div>
        </div>
        <div>
            countGoods: {{ countGoods }}
            <button @click="setCount">设置countGoods</button>
            <table>
                <tr>
                    <td>ID</td>
                    <td>名称</td>
                    <td>状态</td>
                </tr>
                <tr v-for="item in listGoods" :key="item.id">
                    <td>
                        {{ item.id }}
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{item.status}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                curPos: 0,
                listSourceGoods: [
                    {id: 1, name: 'a', status: 0},
                    {id: 2, name: 'b', status: 1},
                    {id: 3, name: 'c', status: 2},
                    {id: 4, name: 'd', status: 0},
                    {id: 5, name: 'e', status: 1},
                    {id: 6, name: 'f', status: 2},
                    {id: 7, name: 'g', status: 0},
                ],
                listGoods: []
            }
        },
        computed: {
            countGoods: {
                get() {
                    return this.listGoods.length;
                },
                set(val) {
                    console.log(111, val);
                    // this.countGoods = val;
                }
            }
        },
        watch: {
            curPos: {
                handler(nv, ov) {
                    this.listGoods = this.listSourceGoods.filter(item => item.status == this.curPos);

                    console.log(111, nv, ov);
                },
                immediate: true
            },
                
        },
        methods: {
            setCount() {
                this.countGoods = 13;
            }
        }
    }
</script>

<style lang="scss" scoped>
.box {
    width: 100px;
    height: 50px;
    line-height:50px;
    background:#ccc;
    border: 1px solid #000;
    cursor: pointer;
    text-align:center;
}

.active {
    background: pink;
    color: #fff;
}
</style>