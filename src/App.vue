<template>
  <section id="app">
    <component :is="viewComponents" />
  </section>
</template>

<script>
import { ref, computed } from "vue";
import home from "./components/home";
import bank from "./components/bank";
import notFound from "./components/notFound";
export default {
  name: "App",
  setup() {
    // 模拟路由
    let curRoute = ref(window.location.search);
    const routes = {
      "": "home",
      "?bank": "bank",
      "?notFound": "notFound",
    };
    const viewComponents = computed(() => routes[curRoute.value] || "notFound");
    return { viewComponents };
  },
  components: {
    home,
    bank,
    notFound,
  },
};
</script>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
