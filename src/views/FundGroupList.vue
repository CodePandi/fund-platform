<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :height="height" border>
			<el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="plan_name" label="组合名称"></el-table-column>
      <el-table-column prop="manager_name" label="主理人"></el-table-column>
      <el-table-column
        prop="yield"
        label="成立以来年化"
        :formatter="sinceFound"
      ></el-table-column>
      <el-table-column
        prop="invest_desc"
        label="组合类型"
      ></el-table-column>
      <el-table-column label="操作">
        <el-button type="text">详情</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
import utils from "@/utils";

export default {
  name: "FundGroupList",
  data() {
    return {
      tableData: [],
      height: 0,
    };
  },
  methods: {
    managerType(row, column, cellValue, index) {
      // console.log(row, column, cellValue, index);
      switch (cellValue) {
        case 0:
          return "零钱管理";
        case 2:
          return "稳健理财";
        case 4:
          return "积极增值";
      }
    },
    sinceFound(row, colunm, cellValue, index) {
			if(cellValue) {
				return cellValue + "%";
			}
      return '--'
    },
  },
  created() {
    const _this = this;

    this.$http.getFundGroupList((res) => {
      _this.tableData = res;
    });

    utils.tableResize(this, 'height', 100)
  },
};
</script>

<style>
</style>