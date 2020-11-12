<template>
  <div class='dept-class-select'>
    <el-select v-model="Dept"
               :loading="loading"
               placeholder="请选择系别"
               filterable
               clearable>
      <el-option v-for="item in deptClasses"
                 :key="item.id"
                 :value="item.id"
                 :label="item.deptName"></el-option>
    </el-select>
    <div class="center-line"
         v-show="hiddenClasses==false">-</div>
    <el-select filterable
               :loading="loading"
               v-show="hiddenClasses==false"
               v-model="Classes"
               placeholder="请选择班级"
               clearable>
      <el-option v-for="item in classesList"
                 :key="item.key"
                 :value="item.key"
                 :label="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
import deptApi from '@/api/dept'

export default {
  name: 'DeptClassSelect',
  props: {
    hiddenClasses: {
      type: Boolean,
      default: false,
    },
    deptId: {
      type: Number,
      default: 0,
    },
    classesId: {
      type: Number,
      default: 0,
    },
    deptLabel: {
      type: String,
      default: '',
    },
    classesLabel: {
      type: String,
      default: '',
    },
  },
  computed: {
    Dept: {
      get() {
        return this.deptLabel
      },
      set(val) {
        var that = this
        var item = this.getClasses(this.deptClasses, val)
        for (let citem of item.classes) {
          var classesItem = {
            key: citem.id,
            value: citem.classesName,
          }
          that.classesList.push(classesItem)
        }
        this.deptLabel = item.deptName
        this.$emit('update:deptId', item.id)
      },
    },
    Classes: {
      get() {
        return this.classesLabel
      },
      set(val) {
        var item = this.getClasses(this.classesList, val)
        this.classesLabel = item.classesName
        this.$emit('update:classesId', item.id)
      },
    },
  },
  components: {},
  data() {
    return {
      loading: true,
      deptClasses: [],
      classesList: [],
    }
  },
  watch: {},
  methods: {
    getClasses: function (array, id) {
      for (let item of array) {
        if (item.id === id) {
          return item
        }
      }
      return null
    },
  },
  created() {
    // 获取系别班级数据
    const that = this
    deptApi.all().then(({ data }) => {
      that.deptClasses = data
      that.loading = false
    })
  },
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
.dept-class-select {
  display: flex;
  .center-line {
    width: 40px;
    text-align: center;
  }
}
</style>