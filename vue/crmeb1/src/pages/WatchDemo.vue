<template>
    <div>
        <div>
            name: {{ name }}
            <button @click="changeName">改name</button>
        </div>
        <div>
            age: {{ age }}
            <button @click="changeAge">改age</button>
        </div>
        <div>
            objUser: {{ objUser }}
            <button @click="goTaiguo">去泰国了</button>
            <button @click="goTianTang">去天堂了</button>
            <button @click="goAongAn">去公安局</button>
        </div>

        <div>
            listUser: {{ listUser }}
            <button @click="addGroup">中单加入团战</button>
            <button @click="changeSan">张三走了</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "11",
                age: 23,
                objUser: {
                    name: '张三',
                    sex: "男"
                },
                listUser: [
                    {name: '张三', sex: '男'},
                    {name: '李四', sex: '男'},
                ]
            }
        },
        watch: {
            name(nv, ov) {
                console.log("name侦听器",nv, ov)
            },
            age(nv, ov) {
                console.log("age侦听器",nv, ov)
            },
            // objUser(nv, ov) {
            //     console.log("objUser侦听器",nv, ov)
            // },
            objUser: {
                handler(nv, ov) {
                    console.log("objUser, handler侦听器",nv, ov)
                },
                deep: true,
                immediate: true
            },
            "objUser.sex"(nv, ov) {
                console.log("objUser.sex侦听器",nv, ov)
            },
            listUser(nv, ov) {
                console.log("listUser侦听器",nv, ov)
            }
        },
        methods: {
            changeName() {
                this.name = new Date().getTime();
            },
            changeAge() {
                this.age = new Date().getTime();
            },
            goTaiguo() {
                this.objUser.sex = "女";
            },
            goTianTang() {
                this.objUser = {
                    name: '婉儿',
                    sex: '女'
                }
            },
            addGroup() {
                this.listUser.push({
                    name: '婉儿',
                    sex: '女'
                })
            },
            changeSan() {
                this.listUser[0].sex = "女";
            },
            goAongAn() {
                this.objUser.name = "张飞";
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>