<!-- classes create -->
<template>
  <div class="app-container">

    <el-form :model="form"
             ref="form"
             label-width="100px"
             v-loading="formLoading"
             :rules="rules">
      <el-form-item label="所属系别："
                    prop="deptId">
        <dept-class-select :dept-id.sync="form.deptId"
                           :deptLabel="deptName"
                           :hiddenClasses="true"></dept-class-select>
      </el-form-item>
      <el-form-item label="班级名称："
                    prop="classesName">
        <el-input v-model="form.classesName"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import classesApi from '@/api/classes'
import DeptClassSelect from '@/components/DeptClassSelect'

export default {
  components: { DeptClassSelect },
  data() {
    return {
      form: {
        id: null,
        deptId: 0,
        classesName: '',
      },
      deptName: '',
      formLoading: false,
      rules: {
        deptId: [
          { required: true, message: '请输入系别名称', trigger: 'blur' },
        ],
        classesName: [
          { required: true, message: '请输入系别名称', trigger: 'blur' },
        ],
      },
    }
  },
  watch: {},
  methods: {
    async submitForm() {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.formLoading = true
          const { id, deptId, classesName } = _this.form
          classesApi
            .update({ id, deptId, classesName })
            .then(() => {
              _this.$message.success('修改成功')
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/classes/list')
              })
            })
            .catch(() => {
              _this.formLoading = false
            })
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.$refs['form'].resetFields()
    },
    ...mapActions('tagsView', { delCurrentView: 'delCurrentView' }),
  },
  async created() {
    this.formLoading = true
    var id = this.$route.query.id
    let that = this
    if (id) {
      await classesApi.find(id).then(({ data }) => {
        that.form = data
        that.deptName = data.dept.deptName
      })
      console.log(this.form)
      this.formLoading = false
    }
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
</style>