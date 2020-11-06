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
			<div class="divider"></div>
			<div class="user">
				<div class="avatar">
					<img src="../../assets/avatar.svg" alt="avatar">
				</div>
				<div class="info">
					<div class="name">UserName#0001</div>
					<div class="role">Administrator</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import './style.scss';

	export default {
		name: 'TopBar',
		components: {}
	}
</script>