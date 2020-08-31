<template>
  <section class="bank">
    <!-- header -->
    <section class="header">
      <div @click="backHome"><img src="../assets/img/back.png" alt /></div>
      <div>
        <img src="../assets/img/time.png" alt />
        <span>{{ time }}</span>
      </div>
      <div @click="visible = !visible">
        <img src="../assets/img/list.png" alt />
        {{ list.length }}
      </div>
    </section>
    <!-- menu -->
    <section class="menu" :style="{ left: visible ? '0' : '-50%' }">
      <ul class="menu-center">
        <li
          :class="{ success: item.handAnswer && item.isShow}"
          v-for="item in list"
          :key="item.index"
          @click="curRowIndex = item.index"
        >{{ item.index + 1 }}</li>
      </ul>
    </section>
    <!-- 判断题/单选题/多选题 -->
    <div class="main-row" v-if="type === '1' || type === '2' || type === '3'">
      <p>{{ `${list[curRowIndex].index + 1}.【${typeName}】${list[curRowIndex].title}。` }}</p>
      <ul class="list">
        <li
          v-for="(item, index) in list[curRowIndex].list"
          :key="index"
          @click="handSelect(item.code)"
        >
        <span v-if="type === '3'">
          <img
            v-if="list[curRowIndex].handAnswer.includes(item.code)"
            src="../assets/img/checkbox_xuan.png"
            alt
          />
          <img v-else src="../assets/img/checkbox.png" alt />
        </span>
        <span v-else>
          <img
            v-if="list[curRowIndex].handAnswer === item.code"
            src="../assets/img/radio_xuan.png"
            alt
          />
          <img v-else src="../assets/img/radio.png" alt />
        </span>
          {{ item.value }}
        </li>
      </ul>
      <!-- 答案信息 -->
      <div v-show="list[curRowIndex].isShow" class="answer-info">
        <span>
          选择答案：
          <span :class="getAnswerColor(list[curRowIndex])">{{ list[curRowIndex].handAnswer }}</span>
        </span>
        <span>
          正确答案：
          <span class="success">{{ list[curRowIndex].answer }}</span>
        </span>
      </div>
    </div>
    <!-- 案例题 -->

    <!-- 操作按钮 -->
    <section class="operation">
      <span v-show="curRowIndex > 0" class="public-button" @click="qChange(1)">上一题</span>
      <span
        v-show="list.filter(k => !k.isShow).length === 0"
        class="public-button"
        @click="submit"
      >提交</span>
      <span v-show="curRowIndex < list.length - 1" class="public-button" @click="qChange(2)">下一题</span>
    </section>

    <!-- <ul class="main-row" v-if="type === '4'">
      <li v-for="(item, index) in caseData" :key="index">
        <p>{{ `${index + 1}、${item.title}` }}</p>
        <ul>
          <li v-for="(item1, index1) in item.plist" :key="index1">
            <p>{{ `${index1 + 1}、${item1.title}` }}</p>
            <ul>
              <li
                v-for="(item2, index2) in item1.list"
                :key="index2"
              >{{ `${item2.code}、${item2.value}` }}</li>
            </ul>
            <p>正确答案：{{ item1.answer }}</p>
          </li>
        </ul>
      </li>
    </ul> -->
  </section>
</template>

<script>
import { ref, reactive, computed } from "vue";
import Judge from "../data/judge";
import Select from "../data/select";
import MultipleSelect from "../data/multipleSelect";
import Case from "../data/case";
export default {
  name: "bank",
  setup() {
    // 计时器
    let time = ref("00:00");
    let second = ref(0);
    clearInterval(window.timer);
    window.timer = setInterval(() => {
      second.value++;
      let h = parseInt(second.value / 60);
      h = h < 10 ? "0" + h : h;
      let s = second.value % 60;
      s = s < 10 ? "0" + s : s;
      time.value = h + ":" + s;
    }, 1000);
    let visible = ref(false);

    let type = sessionStorage.getItem("type");
    // 当前题库
    let list = reactive([]);
    switch (type) {
      case "1":
        list = Judge;
        break;
      case "2":
        list = Select;
        break;
      case "3":
        list = MultipleSelect;
        break;
      case "4":
        list = Case;
        break;
      default:
        break;
    }

    // 当前题目索引
    let curRowIndex = ref(0);

    // 选择答案
    function handSelect(code) {
      // 多选
      if(type === '3') {
        let value = list[curRowIndex.value].handAnswer
        if (value) {
          let valueArr = value.split('')
          if (valueArr.indexOf(code) > -1) {
            valueArr.splice(valueArr.indexOf(code), 1)
          } else {
            valueArr.push(code)
          }
          valueArr.sort()
          list[curRowIndex.value].handAnswer = valueArr.join('')
        } else {
          list[curRowIndex.value].handAnswer = code
        }
      } else {
        list[curRowIndex.value].handAnswer = code;
      }
    }

    // 切换题目 1、上一页 2、下一页
    function qChange(type) {
      if (type === 1) {
        curRowIndex.value--;
      } else if (type === 2) {
        if (list[curRowIndex.value].isShow) {
          curRowIndex.value++;
        } else {
          list[curRowIndex.value].isShow = true;
        }
      }
    }

    // 查看答案
    function showAnswer() {
      list[curRowIndex.value].isShow = true;
    }

    // 获取题型
    let typeName = computed(() => {
      let arr = ["判断题", "单选题", "多选题", "案例题"];
      return arr[+type - 1];
    });

    function getAnswerColor(item) {
      let flag = "error";
      if (item.handAnswer === item.answer) {
        flag = "success";
      }
      return flag;
    }

    function backHome () {
      window.location.pathname = '/'
    }

    return {
      time,
      visible,
      type,
      list,
      curRowIndex,
      handSelect,
      getAnswerColor,
      qChange,
      typeName,
      showAnswer,
      backHome
    };
  },
};
</script>

<style lang="less" scoped>
.bank {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    > div {
      display: flex;
      align-items: center;
    }
  }
  .menu {
    position: absolute;
    top: 50px;
    left: -50%;
    bottom: 0;
    width: 50%;
    padding: 10px;
    background-color: #fff;
    overflow: auto;
    transition: all 0.5s;
    .menu-center {
      li {
        float: left;
        width: 30px;
        height: 30px;
        line-height: 30px;
        margin-right: 10px;
        margin-bottom: 10px;
        text-align: center;
        border: 1px solid #ddd;
        border-radius: 3px;
        cursor: pointer;
        &.success {
          color: #fff;
          background-color: #06aea6;
        }
      }
    }
  }
  .main-row {
    flex: 1;
    line-height: 30px;
    padding: 20px;
    overflow: auto;
    .list {
      margin-top: 20px;
      > li {
        display: flex;
        padding-left: 10px;
        margin-bottom: 10px;
        cursor: pointer;
        img {
          margin-top: 5px;
          margin-right: 10px;
        }
      }
    }
    .answer-info {
      margin-top: 20px;
      span {
        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
  .operation {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    span {
      display: inline-block;
      width: 100px;
      border: 1px solid #ddd;
      border-radius: 3px;
      margin-right: 10px;
      text-align: center;
      cursor: pointer;
    }
  }
}
</style>