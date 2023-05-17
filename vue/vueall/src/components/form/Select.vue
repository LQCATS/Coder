<template>
    <div>
        <el-select v-model="curVal" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
import code from '@/config/code';
export default {
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
        opType: {
            type: String,
            default: '',
        }
    },
    data() {
        return {
            curVal: '',
            options: [],
        }
    },
    created() {
        if (this.opType.startsWith('def')) {
            //查询数据库
            if ('defRole' == this.opType) {
                //查角色表
                this.$role.getAllUmsRole({}).then(res => {
                    let list = res.data.rows;
                    for (let item of list) {
                        this.options.push({
                            label: item.name,
                            value: item.id,
                        })
                    }
                })
            } else if ('defFirstMenu' == this.opType) {
                this.$power.getAllSysPrivilege({
                    condition: {
                        level: 1,
                    }
                }).then(res => {
                    let list = res.data.rows;
                    for (let item of list) {
                        this.options.push({
                            label: item.name,
                            value: item.id,
                        })
                    }
                })
            }
        } else {
            //直接调取字典的配置信息
            this.options = Object.assign([], code[this.opType]);

        }
    },
    watch: {
        value: {
            handler(nv, ov) {
                this.curVal = nv;
            },
            immediate: true,
        },
        curVal(nv, ov) {
            this.$emit('input', nv);
        },
    }
}
</script>

<style lang="scss" scoped></style>