const state = {
    menu: false,
}

const getters = {
    getMenu( state ) {
       return state.menu;
    }
}

const mutations = {
    SET_MENU(state, data) {
       state.menu = data;
    }
}

const actions = {
    setMenu({ commit }, data) {
        commit('SET_MENU', data);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}