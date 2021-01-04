import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import  "bootstrap"
let token = localStorage.getItem("token");

if (token) {
	store.dispatch("getUser");
}

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
