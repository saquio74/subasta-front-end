<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid ">
            <router-link class="btn btn-dark text-center text-secondary text-white" to="/">
                <h3>
                    
                    Subastas Online
                </h3>
            </router-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        
            
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav d-flex">
                    <ul class="nav nav-pills nav-fill">

                        <li class="nav-item">

                            <router-link class="nav-link text-white" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">

                            <router-link class="nav-link text-white" to="/about">Sobre Nosotros</router-link>
                        </li>
                        <li class="nav-item">

                            <router-link class="nav-link text-white" to="/">Subastar</router-link>
                        </li>
                        <li class="nav-item dropdown" v-if="!user">

                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Usuarios
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDropdownMenuLink">
                                <li><router-link to="/login" class="dropdown-item">Login</router-link></li>
                                <li><router-link to="/register" class="dropdown-item">Registrarse</router-link></li>
                                <li><router-link to="" class="dropdown-item">Contactenos</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown" v-else>
                            <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {{user.surname+' '+ user.name}}
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark " aria-labelledby="navbarDropdownMenuLink">
                                <li><router-link to="/login" class="dropdown-item">Mis datos</router-link></li>
                                <li><router-link to="" class="dropdown-item">Mis ofertas</router-link></li>
                                <li><a to="" class="dropdown-item" @click="logOut()">logout</a></li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default Vue.extend({
    methods:{
        ...mapActions(['logOut']),
    },
    computed:{
        ...mapState(['user'])
    }
    
})
</script>