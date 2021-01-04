<template>
    <div class="container-fluid col-md-8 col-sm-10 offse-sm-1 mt-4 mb-3">
        <form class="form-control bg-dark text-white" @submit.prevent="submit()">
            <div class="mb-md-4 row mt-2">
                <label for="Nombre" class="col-md-3 text-center col-sm-12 col-form-label">Nombre</label>
                <div class="col-md-9 col-sm-12">

                    <input id="Nombre" v-model="credentials.name" type="text" class="form-control bg-secondary text-white mb-3" placeholder="Email">
                </div>
            </div>
            <div class="mb-md-4 row mt-2">
                <label for="apellido" class="col-md-3 text-center col-sm-12 col-form-label">apellido</label>
                <div class="col-md-9 col-sm-12">

                    <input id="apellido" v-model="credentials.surname" type="text" class="form-control bg-secondary text-white mb-3" placeholder="Email">
                </div>
            </div>
            <div class="mb-md-4 row mt-2">
                <label for="Pais" class="col-md-3 text-center col-sm-12 col-form-label">Pais</label>
                <div class="col-md-9 col-sm-12">
                    <select name="pais" id="Pais" v-model="credentials.pais" class="form-select select bg-secondary text-white" @change="getProvincias()">
                        <option value="">Seleccione</option>
                        <option v-for="pais in paises" :key="pais" :value="pais">{{pais}}</option>
                    </select>
                </div>
            </div>
            <div class="mb-md-4 row mt-2" v-if="credentials.pais =='Argentina' ">
                <label for="Provincia" class="col-md-3 text-center col-sm-12 col-form-label">provincia</label>
                <div class="col-md-9 col-sm-12">
                    <select name="Provincia" id="Provincia" v-model="credentials.provincia" class="form-select select bg-secondary text-white" @change="callMunicipios()" >
                        <option value="">Seleccione</option>
                        <option v-for="provincia in provincias" :key="provincia.id" :value="provincia.nombre">{{provincia.nombre}}</option>
                    </select>
                </div>
            </div>
            <div class="mb-md-4 row mt-2" v-if="municipios && credentials.pais=='Argentina' ">
                <label for="municipio" class="col-md-3 text-center col-sm-12 col-form-label">Municipio </label>
                <div class="col-md-9 col-sm-12">
                    <select name="municipio" id="municipio" v-model="credentials.municipio" class="form-select select bg-secondary text-white" >
                        <option value="">Seleccione</option>
                        <option value="Ciudad Autónoma de Buenos Aires" v-if="credentials.provincia == 'Ciudad Autónoma de Buenos Aires'">Ciudad Autónoma de Buenos Aires</option>
                        <option value="Entre Ríos" v-if="credentials.provincia == 'Entre Ríos'">Entre Ríos</option>
                        <option value="Santa Cruz" v-if="credentials.provincia == 'Santa Cruz'">Santa Cruz</option>
                        <option value="Santiago del Estero" v-if="credentials.provincia == 'Santiago del Estero'">Santiago del Estero</option>

                        <option v-for="municipio in municipios" :key="municipio.id" :value="municipio.nombre">{{municipio.nombre}}</option>
                    </select>
                </div>
            </div>
            <div class="mb-md-4 row mt-2" v-if="municipios.lenght<0 && credentials.pais!='Argentina'">
                <label for="apellido" class="col-md-3 text-center col-sm-12 col-form-label">Ciudad o municipio</label>
                <div class="col-md-9 col-sm-12">

                    <input id="apellido" v-model="credentials.municipio" type="text" class="form-control bg-secondary text-white mb-3" placeholder="Email">
                </div>
            </div>
            <div class="mb-md-4 row mt-2" v-if="credentials.pais && credentials.pais!='Argentina'">
                <label for="apellido" class="col-md-3 text-center col-sm-12 col-form-label">Provincia o estado</label>
                <div class="col-md-9 col-sm-12">

                    <input id="apellido" v-model="credentials.provincia" type="text" class="form-control bg-secondary text-white mb-3" placeholder="Email">
                </div>
            </div>
            <div class="mb-md-4 row mt-2">
                <label for="tipo_persona" class="col-md-3 text-center col-sm-12 col-form-label">Tipo de Persona</label>
                <div class="col-md-9 col-sm-12">
                    <select id="tipo_persona" class="select form-select bg-secondary text-white" v-model="credentials.tipo_persona" >
                        <option value="">Seleccione</option>
                        <option value="fisica">Fisica</option>
                        <option value="Juridica">Juridica</option>
                    </select>
                </div>
            </div>
            <div class="mb-md-4 row mt-2">
                <label for="email" class="col-md-3 text-center col-sm-12 col-form-label">Email</label>
                <div class="col-md-9 col-sm-12">
                    <input id="email" v-model="credentials.email" type="text" class="form-control bg-secondary text-white mb-3" placeholder="Email">

                </div>
            </div>
            <div class="mb-md-4 row mt-2">
                <label for="email_confirm" class="col-md-3 text-center col-sm-12 col-form-label">Confirmar Email</label>
                <div class="col-md-9 col-sm-12">

                    <input id="email_confirm" v-model="credentials.email" type="text" class="form-control bg-secondary text-white mb-3" placeholder="Confirm Email">
                </div>
            </div>
            <div class="mb-4 row">
                <label for="password" class="col-md-3 text-center col-sm-12 col-form-label">contraseña</label>
                <div class="col-md-9 col-sm-12">

                    <input id="password" v-model="credentials.password" type="password" class="form-control bg-secondary text-white mb-3" placeholder="Password">
                </div>
            </div>
            <div class="mb-4 row">
                <label for="password_confirm" class="col-md-3 text-center col-sm-12 col-form-label">Confirmar contraseña</label>
                <div class="col-md-9 col-sm-12">

                    <input id="password_confirm" v-model="credentials.password" type="password" class="form-control bg-secondary text-white mb-3" placeholder="Confirm Password">
                </div>
            </div>
            <div class="col-sm-8 offset-sm-2 d-grid gap-2">

                <button type="submit" class="btn btn-primary btn-blocked">
                    Registrarse
                </button>
            </div>
            
        </form>
    </div>
</template>
<script >
import Vue from 'vue'
import axios from 'axios'
export default Vue.extend({
    data(){
        return{
            credentials:{
                name:'',
                surname:'',
                pais:'',
                provincia:'',
                municipio:'',
                tipo_persona:'',
                email:'',
                password:'',
                email_confirmation:'',
                password_confirmation:'',

            },
            paises:[],
            provincias:[],
            municipios:[]
        }
    },
    created(){
        this.getPaises()
    },
    methods:{
        async getPaises(){
            try {
                let response = await axios.get('https://restcountries.eu/rest/v2/all')
                let paises = response.data
                this.paises = paises.map((valor) =>{
                    return valor.name
                })
                
            } catch (error) {
                console.log(error)
            }
        },
        async getProvincias(){
            if(this.credentials.pais == 'Argentina'){

                try {
                    let response = await axios.get('https://apis.datos.gob.ar/georef/api/provincias?campos=id,nombre')
                    this.provincias = response.data.provincias;
                    this.provincias = this.provincias.sort((a,b)=>{
                        return a.id-b.id;
                    })
                } catch (error) {

                }
            }
        },
        async callMunicipios(){
            try {
                let provincia = this.provincias.find((valor)=>valor.nombre == this.credentials.provincia)
                console.log(provincia)
                let response  = await axios.get(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provincia.id}&campos=id,nombre&max=300`)
                this.municipios = response.data.municipios
                this.municipios = this.municipios.sort((a,b)=>a.id-b.id)
            } catch (error) {
                this.municipios = []
            }
        }
    }
    
})
</script>