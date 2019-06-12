import data from '@/data/stocks'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit()
        },
        initStocks({ commit }) {
            commit('setStocks', data)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks
        }
    }
}