<template>
    <div class="page">
		<PageHeader title="Home" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			<Stats :stats="stats" />

			<DataTable :data="tableData" :headers="headers" label="LIVE RELEASES" pagination="Showing 1 to 3 of 3 entries" :pages="pages" :buttons="buttons2" :selectedBtns="selectedBtns2" :openModal="(key) => openModal(key)"/>
			<DataTable :data="tableData2" :headers="headers2" label="SERVICES" pagination="Showing 1 to 4 of 4 entries" :pages="pages" :buttons="buttons" :selectedBtns="selectedBtns" :openModal="(key) => openModal(key)"/>
		</div>

		<NewRelease v-if="modal1" :close="() => {closeModal(0)}" />
		<EditRelease v-if="modal2" :close="() => {closeModal(1)}" />
		<ReleaseStock v-if="modal3" :close="() => {closeModal(2)}" />
		<PullStock v-if="modal4" :close="() => {closeModal(3)}" />
		<NewService v-if="modal5" :close="() => {closeModal(4)}" />
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import Stats from '../../components/Stats';
	import DataTable from '../../components/DataTable';

	import HomeIcon from '../../assets/home-active.svg';

	import CompanyLogo1 from '../../assets/company-logo-1.svg';
	import CompanyLogo2 from '../../assets/company-logo-2.svg';
	import CompanyLogo3 from '../../assets/company-logo-3.svg';
	import CompanyLogo4 from '../../assets/company-logo-4.svg';

	import StatsIcons1 from '../../assets/gross.svg';
	import StatsIcons2 from '../../assets/diamond.svg';
	import StatsIcons3 from '../../assets/key.svg';

	import NewRelease from '../../components/ModalWindows/NewRelease';
	import EditRelease from '../../components/ModalWindows/EditRelease';
	import ReleaseStock from '../../components/ModalWindows/ReleaseStock';
	import PullStock from '../../components/ModalWindows/PullStock';
	import NewService from '../../components/ModalWindows/NewService';

	import BrushIcon from '../../assets/brush.svg';
	import LockIcon from '../../assets/lock.svg';
	import RemoveIcon from '../../assets/remove.svg';
	import NewIcon from '../../assets/add.svg';

	import './style.scss';

	export default {
		name: 'Home',
		components: { PageHeader, Stats, DataTable, NewRelease, EditRelease, ReleaseStock, PullStock, NewService },
		data: () => {
			return {
				modal1: false,
				modal2: false,
				modal3: false,
				modal4: false,
				modal5: false,
				icon: HomeIcon,
				pages: [1],
				buttons: [
					{name: 'New Service', icon: NewIcon, type: 'blue'}
				],
				buttons2: [
					{name: 'New', icon: NewIcon, type: 'blue'}
				],
				selectedBtns: [
					{name: 'Edit Service', icon: BrushIcon, type: 'blue'},
					{name: 'Delete', icon: RemoveIcon, type: 'red'}
				],
				selectedBtns2: [
					{name: 'Edit Release', icon: BrushIcon, type: 'blue'},
					{name: 'Pull Stock', icon: LockIcon, type: 'yellow'},
					{name: 'Delete', icon: RemoveIcon, type: 'red'}
				],
				stats: [
					{
						name: 'Gross volume',
						value: '$14,312.20',
						icon: StatsIcons1,
						compare: '57.13% this month',
						compareStatus: 1
					},
					{
						name: 'Lifetime memberships',
						value: '10',
						icon: StatsIcons2,
						compare: '10.00% this month',
						compareStatus: 1
					},
					{
						name: 'Renewal memberships',
						value: '439',
						icon: StatsIcons3,
						compare: '29.30% this month',
						compareStatus: 1
					}
				],
				headers: [{label: 'Release', width: '214px'}, {label: 'Plаn', width: '180px'}, {label: 'Created', width: '150px'}, {label: 'Link', width: '320px'}, {label: 'Stock', width: '200px'}],
				headers2: [{label: 'Product', width: '434px'}, {label: 'Type', width: '210xp'}, {label: 'Created', width: '210xp'}, {label: 'Renewal', width: '210xp'}],
				tableData: [
					{
						release: {
							label: 'Splash Page',
							sublabel: 'Cart hold enabled',
							sort: true
						},
						plаn: {
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
							sort: false,
						},
					},
					{
						release: {
							label: 'Splash Page',
							sublabel: 'Cart hold enabled',
							sort: true
						},
						plаn: {
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
						plаn: {
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
						product: {
							label: 'Affinity Dashboard (Professional)',
							sublabel: 'Dashboard provider',
							image: CompanyLogo1,
							sort: true
						},
						type: {
							label: '$250.00 USD / month',
							sublabel: 'Recurring payment',
							sort: true
						},
						created: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM',
							sort: true
						},
						renewal: {
							label: 'October 21st 2020',
							sublabel: '21 days left',
							sort: true
						},
					},
					{
						product: {
							label: 'Cilly GFX',
							sublabel: 'UI design for Autofill tool',
							image: CompanyLogo2,
							sort: true
						},
						type: {
							label: '$180.00 USD',
							sublabel: 'One-time payment',
							sort: true
						},
						created: {
							label: 'September 23rd 2020',
							sublabel: '10:14:11 PM',
							sort: true
						},
						renewal: {},
					},
					{
						product: {
							label: 'AXIOM Technologies',
							sublabel: 'Proxies and servers for free slots for members',
							image: CompanyLogo3,
							sort: true
						},
						type: {
							label: '$3,942.00 USD',
							sublabel: 'One-time payment',
							sort: true
						},
						created: {
							label: 'September 27th 2020',
							sublabel: '13:01:54 PM',
							sort: true
						},
						renewal: {},
					},
					{
						product: {
							label: 'GUAP Monitors',
							sublabel: 'Monitor services for Shopify and Footsites',
							image: CompanyLogo4,
							sort: true
						},
						type: {
							label: '$800.00 USD / month',
							sublabel: 'Recurring payment',
							sort: true
						},
						created: {
							label: 'September 27th 2020',
							sublabel: '13:01:54 PM',
							sort: true
						},
						renewal: {
							label: 'October 27th 2020',
							sublabel: '27 days left',
							sort: true
						},
					}
				]
			}
		},

		methods: {
			openModal(key){
				switch (key) {
					case 'New':
						this.modal1 = true;
						break;

					case 'Edit Release':
						this.modal2= true;
						break;

					case 'Delete':
						this.modal3 = true;
						break;

					case 'Pull Stock':
						this.modal4 = true;
						break;

					case 'New Service':
						this.modal5 = true;
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

					case 4:
						this.modal5 = false;
						break;
				}
			}
		}
	}
</script>