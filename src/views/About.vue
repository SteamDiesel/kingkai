<template>
<div>
	<Header/>
	<div class="p-4 splash-small min-h-screen pt-16 flex items-center">
		<div class="lg:ml-20">
			<h1 class="text-2xl">About KingKai</h1>
			<p class="max-w-3xl">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
			</p>
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
