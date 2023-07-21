const cart = {
    state: {
        product: JSON.parse(sessionStorage.getItem('product')) || []
    },
    getters: {
        totalPrice(state) {
            let total = 0;
            state.product.forEach(item => {
                if (item.checked) {
                    total += item.price * item.num
                }

            });
            return total
        }
    },
    mutations: {
        addState(state, payload) {
            payload.checked = false;
            // 检测重复数据
            let a = state.product.find(item => item.productId == payload.productId)
            if (a) {
                state.product = state.product.map((item => {
                    if (item.productId == payload.productId) {
                        item.num++
                    }
                    return item
                }))
            } else {
                payload.num = 1;
                state.product.push(payload)
            }

            // 数据持久化
            sessionStorage.setItem('product', JSON.stringify(state.product))
        },
        SET_CHECKED(state) {
            state.product = state.product.map(item => {
                item.checked = !item.checked
                return item
            })
        },
        REMOVE_STATE(state) {
            state.product = state.product.filter(item => {
                return !item.checked
            })
        },
        INCREMENT(state, payload) {
            state.product = state.product.map(item => {
                if (item.productId == payload.productId) {
                    item.num++
                }
                return item
            })
        },
        DECREMENT(state,payload) {
            state.product = state.product.map(item => {
                if(item.productId == payload.productId){
                    item.num--
                }
               
                if (item.num < 1) {
                    item.num = 1
                }
                return item
            })

        }
    }

}
export default cart