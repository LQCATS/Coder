<template>
    <div>
        <el-tag closable @close="colseTab(tab)" disable-transitions v-for="tab in getTabs" style="margin-right: 10px;">
            <router-link :to="tab.path" active-class="curTab" class="tabs">{{ tab.name }}</router-link>
        </el-tag>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    computed: {
        ...mapGetters(['getTabs']),
    },
    methods: {
        ...mapMutations(['DEL_TAB']),
        colseTab(curTab) {
            // console.log('curTab', curTab);
            this.DEL_TAB(curTab);
        },
    }
}
</script>

<style lang="scss" scoped>
.el-tag .curTab {
    color: orange;
    text-decoration: none;
}

.tabs {
    color: #333;
    text-decoration: none;
}
</style>