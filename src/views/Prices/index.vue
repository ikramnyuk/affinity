<template>
    <div class="page">
		<PageHeader title="Prices" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			<DataTable :data="tableData" :headers="headers" label="LIST OF PRICES" pagination="Showing 1 to 3 of 3 entries" :pages="pages" :buttons="buttons" />
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import DataTable from '../../components/DataTable';

	import HomeIcon from '../../assets/prices-active.svg';

	import BrushIcon from '../../assets/brush.svg';
	import LockIcon from '../../assets/lock.svg';

	import PricesPlaceholder from '../../assets/prices-placeholder.svg';

	import './style.scss';

	export default {
		name: 'Prices',
		components: { PageHeader, DataTable },
		data: () => {
			return {
				icon: HomeIcon,
				pages: [1],
				buttons: [
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
		}
	}
</script>