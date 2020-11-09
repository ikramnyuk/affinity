<template>
	<div class="top-bar">
		<div class="logo">
			<img src="../../assets/logo.svg" alt="logo">
		</div>

		<div class="right-side">
			<div class="actions">
				<div class="btn-icon blue-color">
					<img src="../../assets/shedule.svg" alt="shedule_icon">
				</div>

				<div class="btn-icon red-color">
					<img src="../../assets/notification.svg" alt="notification_icon">
				</div>
			</div>
			<div class="divider desktop-divider"></div>
			<div class="user">
				<div class="avatar">
					<img src="../../assets/avatar.svg" alt="avatar">
				</div>
				<div class="info">
					<div @click="openLogout" class="name" id="button">Cillysen#0001</div>
					<div class="role">Administrator</div>

					<div v-if="logout" class="user-options" id="popup">
						<span>Logout</span>
					</div>
				</div>
			</div>

			<div class="divider menu-divider"></div>

			<div class="menu" @click="openMenu">
				<img src="../../assets/menu.svg" alt="svg">
			</div>
		</div>
	</div>
</template>

<script>
	import './style.scss';

	export default {
		name: 'TopBar',
		components: {},

		data: () => {
			return {
				logout: false
			}
		},

		mounted(){
			let button = document.getElementById('button'),
				self = this;

			document.addEventListener('click', function(event) {
				let isClickButton = button.contains(event.target);

				if (!isClickButton) {
					self.logout = false;
				}
			});
		},

		methods: {
			openLogout(){
				this.logout = true;
			},

			openMenu(){
				this.$store.dispatch('Common/setMenu', true);
			}
		}
	}
</script>