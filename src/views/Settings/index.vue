<template>
    <div class="page">
		<PageHeader title="Settings" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';

	import HomeIcon from '../../assets/settings-active.svg';

	import './style.scss';

	export default {
		name: 'Settings',
		components: { PageHeader },
		data: () => {
			return {
				icon: HomeIcon,
			}
		}
	}
</script>