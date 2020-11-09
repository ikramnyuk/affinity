<template>
    <div class="date-table-wrap">
        <div class="data-table">
            <div class="table-header">
                <div v-if="label" class="lable">{{ label }}</div>

                <div class="actions">
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

                    <div v-if="checkboxes.indexOf(true) === -1" class="buttons">
                        <div v-for="(item, key) in buttons" :class="item.type + '-color btn'" :key="key" @click="openModal(item.name)">
                            <img :src="item.icon" alt="add_icon">
                            <span>{{ item.name }}</span>
                        </div>

                        <input v-if="search" type="text" placeholder="Search...">
                    </div>

                    <div v-if="checkboxes.indexOf(true) !== -1" class="buttons">
                        <div v-for="(item, key) in selectedBtns" :class="item.type + '-color btn'" :key="key" @click="openModal(item.name)">
                            <img :src="item.icon" alt="add_icon">
                            <span>{{ item.name }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <table border="0" cellpadding="0" cellspacing="0" ref="table">
                <thead>
                    <tr>
                        <th width="46px">
                            <label class="custom-checkbox">
                                <input v-model="allCheck" type="checkbox" class="check-func" @change="(e) => {changeCheck(e)}"/>
                                <span></span>
                            </label>
                        </th>
                        <th v-for="(item, key) in headers" :width="item.width" :key="key">
                            <span v-if="item === 'Stock'">{{ item.label }}</span>
                            <div v-if="item !== 'Stock'">
                                <span>{{ item.label }}</span>
                                <div class="sort">
                                    <span v-if="sort.indexOf(item.label + '_up') !== -1" @click="sortTable(null, null, item.label + '_up')"><img src="../../assets/sort-up.svg" alt="sort_up"></span>
                                    <span v-if="sort.indexOf(item.label + '_up') === -1" @click="sortTable(item.label, false)"><img src="../../assets/sort-up-disabled.svg" alt="sort_up"></span>
                                    <span v-if="sort.indexOf(item.label + '_down') !== -1" @click="sortTable(null, null, item.label + '_down')"><img src="../../assets/sort-down.svg" alt="sort_down"></span>
                                    <span v-if="sort.indexOf(item.label + '_down') === -1" @click="sortTable(item.label, true)"><img src="../../assets/sort-down-disabled.svg" alt="sort_down"></span>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, key) in sortedData" :key="key">
                        <td>
                            <label class="custom-checkbox">
                                <input v-model="checkboxes[key]" type="checkbox" class="check-func"/>
                                <span></span>
                            </label>
                        </td>
                        <td v-for="(value, index) of item" :key="index">
                            <p v-if="index !== 'stock' && index !== 'product' && index!== 'employee' && index!== 'member' && index!== 'plan' && index !== 'status'">{{ value.label ? value.label : '' }}</p>
                            <p v-if="index !== 'stock' && index !== 'product' && index!== 'employee' && index!== 'member' && index!== 'plan' && index !== 'status'">{{ value.sublabel ? value.sublabel : '' }}</p>

                            <div v-if="index === 'product' || index === 'employee' || index === 'member' || index === 'plan'" class="product">
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
                </tbody>

                <thead>
                    <tr>
                        <th>
                            <label class="custom-checkbox">
                                <input v-model="allCheck" type="checkbox" class="check-func" @change="(e) => {changeCheck(e)}"/>
                                <span></span>
                            </label>
                        </th>
                        <th v-for="(item, key) in headers" :key="key" @click="sortTable(key)">
                            <span>{{ item.label }}</span>
                        </th>
                    </tr>
                </thead>
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
    </div>
</template>

<script>
    import PieChart from 'vue-pie-chart/src/PieChart.vue';
	import './style.scss';

	export default {
		name: 'DataTable',
        components: { 'pie-chart': PieChart },
        props: ['data', 'headers', 'label', 'pagination', 'pages', 'buttons', 'openModal', 'selectedBtns', 'search'],

        data: () => {
            return {
                activePage: 0,
                rowPerPage: 10,
                showBtns: false,
                checkboxes: [],
                allCheck: false,
                sortedData: [],
                sort: [],
            }
        },

        mounted(){
            this.data.forEach((item) => {
                this.checkboxes.push(false);
                this.sortedData.push(item);
            });
        },

        methods: {
            sortTable(header, reverse, sortIcon) {
                if(header){
                    this.sortedData.sort(this.sortBy(header, reverse));

                    if(reverse){
                        
                        let index = this.sort.findIndex((item) => {
                            return item === header + '_up';
                        });
                        console.log(index);
                        this.sort.splice(index, 1);

                        this.sort.push(header + '_down');

                    }else{
                        

                        let index = this.sort.findIndex((item) => {
                            return item === header + '_down';
                        });

                        this.sort.splice(index, 1);

                        this.sort.push(header + '_up');
                    }
                    
                }else{
                    let data = [];
                    this.data.forEach((item) => {
                        data.push(item);
                    });

                    this.sortedData = data;

                    if(sortIcon){
                        let index = this.sort.findIndex((item) => {
                            return item === sortIcon;
                        });

                        this.sort.splice(index, 1);
                    }
                }
            },

            sortBy(header, reverse) {
                header = header.toLowerCase();

                const key = function(x) {
                    console.log(x);
                    return x[header].label
                };
                
                reverse = !reverse ? 1 : -1;

                return function(a, b) {
                    return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
                }
            },

            changeCheck(){
                console.log(this.allCheck);
                
                if(this.allCheck){
                    this.checkboxes.forEach((item, key) => {
                        console.log(item);
                        this.checkboxes[key] = true;
                    });
                }else{
                    this.checkboxes.forEach((item, key) => {
                        console.log(item);
                        this.checkboxes[key] = false;
                    });
                }
            },

            upPages(){
                this.rowPerPage++;
            },

            downPages(){
                if(this.rowPerPage > 1){
                    this.rowPerPage--;
                }
            },

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