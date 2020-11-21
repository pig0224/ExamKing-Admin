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
      <div style="bottom: 0;width: 100%;background: #fff">
        <pagination v-show="totalCount>0"
                    :total="totalCount"
                    :page.sync="queryParam.pageIndex"
                    :limit.sync="queryParam.pageSize"
                    layout="prev, pager,next,total"
                    @pagination="search" />
      </div>
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
                 :key="item.id"
                 :value="item.id"
                 :label="item.classesName"></el-option>
    </el-select>
  </div>
</template>

<script>
import deptApi from '@/api/dept'
import Pagination from '@/components/Pagination'

export default {
  name: 'DeptClassSelect',
  components: { Pagination },
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
  watch: {
    deptLabel: {
      handler(val) {
        this.deptName = val
      },
      deep: true,
    },
    classesLabel: {
      handler(val) {
        this.classesName = val
      },
      deep: true,
    },
  },
  computed: {
    Dept: {
      get() {
        return this.deptName
      },
      set(val) {
        if (val) {
          var item = this.getClasses(this.deptClasses, val)
          this.classesList = item.classes
          this.deptName = item.deptName
          this.$emit('update:deptId', item.id)
        } else {
          this.classesList = []
          this.deptName = ''
          this.$emit('update:deptId', 0)
          this.classesName = ''
          this.$emit('update:classesId', 0)
        }
      },
    },
    Classes: {
      get() {
        return this.classesName
      },
      set(val) {
        if (val) {
          var item = this.getClasses(this.classesList, val)
          this.classesName = item.classesName
          this.$emit('update:classesId', item.id)
        } else {
          this.classesName = ''
          this.$emit('update:classesId', 0)
        }
      },
    },
  },
  data() {
    return {
      queryParam: {
        pageIndex: 1,
        pageSize: 10,
      },
      deptName: '',
      classesName: '',
      totalCount: 0,
      loading: true,
      deptClasses: [],
      classesList: [],
    }
  },
  methods: {
    async search() {
      this.loading = true
      // 获取系别班级数据
      await deptApi.list(this.queryParam).then(({ data }) => {
        this.queryParam.pageIndex = data.pageIndex
        this.queryParam.pageSize = data.pageSize
        this.totalCount = data.totalCount
        this.deptClasses = data.items
      })
      this.loading = false
    },
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
    this.search()
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