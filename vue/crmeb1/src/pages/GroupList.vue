<template>
    <div class="page_content">
        <div>
            参与人数：{{sumJoin}}人        成团数量：{{sumGroup}}个
            <button @click="getJoin">取得sumJoin</button>
            <button @click="addGroup">加入一条数据</button>
            <button @click="testDate">测试日期</button>
        </div>
        <div class="search_content">
            <div class="search_item">
                <div class="item_txt">时间选择</div>
                <div class="item_form" style="display:flex;">
                    <div class="opItem" @click="changeTime(0)">全部</div>
                    <div class="opItem" @click="changeTime(1)">今天</div>
                    <div class="opItem" @click="changeTime(2)">昨天</div>
                    <div class="opItem" @click="changeTime(3)">最近7天</div>
                    <div class="opItem" @click="changeTime(4)">最近30天</div>
                    <div class="opItem" @click="changeTime(5)">本月</div>
                    <div class="opItem" @click="changeTime(6)">本年</div>
                    <input ref="txtDate" style="margin-left: 10px;" />
                    <button @click="doSearch">查询</button>
                </div>
            </div>

            <div class="search_item">
                <div class="item_txt">拼团状态</div>
                <select class="item_form">
                    <option>开启</option>
                    <option>关闭</option>
                </select>
            </div>
        </div>
        <div class="table_warp">
            <table class="data_table">
                <tr class="myth">
                    <td>序号</td>
                    <td>ID</td>
                    <td>头像</td>
                    <td>开团团长</td>
                    <td>开团时间</td>
                    <td>拼团商品</td>
                    <td>几人团</td>
                    <td>几人参加</td>
                    <td>成团数量</td>
                    <td>结束时间</td>
                    <td>拼团状态</td>
                    <td>操作</td>
                </tr>
                <tr class="mytr" v-for="(goods, index) in newListGoods" v-bind:key="goods.id">
                    <td>
                        {{ index + 1 }}
                    </td>
                    <td>
                        {{ goods.id }}
                    </td>
                    <td style="display:flex;justify-content: center; align-items: center;">
                        <img v-bind:src="goods.img" style="max-width:80px;max-height:50px" />
                    </td>
                    <td>
                        {{ goods.teamName }}
                    </td>
                    <td>
                        {{ goods.startTime }}
                    </td>
                    <td>
                        {{ goods.goodsName }}
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
                        {{ goods.overTime  }}
                    </td>
                    <td>
                        <div v-if="goods.status == 0">未完成</div>
                        <div v-else-if="goods.status == 1">已完成</div>
                    </td>
                    <td>
                        <button @click="goDetail(goods)">详情</button>
                        <button @click="doDel(goods, index)">删除</button>
                    </td>
                </tr>
            </table>

        </div>
        
        <template v-if="showDetail" >
            <div class="dialogMask"></div>
            <div class="detailDialog">
                这里是详情页面弹出窗
                <input />
                <button @click="showDetail = false">关闭</button>
            </div>
        </template>
        <button>testGetTest</button>
    </div>
    
</template>

<script>
    import tool from "@/tools/tool"
    // import {addTest, getTest} from "@/filters";

    //vue组件的配置对象
    export default {
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
                curTime: 0,
                listMsg: ['a', 'b', 'c'],
                listUser: [
                    {
                        id: 2,  
                        name: '李四',
                        age: 22,
                        marrige: false,
                    }
                ],
                listGoods: [
                    {
                        id: 1,
                        img: "http://gaitaobao4.alicdn.com/tfscom/i4/2581462642/TB1PSPOdlfH8KJjy1XbXXbLdXXa_!!0-item_pic.jpg",
                        teamName: "大粽子",
                        startTime: "2023-04-26",
                        goodsName: "打火机",
                        groupCount: 20,
                        joinCount: 1,
                        overTime: '2023-04-26',
                        status: 0
                    },
                    {
                        id: 2,
                        img: "http://gaitaobao4.alicdn.com/tfscom/i4/2581462642/TB1PSPOdlfH8KJjy1XbXXbLdXXa_!!0-item_pic.jpg",
                        teamName: "神经蛙",
                        startTime: "2023-04-25",
                        goodsName: "华子",
                        groupCount: 30,
                        joinCount: 2,
                        overTime: '2023-04-25',
                        status: 1
                    },
                    {
                        id: 3,
                        img: "http://gaitaobao4.alicdn.com/tfscom/i4/2581462642/TB1PSPOdlfH8KJjy1XbXXbLdXXa_!!0-item_pic.jpg",
                        teamName: "倩仔",
                        startTime: "2023-04-27",
                        goodsName: "酒",
                        groupCount: 40,
                        joinCount: 3,
                        overTime: '2023-04-28',
                        status: 1
                    }
                ]
            }
        },
        computed: {
            newListGoods() {
                console.log("newListGoods执行", this.curTime);
                if (0 == this.curTime) {
                    //全部
                    return this.listGoods;
                } else if (1 == this.curTime) {
                    //今天
                    let temp = tool.getNow();
                    let newList = this.listGoods.filter(item => item.startTime == temp);
                    return newList;
                } else if (2 == this.curTime){
                    //昨天
                    let temp = tool.getYesteday();

                    let newList = this.listGoods.filter(item => item.startTime == temp);

                    return newList;
                }  else if (3 == this.curTime){
                    //最近7天

                    //今天
                    let nowDate = tool.getNow();
                    //七天前
                    let sevenDate = tool.getLastDay(7);

                    let newList = this.listGoods.filter(item => item.startTime > sevenDate && item.startTime < nowDate);

                    return newList;
                } else {
                    return this.listGoods;
                }
                
            },
            sumJoin(){
                let total = 0;
                for (let goods of this.listGoods) {
                    total = total + goods.joinCount
                }
                let test = this.age;
                console.log("sumJoin执行", test)
                return total;
            },
            sumGroup() {
                let total = 0;
                this.listGoods.forEach((item, index) => {
                    if (1 == item.status) {
                        total++;
                    }
                })
                console.log("sumGroup执行了")
                return total;
            }
        },
        watch: {
            listGoods(newVal, oldVal) {
                console.log("listGoods侦听器执行了",newVal, oldVal);
                //alert("删除成功");
            }
        },
        methods: {
            // testGetTest() {
            //     let aa =  getTest();
            //     console.log(aa);
            // },
            doSearch() {
                //获取文本框的值 
                let val = this.$refs.txtDate.value;

                //检查val是否是日期对象
                if (val && 10 == val.length && /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/.test(val)) {
                    //检查通过，可以查询
                    let newList = this.listGoods.filter(item => item.startTime == val);
                    this.listGoods = newList;
                }
                console.log("doSearch", this.$refs, this.$refs.txtDate, this.$refs.txtDate.value);

            },
            doDel(goods, pos) {
                let result = confirm("确定删除该数据吗");
                if (result) {
                    //确定
                    let findex = this.listGoods.findIndex(item => item.id == goods.id);
                    if (findex >= 0) {
                        //找到的情况
                        this.listGoods.splice(findex, 1);
                    }
                }
                
                // this.listGoods.splice(pos, 1);
            },
            testDate() {
                let now = new Date();
                let day = now.getDate();
                now.setDate(day - 60);
                

                console.log(now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate())
            },
            changeTime(type) {
                // if (0 == type) {
                //     //全部
                //     this.curTime = type;
                // } else if (1 == type) {
                //     //今天
                //     this.curTime = type;
                // }

                this.curTime = type;
                console.log(this.curTime, 22);
            },
            addGroup() {
                // this.listGoods.push({
                //     id: this.listGoods.length + 1,
                //     img: "http://gaitaobao4.alicdn.com/tfscom/i4/2581462642/TB1PSPOdlfH8KJjy1XbXXbLdXXa_!!0-item_pic.jpg",
                //     teamName: "倩仔",
                //     startTime: "2023-04-03",
                //     goodsName: "酒",
                //     groupCount: 40,
                //     joinCount: 10,
                //     overTime: '2023-04-28',
                //     status: 1
                // })
                this.age++;
            },
            getJoinCount() {
                let total = 0;
                for (let goods of this.listGoods) {
                    total = total + goods.joinCount
                }
                console.log("getJoinCount执行")
                return total;
            },
            getJoin() {
                console.log(1111, this.sumJoin);
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

<style lang="scss" scoped>

</style>