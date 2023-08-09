import { createStore } from 'vuex'

const moduleA = {
    state: {
        username: 'moduleA'
    },
    getters: {
        newName(state) {
            return state.username + '!!!'
        }
    },
    mutations: {
        updateName(state) {
            state.username = 'moduleAAAAA'
        }
    }
}

const moduleB = {
    namespaced: true,
    state: {
        username: 'moduleB'
    }
}

export default createStore({
    state: {
        username: 'zs'
    },
    getters: {
        newName(state) {
            return state.username + '!!!'
        }
    },
    mutations: {
        updateName(state) {
            state.username = 'ls'
        }
    },
    actions: {
        updateName(ctx) {
            setTimeout(() => {
                ctx.commit('updateName')
            }, 1000)
        }
    },
    modules: {
        moduleA,
        moduleB
    }
})