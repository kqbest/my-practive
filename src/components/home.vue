<template>
  <section class="home">
    <section class="button-group">
      <button class="public-button" @click="startAnswer('1')">判断题{{ seeFlag ? '(阅读)' : '' }}</button>
      <button class="public-button" @click="startAnswer('2')">单选题{{ seeFlag ? '(阅读)' : '' }}</button>
      <button class="public-button" @click="startAnswer('3')">多选题{{ seeFlag ? '(阅读)' : '' }}</button>
      <button class="public-button" @click="startAnswer('4')">案例题{{ seeFlag ? '(阅读)' : '' }}</button>
      <button class="public-button" @click="changeType()">阅读模式</button>
      <button class="public-button" @click="startAnswer('5')">模拟考试</button>
    </section>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "home",
  setup() {
    // 阅读模式
    let seeFlag = ref(false);
    sessionStorage.removeItem("isSee");
    function changeType() {
      seeFlag.value = !seeFlag.value
    }
    // 题型 1、判断 2、单选 3、多选 4、案例
    function startAnswer(type) {
      sessionStorage.setItem("type", type);
      seeFlag.value && sessionStorage.setItem("isSee", true);
      window.location.search = "?bank";
    }
    return { seeFlag, changeType, startAnswer };
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
