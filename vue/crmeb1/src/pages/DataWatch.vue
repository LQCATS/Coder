<template>
    <div>
        <h1>数据监测</h1>
        <div>
            count:{{ count }}
            <button @click="count++">count++</button>
        </div>
        <div>
            objUser: {{ objUser }}
            <button @click="addSex">加sex属性</button>
            <button @click="delAge">删除age</button>
        </div>
        <div>
            listUser: {{ listUser }}
            <button @click="changeListUserName">改李四为麻子</button>
            <button @click="deleteZero">删除李四</button>
            <button @click="addList">麻子加入</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0,
                objUser: {
                    name: '张三',
                    age: 40,
                    address: {
                        city: '111'
                    }
                },
                listUser: [
                    {name: '李四', age: 50}
                ]
            }
        },
        methods: {
            addSex() {
                // this.objUser.sex = new Date().getTime();
                // this.$set(this.objUser, "sex", "男");

                // this.objUser = {...this.objUser, sex: "男"};
                // this.objUser = Object.assign({}, this.objUser, {sex: '男'});
                this.objUser.sex = "男";
                this.objUser = JSON.parse(JSON.stringify(this.objUser));

                console.log("addSex", this.objUser);
            },
            delAge() {
                // delete this.objUser.age;
                this.$delete(this.objUser, "age");
                console.log("delAge", this.objUser);
            },
            changeListUserName() {
                this.listUser[0].name = "麻子";
                console.log(this.listUser)
            },
            deleteZero() {
                // delete this.listUser[0];
                this.listUser.splice(0, 1);
                console.log(this.listUser)
            },
            addList() {
                // this.listUser[1] = {name: '麻子', age: 20}
                this.$set(this.listUser, 1, {name: '麻子', age: 20});
                console.log(this.listUser)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>