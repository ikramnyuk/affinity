<template>
    <div class="page">
		<PageHeader title="Releases" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			<DataTable :data="tableData" :headers="headers" label="LIVE RELEASES" pagination="Showing 1 to 3 of 3 entries" :pages="pages" :buttons="buttons" />
			<DataTable :data="tableData2" :headers="headers" label="PAST RELEASES" pagination="Showing 1 to 3 of 3 entries" :pages="pages" :buttons="buttons2" />
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import DataTable from '../../components/DataTable';

	import HomeIcon from '../../assets/releases-active.svg';

	import BrushIcon from '../../assets/brush.svg';
	import LockIcon from '../../assets/lock.svg';
	import RemoveIcon from '../../assets/remove.svg';

	import './style.scss';

	export default {
		name: 'Releases',
		components: { PageHeader, DataTable },
		data: () => {
			return {
				icon: HomeIcon,
				pages: [1],
				buttons: [
					{name: 'Edit Release', icon: BrushIcon, type: 'blue'},
					{name: 'Pull Stock', icon: LockIcon, type: 'yellow'},
					{name: 'Pull Stock', icon: RemoveIcon, type: 'red'}
				],
				buttons2: [
					{name: 'Edit Release', icon: BrushIcon, type: 'blue'}
				],
				headers: ['Release', 'Plan', 'Created', 'Link', 'Stock'],
				tableData: [
					{
						release: {
							label: 'Splash Page',
							sublabel: 'Cart hold enabled',
							sort: true
						},
						plan: {
							label: 'Renewal (6 months)',
							sublabel: '$30.00 USD / month',
							sort: true
						},
						created: {
							label: 'September 21st',
							sublabel: '16:22:31 PM',
							sort: true
						},
						link: {
							label: 'affinitydash.io/purchase=?recockmode100',
							sublabel: 'Click here to copy link',
							sort: true
						},
						stock: {
							label: '25/100 available',
							sublabel: 'STOCK LIVE',
							amount: 75,
							sort: false
						},
					},
					{
						release: {
							label: 'Splash Page',
							sublabel: 'Cart hold enabled',
							sort: true
						},
						plan: {
							label: 'Renewal (6 months)',
							sublabel: '$30.00 USD / month',
							sort: true
						},
						created: {
							label: 'September 21st',
							sublabel: '16:22:31 PM',
							sort: true
						},
						link: {
							label: 'affinitydash.io/purchase=?recockmode100',
							sublabel: 'Click here to copy link',
							sort: true
						},
						stock: {
							label: '25/100 available',
							sublabel: 'STOCK PULLED',
							amount: 50,
							sort: false
						},
					},
					{
						release: {
							label: 'First Come, First Served',
							sublabel: 'Cart hold enabled',
							sort: true
						},
						plan: {
							label: 'Renewal (6 months)',
							sublabel: '$30.00 USD / month',
							sort: true
						},
						created: {
							label: 'September 21st',
							sublabel: '16:22:31 PM',
							sort: true
						},
						link: {
							label: 'affinitydash.io/purchase=?recockmode100',
							sublabel: 'Click here to copy link',
							sort: true
						},
						stock: {
							label: '25/100 available',
							sublabel: 'STOCK LIVE',
							amount: 25,
							sort: false
						},
					}
				],
				tableData2: [
					{
						release: {
							label: 'Splash Page',
							sublabel: 'Cart hold enabled',
							sort: true
						},
						plan: {
							label: 'Renewal (6 months)',
							sublabel: '$30.00 USD / month',
							sort: true
						},
						created: {
							label: 'September 21st',
							sublabel: '16:22:31 PM',
							sort: true
						},
						link: {
							label: 'affinitydash.io/purchase=?recockmode100',
							sublabel: 'Click here to copy link',
							sort: true
						},
						stock: {
							label: '0/75 available',
							sublabel: 'SOLD OUT',
							amount: 99.99,
							sort: false
						},
					},
					{
						release: {
							label: 'Splash Page',
							sublabel: 'Cart hold enabled',
							sort: true
						},
						plan: {
							label: 'Renewal (6 months)',
							sublabel: '$30.00 USD / month',
							sort: true
						},
						created: {
							label: 'September 21st',
							sublabel: '16:22:31 PM',
							sort: true
						},
						link: {
							label: 'affinitydash.io/purchase=?recockmode100',
							sublabel: 'Click here to copy link',
							sort: true
						},
						stock: {
							label: '0/100 available',
							sublabel: 'SOLD OUT',
							amount: 99.99,
							sort: false
						},
					},
					{
						release: {
							label: 'First Come, First Served',
							sublabel: 'Cart hold enabled',
							sort: true
						},
						plan: {
							label: 'Renewal (6 months)',
							sublabel: '$30.00 USD / month',
							sort: true
						},
						created: {
							label: 'September 21st',
							sublabel: '16:22:31 PM',
							sort: true
						},
						link: {
							label: 'affinitydash.io/purchase=?recockmode100',
							sublabel: 'Click here to copy link',
							sort: true
						},
						stock: {
							label: '0/50 available',
							sublabel: 'SOLD OUT',
							amount: 99.99,
							sort: false
						},
					}
				]
			}
		}
	}
</script>