<template>
	<div class="commont-wraper">
		<TopBar />
		
		<div class="page-wraper">
			<NavBar />

			<div class="page-container">
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
		components: { NavBar, TopBar }
	}
</script>
