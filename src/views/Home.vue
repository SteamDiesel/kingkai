<template>
<div>
	<Header/>
	<div
		class="min-h-screen flex justify-center items-center splash-small"
	>
	
		<div class="text-white" style="">
			<h3 class="">In loving memory of</h3>
			<h1 class="text-4xl sm:text-6xl mb-12">Kai Jay Cawdell</h1>
			
		</div>
	</div>
</div>
	
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { mapState } from "vuex";
export default {
	name: "Home",
	components: {
		Header
	},
	data() {
		return {};
	},
	computed: {
	
		...mapState(["data", "small", "medium", "large", "xl"])
	}
};
</script>

