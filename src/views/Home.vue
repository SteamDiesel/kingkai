<template>
	<div>
		<Header />
		<div class="min-h-screen flex justify-start items-center splash-small">
			<div class="text-white px-6 md:mx-auto" style="">
				<h3 class="">In loving memory of</h3>
				<h1 class="text-4xl sm:text-6xl mb-3">Kai Jay</h1>
				<p class="mb-3">18/08/2003 - 25/06/2020</p>
				<p class="mb-3 md:text-lg">Our beloved son, brother, grandson, nephew, uncle, cousin & friend</p>
				<p class="mb-3 md:text-lg">Forever in our hearts</p>
				<p class="mb-3 md:text-lg">Near & never far</p>
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
		...mapState(["data"])
	}
};
</script>
<style scoped>
p {
	font-family: "Nothing You Could Do", cursive;
}
</style>>


