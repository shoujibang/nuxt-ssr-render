<template>
    <div class="go-to">
      <ul>
        <li @click="goTo()">返回顶部</li>
      </ul>
    </div>
</template>
<script>
export default {
  name:"goTo",
  data() {
    return {
      
    }
  },
  methods: {
    goTo(){
      document.documentElement.scrollTop = 0
    }
  },
}
</script>
<style lang="scss" scoped>
  .go-to{
    position: fixed;
    bottom: 20px;
    right: 0;
    ul{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
    ul li{
      width: 100px;
      height: 100px;
      border: 1px solid #666565;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      cursor: pointer;
      color: #808080;
      font-weight: 800;
    }
  }
</style>
