<template>
	<div class="commont-wraper">
		<TopBar />
		
		<div class="page-wraper">
			<div @click="openMenu" v-if="menu" class="menu-opened"></div>
			<NavBar />

			<div :class="menu ? 'page-container opened' : 'page-container'">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	import NavBar from '../components/NavBar';
	import TopBar from '../components/TopBar';

	export default {
		name: 'Layout',
		components: { NavBar, TopBar },

		computed: {
			menu(){
				return this.$store.getters['Common/getMenu'];
			},
		},

		methods: {
			openMenu(){
				this.$store.dispatch('Common/setMenu', false);
			}
		}
	}
</script>
