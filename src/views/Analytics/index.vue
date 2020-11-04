<template>
    <div class="page">
		<PageHeader title="Analytics" :icon="icon" description="Lorem ipsum dolor sit amet."></PageHeader>

		<div class="main-content">
			<Stats :stats="stats" />
		</div>
	</div>
</template>

<script>
	import PageHeader from '../../components/PageHeader';
	import Stats from '../../components/Stats';

	import HomeIcon from '../../assets/analityc-active.svg';

	import StatsIcons1 from '../../assets/gross.svg';
	import StatsIcons2 from '../../assets/analytic-icon-2.svg';
	import StatsIcons3 from '../../assets/analytic-icon-3.svg';
	import StatsIcons4 from '../../assets/diamond.svg';
	import StatsIcons5 from '../../assets/key.svg';
	import StatsIcons6 from '../../assets/analytic-icon-6.svg';
	import StatsIcons7 from '../../assets/analytic-icon-7.svg';
	import StatsIcons8 from '../../assets/analytic-icon-8.svg';
	import StatsIcons9 from '../../assets/analytic-icon-9.svg';
	import StatsIcons10 from '../../assets/analytic-icon-10.svg';
	import StatsIcons11 from '../../assets/analytic-icon-11.svg';
	import StatsIcons12 from '../../assets/analytic-icon-12.svg';
	import StatsIcons13 from '../../assets/analytic-icon-13.svg';
	import StatsIcons14 from '../../assets/analytic-icon-14.svg';
	import StatsIcons15 from '../../assets/analytic-icon-15.svg';

	import './style.scss';

	export default {
		name: 'Analytics',
		components: { PageHeader, Stats },
		data: () => {
			return {
				icon: HomeIcon,
				stats: [
					{
						name: 'Gross volume',
						value: '$14,312.20',
						icon: StatsIcons1,
						compare: '57.13% this month',
						compareStatus: 1
					},
					{
						name: 'Monthly expenses',
						value: '$7,129.57',
						icon: StatsIcons2,
						compare: '18.11% this month',
						compareStatus: 1
					},
					{
						name: 'Monthly profit',
						value: '$7,182.63',
						icon: StatsIcons3,
						compare: '3.51% this month',
						compareStatus: 1
					},
					{
						name: 'Lifetime memberships',
						value: '10',
						icon: StatsIcons4,
						compare: '10.00% this month',
						compareStatus: 1
					},
					{
						name: 'Renewal memberships',
						value: '439',
						icon: StatsIcons5,
						compare: '29.30% this month',
						compareStatus: 1
					},
					{
						name: 'New customers past month',
						value: '12',
						icon: StatsIcons6,
						compare: '57.10% this month',
						compareStatus: 1
					},
					{
						name: 'Trial conversion rate',
						value: '2',
						icon: StatsIcons7,
						compare: '12.50% this month',
						compareStatus: 2
					},
					{
						name: 'Live releases',
						value: '4',
						icon: StatsIcons8,
						compare: '33.33% this month',
						compareStatus: 1
					},
					{
						name: 'Average sale time',
						value: '9 seconds',
						icon: StatsIcons9,
						compare: '15.21% this month',
						compareStatus: 1
					},
					{
						name: 'Cancelled memberships',
						value: '17',
						icon: StatsIcons10,
						compare: '1.87% this month',
						compareStatus: 1
					},
					{
						name: 'Unbound memberships',
						value: '41',
						icon: StatsIcons11,
						compare: '4.21% this month',
						compareStatus: 2
					},
					{
						name: 'Revoked memberships',
						value: '0',
						icon: StatsIcons12,
						compare: '0.00% this month',
						compareStatus: 3
					},
					{
						name: 'Service providers',
						value: '4',
						icon: StatsIcons13,
						compare: '0.00% this month',
						compareStatus: 3
					},
					{
						name: 'Employees and staff',
						value: '11',
						icon: StatsIcons14,
						compare: '10.00% this month',
						compareStatus: 1
					},
					{
						name: 'Dispute activity',
						value: '0',
						icon: StatsIcons15,
						compare: '0.00% this month',
						compareStatus: 3
					}
				],
			}
		}
	}
</script>