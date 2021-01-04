<template>
    <nav class="footer navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
        <div class="container-fluid ">
           footer
           <br>
           footer
           <br>
           footer
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