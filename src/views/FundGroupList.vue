<template>
  <div>
    <el-table :data="tableData" style="width: 100%" height="250" border>
      <el-table-column prop="plan_name" label="组合名称"></el-table-column>
      <el-table-column prop="manager_name" label="主理人"></el-table-column>
      <el-table-column prop="yield" label="成立以来年化"></el-table-column>
      <el-table-column
        prop="manager_type"
        label="组合类型"
        :formatter="managerType"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "FundGroupList",
  data() {
    return {
      tableData: [
        {
          plan_code: "CSI1021",
          plan_name: "钉钉宝90天组合",
          yield: 2.82,
          yield_name: "成立以来年化",
          follow_num: 45537,
          manager_name: "银行螺丝钉",
          manager_img_url:
            "https://danjuan.aiganggu.com/o2020011578902753737.png",
          plan_tag: "存量资金一笔投入",
          manager_type: 0,
          type: 3,
          plan_rate: 0,
          min_buy_amount: 200,
          invest_desc: "固收增强",
          charge: true,
          link: false,
        },
        {
          plan_code: "CSI1054",
          plan_name: "股市药丸-固若金汤",
          yield: 0.3,
          yield_name: "成立以来年化",
          risk_coefficient: 8.44,
          follow_num: 2775,
          manager_name: "股市药丸",
          manager_img_url:
            "https://danjuan.aiganggu.com/o2020011577932560400.png",
          plan_tag: "存量资金一笔投入",
          manager_type: 0,
          type: 3,
          plan_rate: 0.03,
          min_buy_amount: 50,
          invest_desc: "货币增强",
          charge: true,
          link: false,
        },
      ],
    };
  },
  methods: {
    managerType(row, column, cellValue, index) {
      console.log(row, column, cellValue, index);
      switch (cellValue) {
        case 0:
          return "零钱管理";
        case 2:
          return "稳健理财";
        case 4:
          return "积极增值";
      }
    },
  },
};
</script>

<style>
</style>