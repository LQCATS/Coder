<template>
    <div class="page_content">
        msg:{{ msg }}
        <div class="search_content">
            <div class="search_item">
                <div class="item_txt">拼团状态</div>
                <select class="item_form">
                    <option>开启</option>
                    <option>关闭</option>
                </select>
            </div>

            <div class="search_item">
                <div class="item_txt">商品搜索</div>
                <input class="item_form" placeholder="商品名称、ID" />
            </div>

        </div>
        <div class="btn_warp">
            <button class="btn_common" v-on:click="exportData($event, 0)">导出</button>
            <button class="btn_common" v-on:click="goAdd">新增</button>
        </div>
        <img src="@/assets/images/beer.png" style="width:100px;">
        <img :src="img" style="width:100px;">
        <div class="table_warp">
            <table class="data_table">
                <tr class="myth">
                    <td>ID</td>
                    <td>拼团图片</td>
                    <td>拼团名称</td>
                    <td>原价</td>
                    <td>拼团价</td>
                    <td>拼团人数</td>
                    <td>参与人数</td>
                    <td>成团数量</td>
                    <td>限量</td>
                    <td>剩余数量</td>
                    <td>结束时间</td>
                    <td>拼团状态</td>
                    <td>操作</td>
                </tr>
                <tr class="mytr" v-for="(goods, index) in listGoods" v-bind:key="goods.id">
                    <td>
                        {{ goods.id }}
                    </td>
                    <td style="display:flex;justify-content: center; align-items: center;">
                        <!-- <img v-bind:src="goods.img" style="max-width:80px;max-height:50px" /> -->
                        <img src="@/assets/images/loadding.gif" ref="loaddingIcon" style="max-width:80px;max-height:50px">
                        <img v-if="goods.img" @load="imgLoded(index)" ref="realImg" :src="goods.img"
                            style="max-width:80px;max-height:50px;display:none;" />
                        <span v-else>无法加载</span>
                        <!-- {{ goods.img }} -->
                    </td>
                    <td>
                        {{ goods.name }}
                    </td>
                    <td>
                        {{ goods.srcPrice }}
                    </td>
                    <td>
                        {{ goods.groupPrice }}
                    </td>
                    <td>
                        {{ goods.groupCount }}
                    </td>
                    <td>
                        {{ goods.joinCount }}
                    </td>
                    <td>
                        {{ goods.becomeCount }}
                    </td>
                    <td>
                        <span v-html="goods.limitCount + '个'"></span>
                    </td>
                    <td>
                        <span v-text="goods.splusCount + '个'">

                        </span>
                    </td>
                    <td>
                        <!-- <span v-text="goods.overTime | formartDate('yyyy-MM')"></span> -->
                        {{ goods.overTime | formartDate('yyyy-MM') }}
                    </td>
                    <td>
                        <div v-if="goods.status == 0">未完成</div>
                        <div v-else-if="goods.status == 1">已完成</div>
                    </td>
                    <td>
                        <button @click="goDetail(goods)">详情</button>
                    </td>
                </tr>
            </table>

        </div>

        <template v-if="showDetail">
            <div class="dialogMask"></div>
            <div class="detailDialog">
                这里是详情页面弹出窗
                <input />
                <button @click="showDetail = false">关闭</button>
            </div>
        </template>


        <button>加test</button>
        <button>testGetTest</button>
        {{ obj }}
    </div>
</template>

<script>

// import {addTest, getTest} from "@/filters";

//vue组件的配置对象
export default {
    props: ["obj"],
    //用于配置页面中使用的数据
    data() {
        return {
            showDetail: false,
            msg: "hello world",
            img: require("@/assets/images/beer.png"),
            age: 18,
            boy: true,
            objUser: {
                id: 1,
                name: '张三',
                age: 20,
                marrige: true,
            },
            listMsg: ['a', 'b', 'c'],
            listUser: [
                {
                    id: 2,
                    name: '李四',
                    age: 22,
                    marrige: false,
                }
            ],
            listSourceGoods: [
                {
                    id: 1,
                    img: "http://gaitaobao4.alicdn.com/tfscom/i4/2581462642/TB1PSPOdlfH8KJjy1XbXXbLdXXa_!!0-item_pic.jpg",
                    name: "打火机",
                    srcPrice: "11111111",
                    groupPrice: "0.5",
                    groupCount: 20,
                    joinCount: 10,
                    becomeCount: 10,
                    limitCount: 10,
                    overTime: '2023-04-26',
                    splusCount: 100,
                    status: 0
                },
                {
                    id: 2,
                    img: "http://asdasdfg",
                    name: "宽窄",
                    srcPrice: "25222222",
                    groupPrice: "23",
                    groupCount: 30,
                    joinCount: 20,
                    becomeCount: 20,
                    limitCount: "<span style='color:red'>50</span>",
                    overTime: '2023-04-26',
                    splusCount: "<span style='color:pink'>20</span>",
                    status: 0
                },
                {
                    id: 3,
                    img: "",
                    name: "酒",
                    srcPrice: "100333333",
                    groupPrice: "50",
                    groupCount: 20,
                    joinCount: 10,
                    becomeCount: 10,
                    limitCount: 10,
                    overTime: '2023-04-26',
                    splusCount: 100,
                    status: 1
                }
            ],
            listGoods: [
                {
                    id: 1,
                    img: "http://gaitaobao4.alicdn.com/tfscom/i4/2581462642/TB1PSPOdlfH8KJjy1XbXXbLdXXa_!!0-item_pic.jpg",
                    name: "打火机",
                    srcPrice: "11111111",
                    groupPrice: "0.5",
                    groupCount: 20,
                    joinCount: 10,
                    becomeCount: 10,
                    limitCount: 10,
                    overTime: '2023-04-26',
                    splusCount: 100,
                    status: 0
                },
                {
                    id: 2,
                    img: "http://asdasdfg",
                    name: "宽窄",
                    srcPrice: "25222222",
                    groupPrice: "23",
                    groupCount: 30,
                    joinCount: 20,
                    becomeCount: 20,
                    limitCount: "<span style='color:red'>50</span>",
                    overTime: '2023-04-26',
                    splusCount: "<span style='color:pink'>20</span>",
                    status: 0
                },
                {
                    id: 3,
                    img: "",
                    name: "酒",
                    srcPrice: "100333333",
                    groupPrice: "50",
                    groupCount: 20,
                    joinCount: 10,
                    becomeCount: 10,
                    limitCount: 10,
                    overTime: '2023-04-26',
                    splusCount: 100,
                    status: 1
                }
            ]



        }
    },
    watch: {
        obj: {
            handler(nv, ov) {
                if (null != this.obj) {
                    this.listGoods.push({
                        id: new Date().getTime(),
                        img: "",
                        name: this.obj.groupName,
                        srcPrice: "111",
                        groupPrice: "50",
                        groupCount: this.obj.groupCount,
                        joinCount: 0,
                        becomeCount: this.obj.completionCount,
                        limitCount: this.obj.limitCount,
                        overTime: this.obj.endDate,
                        splusCount: 100,
                        status: this.obj.status
                    })
                    console.log("obj侦听器", nv, ov)
                }
            },
            immediate: true
        }
    },
    filters: {
        formartDate(par, formatType) {
            let arrDate = par.split("-");
            let result = arrDate[0] + "年" + arrDate[1] + "月" + arrDate[2] + "日";
            console.log("formatDate", par, formatType, this);
            return result;
        }
    },
    methods: {
        // testAddTest() {
        //     addTest(5);
        // },
        // testGetTest() {
        //     let aa =  getTest();
        //     console.log(aa);
        // },
        convertDate(par) {
            console.log("convertDate", par);
            let arrDate = par.split("-");
            let result = arrDate[0] + "年" + arrDate[1] + "月" + arrDate[2] + "日";
            return result;
        },
        //跳转到添加商品页面
        goAdd() {
            this.$emit("jumpPage", 7, "AddGoods");
        },
        exportData(e, pos) {
            console.log("导出数据", e, pos);
            alert("导出数据");
        },
        goDetail(par) {
            console.log(par);
            this.showDetail = true;
        },
        imgLoded(pos) {
            this.$refs.realImg[pos].style.display = "block";
            this.$refs.loaddingIcon[pos].style.display = "none";

        }
    }
}
</script>

<style lang="scss" scoped></style>