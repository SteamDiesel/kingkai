<template>
	<div class="py-1 md:px-1 xl:w-full">
		<transition name="fade">
			<img
				class="rounded-md xl:w-full"
				:src="media.image"
				v-on:load="onLoaded"
				v-show="loaded"
			/>

			<!-- <img class="icon" v-bind:src="src" > -->
		</transition>
		<p class="text-xs xl:text-base">
			{{media.custom_properties.description}}
		</p>
	</div>
</template>

<script>
export default {
	name: "ImageComponent",
	props: {
		media: Object
	},
	data() {
		return {
			loaded: false
		};
	},
	methods: {
		onLoaded() {
			this.loaded = true;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
