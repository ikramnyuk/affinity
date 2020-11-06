<template>
    <div class="page">
		<PageHeader title="Prices" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			<DataTable :data="tableData" :headers="headers" label="LIST OF PRICES" pagination="Showing 1 to 3 of 3 entries" :pages="pages" :buttons="buttons" :openModal="(key) => openModal(key)"/>
		</div>

		<NewPrice v-if="modal1" :close="() => {closeModal(0)}" />
		<EditPrice v-if="modal2" :close="() => {closeModal(1)}" />
		<ArchivePrice v-if="modal3" :close="() => {closeModal(2)}" />
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import DataTable from '../../components/DataTable';

	import HomeIcon from '../../assets/prices-active.svg';

	import BrushIcon from '../../assets/brush.svg';
	import LockIcon from '../../assets/lock.svg';
	import NewIcon from '../../assets/add.svg';
	import PricesPlaceholder from '../../assets/prices-placeholder.svg';

	import NewPrice from '../../components/ModalWindows/NewPrice';
	import EditPrice from '../../components/ModalWindows/EditPrice';
	import ArchivePrice from '../../components/ModalWindows/ArchivePrice';

	import './style.scss';

	export default {
		name: 'Prices',
		components: { PageHeader, DataTable, NewPrice, EditPrice, ArchivePrice },
		data: () => {
			return {
				icon: HomeIcon,
				modal1: false,
				modal2: false,
				modal3: false,
				pages: [1],
				buttons: [
					{name: 'New', icon: NewIcon, type: 'blue'},
					{name: 'Edit Price', icon: BrushIcon, type: 'blue'},
					{name: 'Archive Price', icon: LockIcon, type: 'yellow'}
				],
				headers: ['Plan', 'Details'],
				tableData: [
					{
						imaged: {
							label: 'Renewal (6 months)',
							sublabel: '$30.00 USD / month',
							image: PricesPlaceholder
						},
						details: {
							label: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis.',
							sublabel: 'prod_Hp7uNNX0hgLZeq',
							sort: true
						}
					},
					{
						imaged: {
							label: 'Renewal (12 months)',
							sublabel: '$25.00 USD / month',
							image: PricesPlaceholder
						},
						details: {
							label: 'Maecenas elementum sollicitudin magna in sollicitudin. In pellentesque quam enim.',
							sublabel: 'prod_Hp7uNNX0hgLZeq',
							sort: true
						}
					},
					{
						imaged: {
							label: 'Lifetime',
							sublabel: '$1,000.00 USD',
							image: PricesPlaceholder
						},
						details: {
							label: 'Suspendisse lobortis neque vitae dolor vehicula congue. Donec aliquam, nunc.',
							sublabel: 'prod_Hp7uNNX0hgLZeq',
							sort: true
						}
					},
				],
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