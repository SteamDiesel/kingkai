<template>
	<div class="py-1 md:px-1">
		<transition name="fade">
			<img
				class="rounded-md"
				:src="image"
				v-on:load="onLoaded"
				v-show="loaded"
			/>
			<!-- <img class="icon" v-bind:src="src" > -->
		</transition>
	</div>
</template>

<script>
export default {
	name: "ImageComponent",
	props: {
		image: String
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
