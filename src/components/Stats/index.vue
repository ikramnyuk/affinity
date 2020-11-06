<template>
    <div class="stats">
        <div v-for="(item, key) in stats" class="item" :key="key">
            <div class="icon">
                <img :src="item.icon" alt="stats_icon">
            </div>

            <div class="details">
                <div class="name">{{ item.name }}</div>
                <div class="value">{{ item.value }}</div>
                <div :class="getStatus(item.compareStatus) + ' compare'">
                    <img v-if="item.compareStatus === 1" src="../../assets/green-up.svg" alt="up_icon">
                    <img v-if="item.compareStatus === 2" src="../../assets/red-down.svg" alt="down_icon">
                    <img v-if="item.compareStatus === 3" src="../../assets/yellow-right.svg" alt="right_icon">
                    <span>{{ item.compare }}</span>
                </div>
            </div>

            <div class="more"><img src="../../assets/more-horizontal.svg" alt="more_icon"></div>
        </div>
    </div>
</template>

<script>
	import './style.scss';

	export default {
		name: 'Stats',
        components: {},
        props: ['stats'],

        methods: {
            getStatus(key){
                let status = '';
                
                switch (key) {
                    case 1:
                        status = 'green-color';
                        break;

                    case 2:
                        status = 'red-color';
                        break;

                    case 3:
                        status = 'yellow-color';
                        break;
                }

                return status;
            }
        }
	}
</script>