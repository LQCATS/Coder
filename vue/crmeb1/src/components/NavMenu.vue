<template>
    <div class="nav_menu">
        <div class="firstMenu">营销</div>
        <div class="secondMenu" :class="{ menuActive: curPos == menu.id }" v-for="menu in listMenu"
            @click="changeMenu(menu.id)">
            {{ menu.name }}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            curPos: 0,
            listMenu: [
                {
                    id: 1, name: '拼团商品'
                },
                {
                    id: 2, name: '拼团列表'
                },
                {
                    id: 3, name: '订单'
                },
            ],
        }
    },
    methods: {
        changeMenu(pos) {
            // console.log(pos);
            this.curPos = pos
        },
    }

}
</script>

<style lang="scss" scoped>
.firstMenu {
    width: 100%;
    height: 50px;
    padding-left: 20px;
    color: #fff;
    box-sizing: border-box;
    line-height: 50px;
    cursor: pointer;

}

.secondMenu {
    width: 100%;
    height: 50px;
    padding-left: 60px;
    box-sizing: border-box;
    color: #fff;
    line-height: 50px;
    cursor: pointer;

    &:hover {
        background-color: #283748;
    }

}


.menuActive {
    background-color: #fff;
    color: #1890ff;
    cursor: pointer;

    &:hover {
        background-color: #fff;
    }
}
</style>