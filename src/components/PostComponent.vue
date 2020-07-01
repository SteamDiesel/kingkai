<template>
	<div class="bg-gray-800 rounded-lg p-2 mx-2 mb-4 w-full">
		<div class=" max-w-3xl">
			<h2 class="text-2xl">
				{{ post.title }}
			</h2>
			<p v-html="post.body"></p>
		</div>
		<div class="flex flex-wrap justify-center">
			<ImageComponent
				v-for="(p, index) in post.media"
				:key="index"
				:media="p"
			/>
		</div>
	</div>
</template>

<script>
import ImageComponent from "@/components/ImageComponent.vue";
export default {
	name: "PostComponent",
	components: {
		ImageComponent
	},
	props: {
		post: Object
	},
	data() {
		return {};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
