<template>
    <div class="page-header">
        <div class="icon">
            <img :src="icon" alt="page_icon">
        </div>
        <div class="page-details">
            <div class="name">{{ title }}</div>
            <div class="description">{{ description }}</div>
        </div>
    </div>
</template>

<script>
	import './style.scss';

	export default {
		name: 'PageHeader',
        components: {},
        props: ['title', 'icon', 'description']
	}
</script>