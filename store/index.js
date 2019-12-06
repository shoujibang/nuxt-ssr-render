import Vue from 'vue';
import Vuex from 'vuex';
import state from './module/state'; //导入state
import * as mutations from './module/mutations' //导入mutations
import * as actions from './module/actions' //导入actions
//应用vuex插件
Vue.use(Vuex);

//实例化vuex，将state，mutations，action注入到vuex.store里面
const store = () => new Vuex.Store({
    state,
    mutations,
    actions
})

export default store;