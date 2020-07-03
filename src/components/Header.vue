<template>
	<div class="w-full flex justify-between items-center sticky top-0 header-fade h-16 -mb-16 px-2 sm:px-4 xl:px-20">
		
		<router-link to="/"><img src="/img/icons/Logo-sm.png" alt=""></router-link>
        <div class="w-full flex justify-end items-center" id="nav">
			<router-link class="mr-4 sm:mr-8" to="/posts">Memories</router-link>
			<router-link class="mr-4 sm:mr-8" to="/about">About</router-link>
		</div>
	</div>
</template>

<style>
    .header-fade {
        /* background-color: rgba(26, 33, 45, 1); For browsers that do not support gradients */
        background-image: linear-gradient(rgba(26, 33, 45, 1) 70%, rgba(26, 33, 45, 0.0) );
    }

</style>
