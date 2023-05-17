<template>
    <div>
        <el-input v-model="curVal" placeholder="请输入"></el-input>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: [String, Number],
            default: '',
        }
    },
    data() {
        return {
            curVal: '',
        }
    },
    watch: {
        value: {
            handler(nv, ov) {
                this.curVal = nv;
            },
            immediate: true,
        },
        curVal: {
            handler(nv, ov) {
                this.$emit('input', nv);
            },
            immediate: true,
        }
    }
}
</script>

<style lang="scss" scoped></style>