<template>
    <div class="stepper">
        <div class="stepper-header">
            <div v-if="label" class="lable">{{ label }}</div>

            <div class="actions" v-if="pages">
                <div class="pagination">
                    <span>Show</span>
                    <div class="number-input">
                        <input v-model="rowPerPage" type="text">
                        <div class="number-btns">
                            <span class="up" @click="upPages"></span>
                            <span class="down" @click="downPages"></span>
                        </div>
                    </div>
                    <span>entries</span>
                </div>
            </div>
        </div>

        <div class="stepper-content">
            <div class="step" v-for="(item, key) in data" :key="key">
                <div class="subtitle">{{ item.subtitle }}</div>

                <v-expansion-panels class="step-details">
                    <v-expansion-panel>
                        <v-expansion-panel-header expand-icon="mdi-menu-down"> {{ item.title}} </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <p class="single-text" v-if="item.itemText">{{ item.itemText }}</p>

                            <div v-if="item.items" class="step-info">
                                <div v-for="(info, key) in item.items" class="step-info__item" :key="key">
                                    <span :class="info.class + ' tip'">{{ info.title }}</span>
                                    <span>{{ info.info }}</span>
                                </div>
                            </div>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </div>
        </div>
    </div>
</template>

<script>
	import './style.scss';

    import StepIcon from '../../assets/step.svg';

	export default {
		name: 'Stepper',
        components: {  },
        props: ['label', 'pages', 'data'],

        data: () => {
            return {
                icon: StepIcon,
                rowPerPage: 10
            }
        },

        methods: {
            
        }
	}
</script>