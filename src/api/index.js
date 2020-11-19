import instance from "./instance";

const apiList = {
  getFundGroupList(callback) {
    instance({
      url: "/data/fundGroup.json",
      method: "get",
    }).then((res) => {
      callback(res);
    });
  },
	getFundStatisticsList(callback) {
	  instance({
	    url: "/data/fundStatisticsList.json",
	    method: "get",
	  }).then((res) => {
	    callback(res);
	  });
	},
};

export default apiList;
