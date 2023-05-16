<template>
    <div>
        <el-select v-model="curVal" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: '',
        },
        options: {
            type: Array,
            default: () => {
                return [];
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