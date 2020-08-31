<template>
  <section id="app">
    <section class="button-group" v-if="!viewComponents || viewComponents === 'home'">
      <button class="public-button" @click="startAnswer('1')">判断题</button>
      <button class="public-button" @click="startAnswer('2')">单选题</button>
      <button class="public-button" @click="startAnswer('3')">多选题</button>
      <button class="public-button" @click="startAnswer('4')">案例题</button>
    </section>
    <component :is="viewComponents" v-else />
  </section>
</template>

<script>
import { ref, computed } from "vue";
import bank from "./components/bank.vue";
import error from "./components/error.vue";
export default {
  name: "App",
  setup() {
    // 路由
    let curRoute = ref(window.location.pathname);
    const routes = {
      "/": "home",
      "/bank": "bank",
      "/error": "error",
    };
    const viewComponents = computed(() => routes[curRoute.value] || "error");

    // 题型 1、判断 2、单选 3、多选 4、案例
    function startAnswer(curType) {
      sessionStorage.setItem("type", curType);
      window.location.pathname = "/bank";
    }

    return { curRoute, routes, viewComponents, startAnswer };
  },
  components: {
    bank,
    error
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .button-group {
    button {
      display: block;
      margin-top: 20px;
    }
  }
}
</style>
