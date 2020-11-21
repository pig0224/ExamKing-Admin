<template>
  <div class="app-container">

    <el-table v-loading="listLoading"
              :data="items"
              border
              fit
              highlight-current-row
              style="width: 100%">
      <el-table-column name="examName"
                       label="考试名称"
                       width="200" />
      <el-table-column name="stuNo"
                       label="学号"
                       width="120">
        <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
      </el-table-column>
      <el-table-column prop="stuName"
                       label="姓名"
                       width="120" />
      <el-table-column prop="deptName"
                       label="系别"
                       width="120" />
      <el-table-column prop="classesName"
                       label="系别"
                       width="120" />
      <el-table-column prop="chengji"
                       label="总成绩" />
      <el-table-column prop="danxuan"
                       label="单选题成绩" />
      <el-table-column prop="duoxuan"
                       label="多选题成绩" />
      <el-table-column prop="shifei"
                       label="是非题成绩" />

      <el-table-column width="220px"
                       label="操作"
                       align="center">
        <template slot-scope="{row}">
          <!-- <router-link :to="{path:'/user/admin/edit', query:{id:row.id}}"
                       class="link-left">
            <el-button size="mini">编辑</el-button>
          </router-link> -->
          <el-button size="mini"
                     type="danger"
                     @click="deleteUser(row)"
                     class="link-left">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination v-show="totalCount>0"
                :total="totalCount"
                :page.sync="pageIndex"
                :limit.sync="pageSize"
                @pagination="search" />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
  data() {
    return {
      listLoading: false,
      pageIndex: 1,
      pageSize: 10,
      totalCount: 0,
      items: [],
    }
  },
  created() {
    this.search()
  },
  methods: {
    handleSizeChange(e) {
      console.log(e)
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
  },
}
</script>
