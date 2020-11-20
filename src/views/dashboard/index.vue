<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Hello 欢迎使用考试君管理员系统</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['name', 'roles']),
  },
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    text-align: center;
    line-height: 46px;
  }
}
</style>
