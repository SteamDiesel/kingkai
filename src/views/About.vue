<template>
	<div>
		<Header />
		<div class="p-4 splash-small min-h-screen pt-16 flex items-center">
			<div class="lg:mx-20">
				<transition name="fade">
					<div v-if="display" v-html="display"></div>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import { mapState } from "vuex";
export default {
	name: "About",
	components: {
		Header
	},
	data() {
		return {
			
		};
	},
	methods: {},
	computed: {
		display() {
			var str = "";
			this.abouts.forEach(about => {
				var res = str.concat(about.body);
				str = res;
			});
			var start_array = str.split("<");
			
			var array = []

			start_array.forEach(item => {
				if(item.startsWith("img ")) {
					array.push(item)
				}
				if(item.startsWith("br>")) {
					array.push(item)
				}
				if(item.startsWith("p>")) {
					array.push(item)
				}
				if(item.startsWith("/p>")) {
					array.push(item)
				}
				if(item.startsWith("h1")) {
					var h1 = item.replace("h1>", "h1 class='text-2xl xl:mb-2'>")
					array.push(h1)
				}
				if(item.startsWith("/h1>")) {
					array.push(item)
				}
				if(item.startsWith("div>")) {
					array.push(item)
				}
				if(item.startsWith("/div>")) {
					array.push(item)
				}
			})
			array.unshift("")
			var washed_html = array.join("<")
			return washed_html;
		},

		...mapState(["data", "abouts"])
	}
};
</script>
<style scoped>

</style>
