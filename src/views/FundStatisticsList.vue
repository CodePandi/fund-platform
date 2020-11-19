<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :height="height" border>
      <el-table-column type="index" width="80"></el-table-column>
      <el-table-column prop="fd_code" label="基金代码"></el-table-column>
      <el-table-column prop="fd_name" label="基金名称"></el-table-column>
      <el-table-column prop="type_desc" label="基金类型"></el-table-column>
      <el-table-column prop="total" label="组合选中次数" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script>
	import axios from "axios";
	
export default {
  data() {
    return {
      tableData: [],
			height: 0,
    };
  },
	created() {
	  const _this = this;
		this.$http.getFundStatisticsList((res) => {
		  
			console.log(res);
			let newArr = [];
			res.forEach(item => {
				let isInner = newArr.findIndex(child => {
					return child.fd_code === item.fd_code;
				})
				if(isInner === -1) {
					newArr.push({...item, total: 1})
				} else {
					newArr[isInner].total ++;
				}
			})
			_this.tableData = newArr;
			console.log(newArr);
			
			
		});
	
	  _this.height = document.documentElement.clientHeight - 40;
	  window.onresize = function () {
	    _this.height = document.documentElement.clientHeight - 40;
	  };
		
	},
};
</script>

<style>
</style>