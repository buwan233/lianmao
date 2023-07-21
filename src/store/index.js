import cart from './modules/cart'
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
    modules: {
        cart
    }
})
export default store