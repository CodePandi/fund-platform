import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {
  Container,
  Aside,
  Main,
  Menu,
  MenuItem,
  Table,
  TableColumn,
} from "element-ui";
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Table);
Vue.use(TableColumn);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
