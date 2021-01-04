<template>
	<div id="app" class="cover-container bg-secondary text-white">
		<div class="mb-2">
			<headerComponent />
		</div>
		<router-view/>
		<footerComponent />

	</div>
</template>
<script lang="ts">
import Vue from 'vue'
import headerComponent from './views/Header.vue'
import footerComponent from './views/Footer.vue'
export default Vue.extend({
	components:{
		headerComponent,
		footerComponent
	}
})
</script>
<style lang="sass">
	$primary : #B60A7A
	$secondary : #707070
	$success : #00FF59
	$warning : #E4FF27
	$danger : #FF2020


	@import "bootstrap/scss/bootstrap.scss"
</style>
