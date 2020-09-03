<template>
  <section class="home">
    <section class="button-group">
      <button class="public-button" @click="startAnswer('1')">判断题</button>
      <button class="public-button" @click="startAnswer('2')">单选题</button>
      <button class="public-button" @click="startAnswer('3')">多选题</button>
      <button class="public-button" @click="startAnswer('4')">案例题</button>
    </section>
  </section>
</template>

<script>
export default {
  name: "home",
  setup() {
    // 题型 1、判断 2、单选 3、多选 4、案例
    function startAnswer(type) {
      sessionStorage.setItem("type", type);
      window.location.search = "?bank";
    }
    return { startAnswer };
  },
};
</script>

<style lang="less" scoped>
.home {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  .button-group {
    button {
      display: block;
      margin-top: 20px;
      border-radius: 20px;
      box-shadow: 0 0 15px #ddd;
    }
  }
}
</style>
