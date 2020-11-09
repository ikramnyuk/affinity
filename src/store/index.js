import Vue from 'vue';
import Vuex from 'vuex';
import Common from './modules/common.store';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		Common
	}
})