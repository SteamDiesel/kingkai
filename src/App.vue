<template>
	<div class="bg-gray-900 min-h-screen text-gray-200 relative" id="app">
		
		<transition name="fade" mode="out-in">
		<router-view />
		</transition>

	</div>
</template>
<script>


import { mapState, mapActions } from "vuex";
export default {
	name: "Home",
	components: {
		
	},
	data(){
		return{
			
		}
	},
	computed:{
		...mapState(["data"])
	},
	methods:{
		...mapActions(["initialize"])
	},
	mounted(){
		this.initialize()
	}
};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
.splash-small {
	background-color: rgba(26, 32, 44, 0.85) !important;
	background-image: url('/img/lander-small.jpg');
	background-blend-mode: color; 
	background-repeat: no-repeat; 
	background-attachment: fixed; 
	background-position: center; 
	background-size: cover; 
}

</style>

