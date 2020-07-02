import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		uri: 'https://admin.kingkai.org/api/',
		// uri: 'http://media-api.test/api/',
		data: [],
		abouts: [],
		size: '',
		
	},
	mutations: {},
	actions: {
		initialize(){
			var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
			
			
			if(width < 640){
				this.size = 'small'
				
			}
			if(width > 640 && width <= 768){
				this.size = 'medium'
				
			}
			if(width > 768 && width <= 1024){
				this.size = 'large'
				
			}
			if(width > 1024){
				this.size = 'xl'
				
			}
			
			axios.post(this.state.uri +'data', {
				'size': this.size
			}).then(response => {
				this.state.data = response.data.posts
				this.state.abouts = response.data.abouts
			})
		}
	},
	modules: {}
});
