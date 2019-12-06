


import Vue from 'vue'
// import Logo from '@/components/logo'
import VHeader from '@/components/VHeader' //VHeader
import VFotter from '@/components/VFotter' //VFotter
import goTo from '@/components/goTo' //goTo
import VHeaderAdmin from '@/components/VHeaderAdmin' //goTo



// //注册为全局组件
Vue.component(VHeader.name,VHeader);
Vue.component(VFotter.name,VFotter);
Vue.component(goTo.name,goTo);
Vue.component(VHeaderAdmin.name,VHeaderAdmin);

// Vue.component(Logo.name,Logo);




