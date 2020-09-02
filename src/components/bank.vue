<template>
  <section class="bank">
    <!-- header -->
    <section class="header">
      <div @click="backHome">
        <img src="../assets/img/back.png" alt />
      </div>
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
          :class="{ success: type === '4' ? (item.plist[0].handAnswer && item.plist[0].isShow) : (item.handAnswer && item.isShow)}"
          v-for="item in list"
          :key="item.index"
          @click="curRowIndex = item.index"
        >{{ item.index + 1 }}</li>
      </ul>
    </section>
    <!-- 判断题/单选题/多选题 -->
    <section class="main-row" v-if="type === '1' || type === '2' || type === '3'">
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
    </section>
    <!-- 案例题 -->
    <section class="main-row" v-if="type === '4'">
      <p>{{ `${list[curRowIndex].index + 1}.【${typeName}】${list[curRowIndex].title}。` }}</p>
      <div class="case-box">
        <div class="case-row" v-for="(item, index) in list[curRowIndex].plist" :key="index">
          <p>{{ `${index + 1}.${item.title}。` }}</p>
          <ul class="list">
            <li
              v-for="(item1, index1) in item.list"
              :key="index1"
              @click="handSelect(item1.code, item.type, index)"
            >
              <span v-if="item.type === '3'">
                <img
                  v-if="item.handAnswer.includes(item1.code)"
                  src="../assets/img/checkbox_xuan.png"
                  alt
                />
                <img v-else src="../assets/img/checkbox.png" alt />
              </span>
              <span v-else>
                <img v-if="item.handAnswer === item1.code" src="../assets/img/radio_xuan.png" alt />
                <img v-else src="../assets/img/radio.png" alt />
              </span>
              {{ item1.value }}
            </li>
          </ul>
          <!-- 答案信息 -->
          <div v-show="item.isShow" class="answer-info">
            <span>
              选择答案：
              <span :class="getAnswerColor(item)">{{ item.handAnswer }}</span>
            </span>
            <span>
              正确答案：
              <span class="success">{{ item.answer }}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
    <!-- 操作按钮 -->
    <section class="operation">
      <button v-show="curRowIndex > 0" class="public-button" @click="changePage(1)">上一题</button>
      <button
        v-show="list.filter(k => !k.isShow).length === 0"
        class="public-button"
        @click="submit"
      >提交</button>
      <button v-show="curRowIndex < list.length - 1" class="public-button" @click="changePage(2)">下一题</button>
    </section>
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
    function handSelect(code, caseType, index) {
      let thisType = caseType || type;
      let thisObj = list[curRowIndex.value];
      if (caseType) {
        thisObj = list[curRowIndex.value].plist[index];
      }
      // 多选
      if (thisType === "3") {
        if (thisObj.handAnswer) {
          let valueArr = thisObj.handAnswer.split("");
          if (valueArr.indexOf(code) > -1) {
            valueArr.splice(valueArr.indexOf(code), 1);
          } else {
            valueArr.push(code);
          }
          valueArr.sort();
          thisObj.handAnswer = valueArr.join("");
        } else {
          thisObj.handAnswer = code;
        }
      } else {
        thisObj.handAnswer = code;
      }
    }

    // 切换题目 1、上一页 2、下一页
    function changePage(cType) {
      document.getElementsByClassName('case-box')[0].scrollTop = 0
      if (cType === 1) {
        curRowIndex.value--;
      } else if (cType === 2) {
        if (type === '4') {
          if (list[curRowIndex.value].plist[0].isShow) {
            curRowIndex.value++;
          } else {
            list[curRowIndex.value].plist.forEach(k => {
              k.isShow = true
            })
          }
        } else {
          if (list[curRowIndex.value].isShow) {
            curRowIndex.value++;
          } else {
            list[curRowIndex.value].isShow = true;
          }
        }
      }
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

    function backHome() {
      window.location.search = "";
    }

    return {
      time,
      visible,
      type,
      list,
      curRowIndex,
      handSelect,
      getAnswerColor,
      changePage,
      typeName,
      backHome,
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
    display: flex;
    flex-direction: column;
    flex: 1;
    line-height: 30px;
    padding: 20px;
    overflow: auto;
    .case-box {
      flex: 1;
      height: 100px;
      overflow: auto;
    }
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
  }
}
</style>