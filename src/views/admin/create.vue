<!-- admin create -->
<template>
  <div class="app-container">

    <el-form :model="form"
             ref="form"
             label-width="100px"
             v-loading="formLoading"
             :rules="rules">
      <el-form-item label="账号："
                    prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码："
                    prop="password">
        <el-input v-model="form.password"
                  type="password"></el-input>
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
import adminApi from '@/api/admin'

export default {
  components: {},
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      formLoading: false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
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
          this.formLoading = true
          adminApi
            .create(this.form)
            .then(() => {
              _this.$message.success('新增成功')
              _this.delCurrentView(_this).then(() => {
                _this.$router.push('/admin/list')
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