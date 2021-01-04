import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router";
axios.defaults.baseURL = "http://localhost:8000/";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user:null,
        error:''
    },
    mutations: {
        SET_USER(state,user){
            state.user = user
        },
        SET_ERRORS(state, error){
            state.error = error
        }
    },
    actions: {
        async login({ dispatch }, data) {
			try {
				let url = "api/auth/login";

				let response = await axios.post(url, data);
				let user = await response.data;
				localStorage.token = await user.access_token;
				//router.push({ name: "Home" });
				return dispatch("getUser");
			} catch (error) {
				console.log(error.response.data.message);
				return dispatch("setError", error.response);
			}
        },
        async logOut({commit}){
            let token = localStorage.getItem('token')
            try {
                let response = await axios.create({
                    headers:{
                        "Content-type": "application/json",
                        Authorization : `Bearer ${token}`
                    }
                }).post('api/logout')
                
                commit('SET_USER',null)
            } catch (error) {
                
            }
        },
		setError({ commit }, error) {
			commit("SET_ERRORS", error);
		},
        async getUser({commit}){
            let token = localStorage.getItem('token')
            let url = 'api/user'
            if(token!=''){
                try {
                    let response = await axios.create({
                        headers:{
                            "Content-Type": "application/json",
								Authorization: "Bearer " + token,
                        }
                    }).get(url);
                    router.push('/')
                    let user = response.data
                    commit("SET_USER",user);
                } catch (error) {
                    
                }
            }else{
                commit("SET_USER",null)
            }

        }
    },
    modules: {
    }
})
