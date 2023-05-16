<template>
    <div>
        <el-radio-group v-model="curVal">
            <el-radio v-for="item in radioData" :label="item.label">{{ item.value }}</el-radio>
        </el-radio-group>
    </div>
</template>

<script>
export default {
    props: {
        //单选框的值
        value: {
            type: Number,
            default: 0,
        },
        //单选框的选项数组
        radioData: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    data() {
        return {
            curVal: this.value,
        }
    },
    watch: {
        curVal: {
            handler(nv, ov) {
                this.$emit('input', nv);
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>