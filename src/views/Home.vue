<template>
  	<div class="home">

		  {{user}}
  	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';


@Component({
	components: {
		
	},
	computed:{
		...mapState(['user'])
	}
})
export default class Home extends Vue {}
</script>

