<template>
	<nav @click="close()" :class="menu ? 'navbar opened' : 'navbar'" v-if="count">
		<div class="section">
			<h2 class="section-label">MENU</h2>
			<div class="nav-list">
				<router-link to="/home" class="nav-item">
					<img v-if="this.$router.currentRoute.path === '/home'" src="../../assets/home-active.svg" alt="settings">
					<img v-else src="../../assets/home.svg" alt="home">
					<span>Home</span>
				</router-link>
				<router-link to="/licenses" class="nav-item">
					<img v-if="this.$router.currentRoute.path === '/licenses'" src="../../assets/licenses-active.svg" alt="licenses">
					<img v-else src="../../assets/licenses.svg" alt="licenses">
					<span>Licenses</span>
				</router-link>
				<router-link to="/releases" class="nav-item">
					<img v-if="this.$router.currentRoute.path === '/releases'" src="../../assets/releases-active.svg" alt="releases">
					<img v-else src="../../assets/releases.svg" alt="releases">
					<span>Releases</span>
				</router-link>
				<router-link to="/prices" class="nav-item">
					<img v-if="this.$router.currentRoute.path === '/prices'" src="../../assets/prices-active.svg" alt="prices">
					<img v-else src="../../assets/prices.svg" alt="prices">			
					<span>Prices</span>
				</router-link>
				<router-link to="/analytics" class="nav-item">
					<img v-if="this.$router.currentRoute.path === '/analytics'" src="../../assets/analityc-active.svg" alt="analityc">
					<img v-else src="../../assets/analityc.svg" alt="analityc">
					<span>Analytics</span>
				</router-link>
			</div>
		</div>

		<div class="section">
			<h2 class="section-label">TOOLS</h2>
			<div class="nav-list">
				<router-link to="/management" class="nav-item">
					<img v-if="this.$router.currentRoute.path === '/management'" src="../../assets/managment-active.svg" alt="managment">
					<img v-else src="../../assets/managment.svg" alt="managment">
					<span>Management</span>
				</router-link>
				<span to="/calendar" class="nav-item disabled">
					<img src="../../assets/calendar.svg" alt="calendar">
					<span>Calendar</span>
				</span>
			</div>
		</div>

		<div class="section">
			<h2 class="section-label">OTHER</h2>
			<div class="nav-list">
				<router-link to="/updates" class="nav-item">
					<img v-if="this.$router.currentRoute.path === '/updates'" src="../../assets/updates-active.svg" alt="updates">
					<img v-else src="../../assets/updates.svg" alt="updates">
					<span>Updates</span>
				</router-link>
				<router-link to="/settings" class="nav-item">
					<img v-if="this.$router.currentRoute.path === '/settings'" src="../../assets/settings-active.svg" alt="settings">
					<img v-else src="../../assets/settings.svg" alt="settings">
					<span>Settings</span>
				</router-link>
			</div>
		</div>
	</nav>
</template>

<script>
	import './style.scss';

	export default {
		name: 'NavBar',
		components: {},
		data: () => {
			return {
				count: 1
			}
		},

		computed: {
			menu(){
				return this.$store.getters['Common/getMenu'];
			},
		},

		methods: {
			close(){
				this.count++;
				this.$store.dispatch('Common/setMenu', false);
			}
		}
	}
</script>