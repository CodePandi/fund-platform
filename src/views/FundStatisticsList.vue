<template>
	<div>
		<el-row>
		  <el-col :span="14">
				<el-checkbox-group v-model="checkList">
					<el-checkbox label="指数型"></el-checkbox>
					<el-checkbox label="股票型"></el-checkbox>
					<el-checkbox label="混合型"></el-checkbox>
					<el-checkbox label="债券型"></el-checkbox>
					<el-checkbox label="货币型"></el-checkbox>
					<el-checkbox label="QDII型"></el-checkbox>
				</el-checkbox-group>
			</el-col>
			<el-col :span="2">
				<el-button type="primary" size="mini" @click="filterTableList">搜索</el-button>
			</el-col>
		</el-row>
		
		<el-table :data="resultTableList" style="width: 100%" :height="height" border>
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
	import utils from "@/utils";

	export default {
		data() {
			return {
				tableData: [],
				height: 0,
				checkList: [],
				resultTableList: []
			};
		},
		methods: {
			// 筛选列表
			filterTableList() {
				const length = this.checkList.length;
				if(length === 0) {
					this.resultTableList = this.tableData;
				} else {
					this.resultTableList = this.tableData.filter(item => {
						return this.checkList.find(child => {
							return item.type_desc === child
						})
					})
				}
			}
		},
		created() {
			const _this = this;
			this.$http.getFundStatisticsList((res) => {

				let newArr = [];
				res.forEach(item => {
					let isInner = item.percent === 0 ? -2 : newArr.findIndex(child => {
						return child.fd_code === item.fd_code;
					})

					if (isInner > -1) {
						newArr[isInner].total++;
					} else if (isInner === -1) {
						newArr.push({ ...item,
							total: 1
						})
					}
				})
				_this.tableData = newArr;
				_this.resultTableList = newArr;
				console.log(newArr);
			});

			utils.tableResize(this, 'height', 100)

		},
	};
</script>

<style scoped>
	.el-row {
		margin-bottom: 20px;
	}
	.el-checkbox-group {
		padding: 5px 0 4px;
	}
</style>
