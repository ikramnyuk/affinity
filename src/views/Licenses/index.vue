<template>
    <div class="page without-label">
		<PageHeader title="Licences" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			<DataTable :data="tableData" :headers="headers" label="" pagination="Showing 1 to 10 of 57 entries" :pages="pages" :search="true" :buttons="buttons" :selectedBtns="selectedBtns" :openModal="(key) => openModal(key)"/>
		</div>

		<NewLicense v-if="modal1" :close="() => {closeModal(0)}" />
		<UnbindLicense v-if="modal2" :close="() => {closeModal(1)}" />
		<RevokeLicense v-if="modal3" :close="() => {closeModal(2)}" />
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import DataTable from '../../components/DataTable';

	import HomeIcon from '../../assets/licenses-active.svg';

	import UserAvatar1 from '../../assets/user-avatar-1.svg';
	import UserAvatar2 from '../../assets/user-avatar-2.svg';
	import UserAvatar3 from '../../assets/user-avatar-3.svg';
	import UserAvatar4 from '../../assets/avatar.svg';

	import ListIcon from '../../assets/list.svg';
	import ToolsIcon from '../../assets/tools.svg';
	import KeyIcon from '../../assets/single-key.svg';
	import RemoveIcon from '../../assets/remove.svg';

	import NewLicense from '../../components/ModalWindows/NewLicense';
	import UnbindLicense from '../../components/ModalWindows/UnbindLicense';
	import RevokeLicense from '../../components/ModalWindows/RevokeLicense';
	import NewIcon from '../../assets/add.svg';
	import ExportIcon from '../../assets/export.svg';

	import './style.scss';

	export default {
		name: 'Licenses',
		components: { PageHeader, DataTable, NewLicense, UnbindLicense, RevokeLicense },
		data: () => {
			return {
				icon: HomeIcon,
				pages: [1, 2, 3, 4, 5, 6],
				modal1: false,
				modal2: false,
				modal3: false,
				modalBtns: [],
				buttons: [
					{name: 'New', icon: NewIcon, type: 'blue'},
					{name: 'Export', icon: ExportIcon, type: 'blue'},
				],

				selectedBtns: [
					{name: 'Send Receipt', icon: ListIcon, type: 'blue'},
					{name: 'Manage Customer', icon: ToolsIcon, type: 'blue'},
					{name: 'Unbind', icon: KeyIcon, type: 'brown'},
					{name: 'Revoke', icon: RemoveIcon, type: 'red'}
				],

				headers: [{label: 'Member', width: '225px'}, {label: 'Customer', width: '220px'}, {label: 'Plаn', width: '170px'}, {label: 'License', width: '270px'}, {label: 'Status', width: '180px'}],
				tableData: [
					{
						member: {
							label: 'Cillysen#0001',
							sublabel: '229733461454225408',
							image: UserAvatar4
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'No renewal needed',
							sublabel: 'LIFETIME'
						},
					},
					{
						member: {
							label: 'Will Smith#9999',
							sublabel: '229733461454225408',
							image: UserAvatar1
						},
						customer: {
							label: 'randomemail@domain.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Renewal',
							sublabel: '$30.00 USD / month'
						},
						license: {
							label: '7BA14AC46DA1EBE68D5C955FD6AFB',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Payment declined',
							sublabel: 'CANCEllED'
						},
					},
					{
						member: {
							label: 'Jennifer L#0001',
							sublabel: '229733461454225408',
							image: UserAvatar2
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Cancelling in 2 days',
							sublabel: 'Cancelling'
						},
					},
					{
						member: {
							label: 'Cillysen#0001',
							sublabel: '229733461454225408',
							image: UserAvatar3
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Renewing in 5 days',
							sublabel: 'ACTIVE'
						},
					},
					{
						member: {
							label: 'Cillysen#0001',
							sublabel: '229733461454225408',
							image: UserAvatar4
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'No renewal needed',
							sublabel: 'LIFETIME'
						},
					},
					{
						member: {
							label: 'Will Smith#9999',
							sublabel: '229733461454225408',
							image: UserAvatar1
						},
						customer: {
							label: 'randomemail@domain.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Renewal',
							sublabel: '$30.00 USD / month'
						},
						license: {
							label: '7BA14AC46DA1EBE68D5C955FD6AFB',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Payment declined',
							sublabel: 'CANCEllED'
						},
					},
					{
						member: {
							label: 'Jennifer L#0001',
							sublabel: '229733461454225408',
							image: UserAvatar2
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Cancelling in 2 days',
							sublabel: 'Cancelling'
						},
					},
					{
						member: {
							label: 'Cillysen#0001',
							sublabel: '229733461454225408',
							image: UserAvatar3
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Renewing in 5 days',
							sublabel: 'ACTIVE'
						},
					},
					{
						member: {
							label: 'Cillysen#0001',
							sublabel: '229733461454225408',
							image: UserAvatar4
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'No renewal needed',
							sublabel: 'LIFETIME'
						},
					},
					{
						member: {
							label: 'Will Smith#9999',
							sublabel: '229733461454225408',
							image: UserAvatar1
						},
						customer: {
							label: 'randomemail@domain.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Renewal',
							sublabel: '$30.00 USD / month'
						},
						license: {
							label: '7BA14AC46DA1EBE68D5C955FD6AFB',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Payment declined',
							sublabel: 'CANCEllED'
						},
					},
					{
						member: {
							label: 'Jennifer L#0001',
							sublabel: '229733461454225408',
							image: UserAvatar2
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Cancelling in 2 days',
							sublabel: 'Cancelling'
						},
					},
					{
						member: {
							label: 'Cillysen#0001',
							sublabel: '229733461454225408',
							image: UserAvatar3
						},
						customer: {
							label: 'hey@cillysen.com',
							sublabel: 'cus_DAGonfokasfoqwt999'
						},
						plаn: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD'
						},
						license: {
							label: '5B3ECBBD4A3B27A649D1FDEF835BD',
							sublabel: 'Created Sep 27, 3:20 AM'
						},
						status: {
							label: 'Renewing in 5 days',
							sublabel: 'ACTIVE'
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

					case 'Unbind':
						this.modal2= true;
						break;

					case 'Revoke':
						this.modal3 = true;
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
				}
			}
		}
	}
</script>