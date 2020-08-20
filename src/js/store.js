//创建store状态管理
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//每当初始化项目的时候，就从localStorage中去一下数据
let car = window.JSON.parse(localStorage.getItem('cart') ||'[]')
const store = new Vuex.Store({
    state:{
        //在cart中，应该把每个商品存储为一个对象{id,count}
        cart:car //购物车数组
    },
    mutations:{
        addToCar(state,goods){
            //将商品添加到购物车
            //goods为对象{id,count}
            //如果购物车中，之前曾有这条商品，则只更新数量即可，如果没有，则直接pash
            //state.cart.push(goods)
            let flag = false    //默认没有
            state.cart.some(item=>{
                if(item.id == goods.id){
                    item.count +=goods.count
                    flag = true //原本购物车里就有
                    return true
                }
            })
            if(!flag){
                state.cart.push(goods)
            }
            //为了持久化存储购物车数据，可以把购物车的商品序列化出来存储到localStorage中
            localStorage.setItem('cart', window.JSON.stringify(state.cart))
        },
        updateGoodsCount(state,goods){
            //根据传递过来的商品的信息，更新购物车中商品的数量
            state.cart.some(item=>{
                if(item.id == goods.id){
                    item.count = goods.count
                    return true
                }
                localStorage.setItem('cart', window.JSON.stringify(state.cart))
            })
        },
        //删除要处处的localstorage
        delFromCart(state,id){
            state.cart.some((item,i)=>{
                if(item.id = id){
                    state.cart.splice(i,1)
                    return true;
                }
            })
            //重新序列化
            localStorage.setItem('cart', window.JSON.stringify(state.cart))
        },
        changeSelectState(state,obj){
            state.cart.some(item=>{
                if(item.id == obj.id){
                    item.selected = obj.selected
                    return true
                }
            })
            localStorage.setItem('cart', window.JSON.stringify(state.cart))
        }
    },
    //类似于computed属性
    getters:{
        totalcount(state){
            let c= 0
            state.cart.forEach(item=>c+=item.count)
            return c
        },
        idstr(state){
            //获取购物车中所有的商品的ID字符串
            let arr = []
            state.cart.forEach(item=>arr.push(item.id))
            return arr.join(',')
        },
        countObj(state){
            //获取商品购物车中商品的Id和商品数量的键值对
            let o = {}
            state.cart.forEach(item=>o[item.id]=item.count)
            return o
        },
        seletedObj(state){
            //id对应的商品是否被选中
            let o = {}
            state.cart.forEach(item=>o[item.id]=item.selected)
            return o
        },
        selectedcount(state){
            //勾选商品的数量
            let c = 0
            state.cart.forEach(item=>{
                if(item.selected){
                    c+=item.count
                }
            })
            return c
        },
        amount(state){
            //总价
            let c = 0;
            state.cart.forEach(item=>{
                if(item.selected){
                    c+=item.count*item.price
                }
            })
            return c
        }
    }
})

export default store