<template>
    <div class="container-fluid col-md-8 col-sm-10 offse-sm-1 mt-4 mb-3">
        <form class="form-control bg-dark text-white" @submit.prevent="submit()">
            <div class="mb-md-4 row mt-2">
                <label for="email" class="col-md-3 text-center col-sm-12 col-form-label">Email</label>
                <div class="col-md-9 col-sm-12">

                    <input id="email" v-model="credentials.email" type="text" class="form-control bg-secondary text-white mb-3" placeholder="Email">
                </div>
            </div>
            <div class="mb-4 row">
                <label for="password" class="col-md-3 text-center col-sm-12 col-form-label">password</label>
                <div class="col-md-9 col-sm-12">

                    <input id="password" v-model="credentials.password" type="password" class="form-control bg-secondary text-white mb-3" placeholder="Password">
                </div>
            </div>
            <div class="col-sm-8 offset-sm-2 d-grid gap-2">

                <button type="submit" class="btn btn-primary btn-blocked">
                    Enviar
                </button>
            </div>
        </form>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
    data(){
        return{
            credentials:{
                email:'',
                password:''
            }
        }
    },
    created(){
        this.loginVerify()
    },
    methods:{
        ...mapActions(['login']),
        submit(){
            console.log(this.credentials)
            this.login(this.credentials);
            
        },
        loginVerify(){
            if(this.user){
                this.$router.push('/')
            }
        }
    },
    computed:{
        ...mapState(['user']),
    }
})
</script>