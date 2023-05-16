<template>
    <div>
        <el-input v-model="curVal"></el-input>
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