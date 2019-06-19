<template>
  <div class="execution">
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="never"style="color: blue">
          <span> （已结算）出油/升:</span><span style="margin-left: 5px;">{{ tableData2.cyahAll}}升</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" style="color: red">
          <span> （未结算）出油/升:</span><span style="margin-left: 5px;">{{ tableData2.cnahAll}}升</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" style="color: #4DBD73">
          <span>（已结算）进油/升:</span><span style="margin-left: 5px;">{{ tableData2.jyahAll}}升</span>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always"style="color: blue">
          <span> （已结算）出油总金额:</span><span style="margin-left: 5px;">{{ tableData2.cymoney}}</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" style="color: red">
          <span> （未结算）出油总金额:</span><span style="margin-left: 5px;">{{ tableData2.cnmoney}}</span>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never"style="color: #4DBD73">
          <span> （已结算）进油总金额:</span><span style="margin-left: 5px;">{{ tableData2.jymoney}}</span>
        </el-card>
      </el-col>
    </el-row>
    <basic-container>

      <avue-crud ref="crud"
                 :page="page"
                 :data="tableData"
                 :table-loading="tableLoading"
                 :option="tableOption"
                 @on-load="getList"
                 @row-update="handleUpdate"
                 @row-save="handleSave"
                 @search-change="searchChange"
                 @row-del="rowDel">
        <template slot="search">
          <el-form-item label="创建时间:" prop="createTime">
            <el-date-picker style="width: 250px" v-model="searchTime" type="daterange" format="yyyy-MM-dd" value-format="yyyy-MM-dd" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          </el-form-item>
          <el-button  style="margin-top:5px;"  type="primary"  @click="emptytChange" size="small">清空时间</el-button>
        </template>
        <template slot="menuLeft">
          <el-button type="primary"
                     @click="handleAdd"
                     size="small"
                     v-if="permissions.bill_add">新 增</el-button>
          <br /><br />
        </template>
        <template slot-scope="scope"
                  slot="menu">
          <el-button type="text"
                     v-if="permissions.bill_edit"
                     icon="el-icon-check"
                     size="mini"
                     plain
                     @click="handleEdit(scope.row,scope.index)">编辑
          </el-button>
          <el-button type="text"
                     v-if="permissions.bill_del"
                     icon="el-icon-delete"
                     size="mini"
                     plain
                     @click="handleDel(scope.row,scope.index)">删除
          </el-button>
        </template>
      </avue-crud>
    </basic-container>
  </div>
</template>

<script>
  import {addObj, delObj, fetchList, putObj} from '@/api/admin/bill'
  import {tableOption} from '@/const/crud/admin/bill'
  import {mapGetters} from 'vuex'
  import ElInput from "../../../../node_modules/element-ui/packages/input/src/input.vue";

  export default {
    components: {ElInput},
    name: 'dict',
    data() {
      return {
        searchForm:{
          time1:null,
          time2:null
        },
        searchTime:null,
        input: '',
        tableData: [],
        tableData2: [],
        page: {
          total: 0, // 总页数
          currentPage: 1, // 当前页数
          pageSize: 20 // 每页显示多少条
        },
        tableLoading: false,
        tableOption: tableOption
      }
    },
    created() {
    },
    mounted: function () {
    },
    computed: {
      ...mapGetters(['permissions'])
    },
    methods: {
      getList(page, params) {
        this.tableLoading = true
        fetchList(Object.assign({
          current: page.currentPage,
          size: page.pageSize
        }, params)).then(response => {
          this.tableData = response.data.data.records
          this.tableData2 = response.data.data2
          console.log(this.tableData2,"this.tableData2");
          this.page.total = response.data.data.total
          this.tableLoading = false
        })
      },
      /**
       * @title 打开新增窗口
       * @detail 调用crud的handleadd方法即可
       *
       **/
      handleAdd: function () {
        this.$refs.crud.rowAdd()
      },
      handleEdit(row, index) {
        this.$refs.crud.rowEdit(row, index)
      },
      handleDel(row, index) {
        this.$refs.crud.rowDel(row, index)
      },
      rowDel: function (row, index) {
        var _this = this
        this.$confirm('是否确认删除?', '警告', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          return delObj(row)
        }).then(() => {
          this.getList(this.page)
          _this.$message({
            showClose: true,
            message: '删除成功',
            type: 'success'
          })
        }).catch(function () {
        })
      },
      /**
       * @title 数据更新
       * @param row 为当前的数据
       * @param index 为当前更新数据的行数
       * @param done 为表单关闭函数
       *
       **/
      handleUpdate: function (row, index, done) {
        putObj(row).then(() => {
          this.tableData.splice(index, 1, Object.assign({}, row))
          this.$message({
            showClose: true,
            message: '修改成功',
            type: 'success'
          })
          this.getList(this.page)
          done()
        })
      },
      /**
       * @title 数据添加
       * @param row 为当前的数据
       * @param done 为表单关闭函数
       *
       **/
      handleSave: function (row, done) {
        addObj(row).then(data => {
          this.tableData.push(Object.assign({}, row))
          this.$message({
            showClose: true,
            message: '添加成功',
            type: 'success'
          })
          this.getList(this.page)
          done()
        })
      },
      searchChange(params) {

        if(this.searchTime!=null){
          this.searchForm.time1=this.searchTime[0];
          this.searchForm.time2=this.searchTime[1];
        }
        Object.assign(params, this.searchForm)
        this.getList(this.page, params)
      },
      emptytChange(){
        this.searchTime=null;
        this.searchForm.time1=null;
        this.searchForm.time2=null;
      },

    }
  }
</script>

<style lang="scss" scoped>
</style>

