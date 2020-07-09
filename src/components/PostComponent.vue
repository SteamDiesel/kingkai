<template>
	<div class="bg-gray-800 rounded-lg  mx-2 sm:mx-4 xl:mx-20 mb-4 sm:mb-8 xl:mb-16 w-full py-2 px-2 sm:py-4 sm:px-4">
		<div class=" max-w-3xl xl:mb-4">
			<h2 v-if="post.title" class="text-2xl xl:mb-2">
				{{ post.title }}
			</h2>
			<p v-if="post.body" v-html="post.body"></p>
			
			<p class="text-sm" v-if="post.author">- {{post.author}}</p>
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
