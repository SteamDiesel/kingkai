<template>
<div>
	<Header/>
	<div class="bg-gray-900 pt-16">
		<div class="mx-auto flex flex-wrap justify-start items-center">
			<PostComponent v-for="(post, index) in data" :key="index" :post="post"></PostComponent>

		</div>
		
	</div>
</div>
	
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import PostComponent from "@/components/PostComponent.vue";
import { mapState, mapActions } from "vuex";
export default {
	name: "Home",
	components: {
		PostComponent,
		Header
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

</style>
