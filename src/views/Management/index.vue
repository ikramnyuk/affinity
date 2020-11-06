<template>
    <div class="page">
		<PageHeader title="Management" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			<Stats :stats="stats" />

			<DataTable :data="tableData2" :headers="headers2" label="STAFF" pagination="Showing 1 to 10 of 11 entries" :pages="pages" :buttons="buttons" :openModal="(key) => openModal(key)" />
			<DataTable :data="tableData" :headers="headers" label="Product" pagination="Showing 1 to 4 of 4 entries" :pages="pages2" :buttons="buttons" :openModal="(key) => openModal(key)" />
			
		</div>

		<NewService v-if="modal1" :close="() => {closeModal(0)}" />
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import Stats from '../../components/Stats';
	import DataTable from '../../components/DataTable';

	import HomeIcon from '../../assets/managment-active.svg';

	import CompanyLogo1 from '../../assets/company-logo-1.svg';
	import CompanyLogo2 from '../../assets/company-logo-2.svg';
	import CompanyLogo3 from '../../assets/company-logo-3.svg';
	import CompanyLogo4 from '../../assets/company-logo-4.svg';

	import UserAvatar1 from '../../assets/user-avatar-4.svg';
	import UserAvatar2 from '../../assets/user-avatar-5.svg';
	import UserAvatar3 from '../../assets/user-avatar-6.svg';

	import StatsIcons1 from '../../assets/savings.svg';
	import StatsIcons2 from '../../assets/analytic-icon-13.svg';
	import StatsIcons3 from '../../assets/analytic-icon-14.svg';

	import BrushIcon from '../../assets/brush.svg';
	import RemoveIcon from '../../assets/remove.svg';

	import NewService from '../../components/ModalWindows/NewService';
	import NewIcon from '../../assets/add.svg';

	import './style.scss';

	export default {
		name: 'Management',
		components: { PageHeader, Stats, DataTable, NewService },
		data: () => {
			return {
				modal1: false,
				icon: HomeIcon,
				pages: [1],
				pages2: [1, 2],
				buttons: [
					{name: 'New', icon: NewIcon, type: 'blue'},
					{name: 'Edit Service', icon: BrushIcon, type: 'blue'},
					{name: 'Delete', icon: RemoveIcon, type: 'red'}
				],
				stats: [
					{
						name: 'Monthly expenses',
						value: '$7,129.57',
						icon: StatsIcons1,
						compare: '18.11% this month',
						compareStatus: 1
					},
					{
						name: 'Service providers',
						value: '4',
						icon: StatsIcons2,
						compare: '0.00% this month',
						compareStatus: 3
					},
					{
						name: 'Employees and staff',
						value: '11',
						icon: StatsIcons3,
						compare: '10.00% this month',
						compareStatus: 1
					}
				],
				headers: ['Employee', 'Type', 'Joined', 'Payment'],
				headers2: ['Product', 'Type', 'Created', 'Renewal'],
				tableData: [
					{
						imaged: {
							label: 'Jon Doe#0001',
							sublabel: 'Sitelist and raffle provider',
							image: UserAvatar1
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Admin#0069',
							sublabel: 'Administration, moderation and maintenance',
							image: UserAvatar2
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Noheadhunt#0001',
							sublabel: 'Administration, moderation and maintenance',
							image: UserAvatar3
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Jon Doe#0001',
							sublabel: 'Sitelist and raffle provider',
							image: UserAvatar1
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Admin#0069',
							sublabel: 'Administration, moderation and maintenance',
							image: UserAvatar2
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Noheadhunt#0001',
							sublabel: 'Administration, moderation and maintenance',
							image: UserAvatar3
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Jon Doe#0001',
							sublabel: 'Sitelist and raffle provider',
							image: UserAvatar1
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Admin#0069',
							sublabel: 'Administration, moderation and maintenance',
							image: UserAvatar2
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Noheadhunt#0001',
							sublabel: 'Administration, moderation and maintenance',
							image: UserAvatar3
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Jon Doe#0001',
							sublabel: 'Sitelist and raffle provider',
							image: UserAvatar1
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Admin#0069',
							sublabel: 'Administration, moderation and maintenance',
							image: UserAvatar2
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
					{
						imaged: {
							label: 'Noheadhunt#0001',
							sublabel: 'Administration, moderation and maintenance',
							image: UserAvatar3
						},
						customer: {
							label: '$150.00 USD / month',
							sublabel: 'Recurring payment'
						},
						plan: {
							label: 'September 21st 2020',
							sublabel: '16:22:31 PM'
						},
						license: {
							label: 'October 21st 2020',
							sublabel: '21 days left'
						}
					},
				],
				tableData2: [
					{
						imaged: {
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
						imaged: {
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
						imaged: {
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
						imaged: {
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