<template>
	<div class="bg-gray-900 min-h-screen text-gray-200" id="app">
		<div class="flex flex-col items-center">
			<h1 class="text-4xl">Kai Jay Cowbell</h1>
			<h2>18/08/2003 - 25/06/2020</h2>
			
		</div>
		
		<router-view />

		<div class=" h-24 flex justify-around items-center" id="nav">
			<router-link to="/">Home</router-link> 
			<router-link to="/about">About</router-link>
		</div>
	</div>
</template>

<style></style>
