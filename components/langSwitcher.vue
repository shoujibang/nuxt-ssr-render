<template>
    <div class="lang-switcher">
       <nuxt-link v-for="(locale, i) in showLocales" :key="i" :to="switchLocalePath(locale.code)">
      <span @click="handleChangeLang(locale.code)">{{ locale.name }}</span>
    </nuxt-link>
    </div>
</template>
<script>
//利用js-cookie 保存token，这样能在token能在头部被获取，同时并用vuex,
//将token和用户信息存储在store中,使用中间件重置store数据。
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  name:"langSwitcher",
  data() {
    return {
      
    }
  },
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(
        locale =>{
          
          // this.$alert(locale.code)
          // this.$alert(this.$i18n.locale)
         return locale.code !== this.$i18n.locale
        } 
      );
    }
  },
  methods: {
    handleChangeLang(lang) {
      // this.$alert(lang)
      this.$store.commit("setLang", lang);
      Cookie.set("lang", lang);
    }

  },
}
</script>
<style lang="scss" scoped>
@import "@/assets/stylus/_reset.scss";
  .lang-switcher{
    width:pxTorem(60px);

  }

</style>
