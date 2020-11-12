<!-- sex radio component -->
<template>
  <div class='sex-radio'>
    <el-select v-model="Sex"
               placeholder="请选择性别"
               clearable>
      <el-option v-for="item in sexEnum"
                 :key="item.key"
                 :value="item.key"
                 :label="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'SexSelect',
  props: {
    sex: {
      required: true,
      type: String,
    },
  },
  computed: {
    Sex: {
      get() {
        return this.sexLabel
      },
      set(val) {
        this.sexLabel = this.enumFormat(this.sexEnum, val)
        this.$emit('update:sex', String(val))
      },
    },
    ...mapGetters('enumItem', ['enumFormat']),
    ...mapState('enumItem', {
      sexEnum: (state) => state.sexEnum,
    }),
  },
  components: {},
  data() {
    return {
      sexLabel: '',
    }
  },
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
</style>