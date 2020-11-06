<template>
    <div class="page">
		<PageHeader title="Updates" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content stepper-wrap">
			<Stepper label="UPDATES" pages="10" :data="stepper" />

			<Stepper label="ROADMAP" :data="stepper2" />
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import Stepper from '../../components/Stepper';

	import HomeIcon from '../../assets/updates-active.svg';

	import './style.scss';

	export default {
		name: 'Updates',
		components: { PageHeader, Stepper },
		data: () => {
			return {
				icon: HomeIcon,
				stepper: [
					{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'CUSTOMER DASHBOARD',
								class: 'green',
								info: 'Added toast notifications and removed ugly alerts'
							}
						]
					},
					{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'API',
								class: 'yellow',
								info: 'Bug fixes'
							},
							{
								title: 'ADMIN PANEL',
								class: 'blue',
								info: 'Added REST API for authentication of software'
							}
						]
					},
					{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'API',
								class: 'yellow',
								info: 'Added REST API for authentication of software'
							}
						]
					},
										{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'CUSTOMER DASHBOARD',
								class: 'green',
								info: 'Added toast notifications and removed ugly alerts'
							}
						]
					},
					{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'API',
								class: 'yellow',
								info: 'Bug fixes'
							},
							{
								title: 'ADMIN PANEL',
								class: 'blue',
								info: 'Added REST API for authentication of software'
							}
						]
					},
					{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'API',
								class: 'yellow',
								info: 'Added REST API for authentication of software'
							}
						]
					},
										{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'CUSTOMER DASHBOARD',
								class: 'green',
								info: 'Added toast notifications and removed ugly alerts'
							}
						]
					},
					{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'API',
								class: 'yellow',
								info: 'Bug fixes'
							},
							{
								title: 'ADMIN PANEL',
								class: 'blue',
								info: 'Added REST API for authentication of software'
							}
						]
					},
					{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'API',
								class: 'yellow',
								info: 'Added REST API for authentication of software'
							}
						]
					},
					{
						title: 'Version 1.11.1',
						subtitle: 'Sep 17ᵗʰ',
						itemText: '',
						items: [
							{
								title: 'API',
								class: 'yellow',
								info: 'Added REST API for authentication of software'
							}
						]
					},
				],

				stepper2: [
					{
						title: 'ROADMAP STEP 1',
						subtitle: 'STEP #1',
						itemText: 'Curabitur pellentesque nunc quis rutrum ullamcorper. Nulla in lectus in tortor ultricies venenatis. Praesent vitae tincidunt felis. Aliquam quis tincidunt.',
					},
					{
						title: 'ROADMAP STEP 1',
						subtitle: 'STEP #1',
						itemText: 'Vivamus lobortis suscipit massa, at consectetur tortor efficitur ac. Proin nec pretium eros. Cras eu dapibus lacus. Suspendisse dapibus sem.',
					},
					{
						title: 'ROADMAP STEP 1',
						subtitle: 'STEP #1',
						itemText: 'Morbi luctus, lectus non laoreet cursus, nibh magna sollicitudin mi, non pulvinar tortor massa quis massa. Class aptent taciti sociosqu ad litora torquent per conubia.',
					},
					{
						title: 'ROADMAP STEP 1',
						subtitle: 'STEP #1',
						itemText: 'Curabitur eget odio aliquam.',
					},
					{
						title: 'ROADMAP STEP 1',
						subtitle: 'STEP #1',
						itemText: 'Vestibulum iaculis pharetra dui quis vehicula. Proin aliquam ex sapien, et fermentum.',
					}
				]
			}
		}
	}
</script>