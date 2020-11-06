<template>
    <div class="page">
		<PageHeader title="Releases" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			<DataTable :data="tableData" :headers="headers" label="LIVE RELEASES" pagination="Showing 1 to 3 of 3 entries" :pages="pages" :buttons="buttons" :openModal="(key) => openModal(key)" />
			<DataTable :data="tableData2" :headers="headers" label="PAST RELEASES" pagination="Showing 1 to 3 of 3 entries" :pages="pages" :buttons="buttons2" :openModal="(key) => openModal(key)" />
		</div>

		<NewRelease v-if="modal1" :close="() => {closeModal(0)}" />
		<EditRelease v-if="modal2" :close="() => {closeModal(1)}" />
		<ReleaseStock v-if="modal3" :close="() => {closeModal(2)}" />
		<PullStock v-if="modal4" :close="() => {closeModal(3)}" />
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import DataTable from '../../components/DataTable';

	import HomeIcon from '../../assets/releases-active.svg';

	import BrushIcon from '../../assets/brush.svg';
	import LockIcon from '../../assets/lock.svg';
	import RemoveIcon from '../../assets/remove.svg';

	import NewRelease from '../../components/ModalWindows/NewRelease';
	import EditRelease from '../../components/ModalWindows/EditRelease';
	import ReleaseStock from '../../components/ModalWindows/ReleaseStock';
	import PullStock from '../../components/ModalWindows/PullStock';

	import NewIcon from '../../assets/add.svg';

	import './style.scss';

	export default {
		name: 'Releases',
		components: { PageHeader, DataTable, ReleaseStock, EditRelease, NewRelease, PullStock },
		data: () => {
			return {
				modal1: false,
				modal2: false,
				modal3: false,
				modal4: false,
				icon: HomeIcon,
				pages: [1],
				buttons: [
					{name: 'New', icon: NewIcon, type: 'blue'},
					{name: 'Edit Release', icon: BrushIcon, type: 'blue'},
					{name: 'Release Stock', icon: LockIcon, type: 'yellow'},
					{name: 'Delete', icon: RemoveIcon, type: 'red'}
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
		},

		methods: {
			openModal(key){
				switch (key) {
					case 0:
						this.modal1 = true;
						break;

					case 1:
						this.modal2= true;
						break;

					case 2:
						this.modal3 = true;
						break;

					case 3:
						this.modal4 = true;
						break;
				}
			},

			closeModal(key){
				switch (key) {
					case 0:
						this.modal1 = false;
						break;

					case 1:
						this.modal2= false;
						break;

					case 2:
						this.modal3 = false;
						break;

					case 3:
						this.modal4 = false;
						break;
				}
			}
		}
	}
</script>