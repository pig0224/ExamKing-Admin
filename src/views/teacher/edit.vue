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
                           :dept-label="deptName"
                           :hidden-classes="true"></dept-class-select>
      </el-form-item>

      <el-form-item label="教师姓名："
                    prop="teacherName">
        <el-input v-model="form.teacherName"></el-input>
      </el-form-item>

      <el-form-item label="教师性别：">
        <sex-select :sex.sync="form.sex"></sex-select>
      </el-form-item>

      <el-form-item label="联系电话："
                    prop="telphone">
        <el-input v-model="form.telphone"></el-input>
      </el-form-item>

      <el-form-item label="密码："
                    prop="password">
        <el-input v-model="form.password"
                  placeholder="留空不修改密码"></el-input>
      </el-form-item>

      <el-form-item label="身份证号码："
                    prop="idCard">
        <el-input v-model="form.idCard"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="
                   primary"
                   @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import teacherApi from '@/api/teacher'
import DeptClassSelect from '@/components/DeptClassSelect'
import SexSelect from '@/components/SexSelect'

export default {
  components: { DeptClassSelect, SexSelect },
  data() {
    return {
      form: {
        id: 0,
        teacherName: '',
        sex: '',
        telphone: '',
        password: '',
        deptId: 0,
        idCard: '',
      },
      deptName: '',
      formLoading: false,
      rules: {
        deptId: [
          { required: true, message: '请输入系别名称', trigger: 'blur' },
        ],
        teacherName: [
          { required: true, message: '请输入11名称', trigger: 'blur' },
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
          const {
            id,
            teacherName,
            sex,
            telphone,
            teacherNo,
            password,
            deptId,
            idCard,
          } = this.form
          teacherApi
            .update({
              id,
              teacherName,
              sex,
              telphone,
              teacherNo,
              password,
              deptId,
              idCard,
            })
            .then(() => {
              _this.$message.success('修改成功')
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/teacher/list')
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
      await teacherApi.find(id).then(({ data }) => {
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