import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./api";

// 引入element-ui
// import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {
  Container,
  Aside,
  Main,
  Menu,
  MenuItem,
  Table,
  TableColumn,
  Button,
	Checkbox,
	CheckboxGroup,
	Row,
	Col
} from "element-ui";
Vue.use(Container)
  .use(Aside)
  .use(Main)
  .use(Menu)
  .use(MenuItem)
  .use(Table)
  .use(TableColumn)
  .use(Button)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Row)
  .use(Col)

Vue.config.productionTip = false;

Vue.prototype.$http = http;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
