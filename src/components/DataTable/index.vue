<template>
    <div class="data-table">
        <div class="table-header">
            <div v-if="label" class="lable">{{ label }}</div>

            <div class="actions">
                <div class="pagination">
                    <span>Show</span>
                    <input type="number" value="10">
                    <span>entries</span>
                </div>

                <div class="buttons">
                    <div v-for="(item, key) in buttons" :class="item.type + '-color btn'" :key="key" @click="openModal(key)">
                        <img :src="item.icon" alt="add_icon">
                        <span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
        </div>

        <table border="0" cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>
                        <label class="custom-checkbox">
                            <input type="checkbox" />
                            <span></span>
                        </label>
                    </th>
                    <th v-for="(item, key) in headers" :key="key">
                        <span v-if="item === 'Stock'">{{ item }}</span>
                        <div v-if="item !== 'Stock'">
                            <span>{{ item }}</span>
                            <div class="sort">
                                <span><img src="../../assets/sort-up.svg" alt="sort_up"></span>
                                <span><img src="../../assets/sort-down.svg" alt="sort_down"></span>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, key) in data" :key="key">
                    <td>
                        <label class="custom-checkbox">
                            <input type="checkbox" />
                            <span></span>
                        </label>
                    </td>
                    <td v-for="(value, index) of item" :key="index">
                        <p v-if="index !== 'stock' && index !== 'imaged' && index !== 'status'">{{ value.label ? value.label : '' }}</p>
                        <p v-if="index !== 'stock' && index !== 'imaged' && index !== 'status'">{{ value.sublabel ? value.sublabel : '' }}</p>

                        <div v-if="index === 'imaged'" class="product">
                            <div class="product-logo">
                                <img :src="value.image" alt="">
                            </div>
                            <div class="product-info">
                                <p>{{ value.label }}</p>
                                <p>{{ value.sublabel }}</p>
                            </div>
                        </div>

                        <div v-if="index === 'stock'" class="stock">
                            <div class="stock-info">
                                <p>{{ value.label }}</p>
                                <p :class="getCircleColor(value.sublabel) + ' status'">{{ value.sublabel }}</p>
                            </div>
                            <div class="stock-value">
                                <pie-chart :ratio="value.amount / 100" :stroke-width="0.8" :color="getColor(value.sublabel)" :opacity="1" />
                                <span>{{ Math.round(value.amount) }}%</span>
                            </div>
                        </div>

                        <div v-if="index === 'status'" class="status">
                            <div class="stock-info">
                                <p v-if="value.sublabel === 'LIFETIME'" class="status lifetime">{{ value.sublabel }}</p>
                                <p v-if="value.sublabel === 'CANCEllED'" class="status cancelled">{{ value.sublabel }}</p>
                                <p v-if="value.sublabel === 'Cancelling'" class="status cancelling">{{ value.sublabel }}</p>
                                <p v-if="value.sublabel === 'ACTIVE'" class="status active">{{ value.sublabel }}</p>
                                <span>{{ value.label }}</span>
                            </div>
                        </div>
                    </td>
                </tr>

                <tr>
                    <td>
                        <label class="custom-checkbox">
                            <input type="checkbox" />
                            <span></span>
                        </label>
                    </td>
                    <td v-for="(item, key) in headers" :key="key">{{ item }}</td>
                </tr>
            </tbody>
        </table>
        
        <div class="table-footer">
            <div class="pagination-info">
                <p>{{ pagination }}</p>
            </div>

            <div class="pages">
                <div class="btn" @click="setPrevPage">Previous</div>
                <div @click="setActivePage(key)" v-for="(item, key) in pages" :class="checkPage(key)" :key="key">{{ item }}</div>
                <div class="btn" @click="setNextPage">Next</div>
            </div>
        </div>
    </div>
</template>

<script>
    import PieChart from 'vue-pie-chart/src/PieChart.vue';
	import './style.scss';

	export default {
		name: 'DataTable',
        components: { 'pie-chart': PieChart },
        props: ['data', 'headers', 'label', 'pagination', 'pages', 'buttons', 'openModal'],

        data: () => {
            return {
                activePage: 0
            }
        },

        methods: {
            checkPage(key){
                if(this.pages.length === 1 && key === 0){
                    return 'page-count disabled active';
                }else if(key === this.activePage){
                    return 'page-count active';
                }else{
                    return 'page-count';
                }
            },

            setActivePage(key){
                this.activePage = key;
            },

            setNextPage(){
                if(this.activePage < this.pages.length - 1){
                    this.activePage++;
                }
            },

            setPrevPage(){
                if(this.activePage > 0){
                    this.activePage--;
                }
            },

            getCircleColor(key){
                let className = '';

                switch (key) {
                    case "STOCK LIVE":
                        className = 'active';
                        break;

                    case "STOCK PULLED":
                        className = 'pulled'
                        break;

                    case "SOLD OUT":
                        className = 'cancelled'
                        break;
                }

                return className;
            },

            getColor(key){
                let color = '';

                switch (key) {
                    case "STOCK LIVE":
                        color = '#28e55d';
                        break;

                    case "STOCK PULLED":
                        color = '#ffa900'
                        break;

                    case "SOLD OUT":
                        color = '#ff0042'
                        break;
                }

                return color;
            }
        }
	}
</script>