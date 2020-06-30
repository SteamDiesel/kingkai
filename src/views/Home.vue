<template>
	<div class="bg-gray-900">
		<div class="mx-auto flex flex-wrap justify-start items-center">
			<PostComponent v-for="(post, index) in data" :key="index" :post="post"></PostComponent>

		</div>
		
	</div>
</template>

<script>
// @ is an alias to /src
import PostComponent from "@/components/PostComponent.vue";
import { mapState, mapActions } from "vuex";
export default {
	name: "Home",
	components: {
		PostComponent
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
