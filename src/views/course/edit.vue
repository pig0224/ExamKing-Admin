<!-- classes create -->
<template>
  <div class="app-container">

    <el-form :model="form"
             ref="form"
             label-width="100px"
             v-loading="formLoading"
             :rules="rules">
      <el-form-item label="所属班级："
                    prop="deptId">
        <dept-class-select :dept-id.sync="form.deptId"
                           :classes-id.sync="classesId"
                           :dept-label="deptName"
                           :classes-label="classesName"></dept-class-select>
      </el-form-item>

      <el-form-item label="所属教师："
                    prop="teacherId">
        <teacher-select :teacher-id.sync="
                    form.teacherId"
                        :teacher-label="teacherName">
        </teacher-select>
      </el-form-item>

      <el-form-item label="课程名称："
                    prop="courseName">
        <el-input v-model="form.courseName"></el-input>
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
import courseApi from '@/api/course'
import DeptClassSelect from '@/components/DeptClassSelect'
import TeacherSelect from '@/components/TeacherSelect'
export default {
  components: { DeptClassSelect, TeacherSelect },
  data() {
    return {
      form: {
        id: 0,
        courseName: '',
        classesIds: [],
        deptId: 0,
        teacherId: 0,
      },
      deptName: '',
      classesName: '',
      teacherName: '',
      classesId: 0,
      formLoading: false,
      rules: {
        deptId: [
          { required: true, message: '请选择所属班级', trigger: 'blur' },
        ],
        teacherId: [
          { required: true, message: '请选择所属教师', trigger: 'blur' },
        ],
        courseName: [
          { required: true, message: '请输入课程名称', trigger: 'blur' },
        ],
      },
    }
  },
  computed: {},
  watch: {},
  methods: {
    async submitForm() {
      let _this = this
      this.$refs.form.validate((valid) => {
        if (valid) {
          _this.formLoading = true
          _this.form.classesIds.push(this.classesId)
          courseApi
            .update(_this.form)
            .then(() => {
              _this.$message.success('修改成功')
              _this.form.classesIds = []
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/course/list')
              })
            })
            .catch(() => {
              _this.form.classesIds = []
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
      await courseApi.find(id).then(({ data }) => {
        that.form = data
        that.classesId = data.classes[0].id
        that.form.classesIds = []
        that.deptName = data.classes[0].dept.deptName
        that.classesName = data.classes[0].classesName
        that.teacherName = data.teacher.teacherName
      })
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