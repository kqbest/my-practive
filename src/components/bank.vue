<template>
  <section class="bank">
    <!-- 头部 -->
    <section class="header">
      <div class="hand" @click="backHome">
        <i class="iconfont iconback"></i>
      </div>
      <div class="clock">
        <i class="iconfont iconclock"></i>
        {{ time }}
      </div>
      <div class="close hand" @click="visible = !visible">
        <i class="iconfont iconlist"></i>
        {{ list.length }}
      </div>
    </section>
    <!-- 菜单 -->
    <section class="menu" :style="{ left: visible ? '0' : '-50%' }">
      <div class="menu-header">
        错误:
        <span
          class="error"
        >{{ type === '4' ? list.filter(k => k.plist.some(m => m.handAnswer && m.handAnswer && m.handAnswer !== m.answer)).length : list.filter(k => k.handAnswer && k.isShow && k.handAnswer !== k.answer).length }}</span> 题
      </div>
      <ul class="menu-list">
        <li
          :class="{
            success: type === '4' ? (item.plist[0].handAnswer && item.plist[0].isShow) : (item.handAnswer && item.isShow),
            error: type === '4' ? (item.plist[0].handAnswer && item.plist[0].isShow && item.plist.some((k) => k.handAnswer && k.handAnswer !== k.answer)) : (item.handAnswer && item.isShow && item.handAnswer !== item.answer)
          }"
          v-for="item in list"
          :key="item.index"
          @click="curRowIndex = item.index"
        >{{ item.index + 1 }}</li>
      </ul>
    </section>
    <!-- 判断题/单选题/多选题 -->
    <section class="main-row" v-if="type === '1' || type === '2' || type === '3'">
      <p
        class="title"
      >{{ `${list[curRowIndex].index + 1}.【${typeName()}】${list[curRowIndex].title}。` }}</p>
      <ul class="list">
        <li
          :class="{ active: type === '3' ? list[curRowIndex].handAnswer.includes(item.code) : list[curRowIndex].handAnswer === item.code }"
          v-for="(item, index) in list[curRowIndex].list"
          :key="index"
          @click="handSelect(item.code)"
        >
          <span v-if="type === '3'">
            <svg
              v-if="list[curRowIndex].handAnswer.includes(item.code)"
              class="icon svg"
              aria-hidden="true"
            >
              <use :xlink:href="'#iconcheckbox_xuan'" />
            </svg>
            <svg v-else class="icon svg" aria-hidden="true">
              <use :xlink:href="'#iconcheckbox'" />
            </svg>
          </span>
          <span v-else>
            <svg
              v-if="list[curRowIndex].handAnswer === item.code"
              class="icon svg"
              aria-hidden="true"
            >
              <use :xlink:href="'#iconradiobox_xuan'" />
            </svg>
            <svg v-else class="icon svg" aria-hidden="true">
              <use :xlink:href="'#iconradiobox'" />
            </svg>
          </span>
          {{ `${item.code}. ${item.value}` }}
        </li>
      </ul>
      <!-- 答案信息 -->
      <div v-show="list[curRowIndex].isShow" class="answer-info">
        <span>
          选择答案：
          <span :class="getAnswerColor(list[curRowIndex])">
            <span>{{ list[curRowIndex].handAnswer }}</span>
            <span v-if="list[curRowIndex].handAnswer === list[curRowIndex].answer">√</span>
            <span v-else>×</span>
          </span>
        </span>
        <span>
          正确答案：
          <span class="success">{{ list[curRowIndex].answer }}</span>
        </span>
      </div>
    </section>
    <!-- 案例题 -->
    <section class="main-row" v-if="type === '4'">
      <p
        class="title"
      >{{ `${list[curRowIndex].index + 1}.【${typeName()}】${list[curRowIndex].title}。` }}</p>
      <div class="case-box">
        <div class="case-row" v-for="(item, index) in list[curRowIndex].plist" :key="index">
          <p class="title">{{ `${index + 1}.[${typeName(item.type)}]${item.title}。` }}</p>
          <ul class="list">
            <li
              :class="{ active: item.type === '3' ? item.handAnswer.includes(item1.code) : item.handAnswer === item1.code }"
              v-for="(item1, index1) in item.list"
              :key="index1"
              @click="handSelect(item1.code, item.type, index)"
            >
              <span v-if="item.type === '3'">
                <svg
                  v-if="item.handAnswer.includes(item1.code)"
                  class="icon svg"
                  aria-hidden="true"
                >
                  <use :xlink:href="'#iconcheckbox_xuan'" />
                </svg>
                <svg v-else class="icon svg" aria-hidden="true">
                  <use :xlink:href="'#iconcheckbox'" />
                </svg>
              </span>
              <span v-else>
                <svg v-if="item.handAnswer === item1.code" class="icon svg" aria-hidden="true">
                  <use :xlink:href="'#iconradiobox_xuan'" />
                </svg>
                <svg v-else class="icon svg" aria-hidden="true">
                  <use :xlink:href="'#iconradiobox'" />
                </svg>
              </span>
              {{ `${item1.code}. ${item1.value}` }}
            </li>
          </ul>
          <!-- 答案信息 -->
          <div v-show="item.isShow" class="answer-info">
            <span>
              选择答案：
              <span :class="getAnswerColor(item)">
                <span>{{ item.handAnswer }}</span>
                <span v-if="item.handAnswer === item.answer">√</span>
                <span v-else>×</span>
              </span>
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
      <span v-show="curRowIndex > 0" @click="changePage(1)">上一题</span>
      <span v-show="list.filter(k => !k.isShow).length === 0" @click="submit">提交</span>
      <span @click="changePage(2)">下一题</span>
    </section>
    <!-- 成绩 -->
    <section class="achievement" v-if="visibleSubmit">
      <div class="achievement-layer" @click="visibleSubmit = false"></div>
      <div class="achievement-box">
        <p class="achievement-num">
          <span>{{ getAnswerState(1) }}</span>分
        </p>
        <div class="achievement-info">
          <div>
            <span>总分</span>
            <br />
            <span>{{ list.length }}分</span>
          </div>
          <div>
            <span>用时</span>
            <br />
            <span>{{ time }}</span>
          </div>
          <div>
            <span>答错</span>
            <br />
            <span>{{ getAnswerState(2) }}道</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { ref, reactive } from "vue";
import Judge from "../data/judge";
import Select from "../data/select";
import MultipleSelect from "../data/multipleSelect";
import Case from "../data/case";
export default {
  name: "bank",
  setup() {
    let type = sessionStorage.getItem("type");

    // 当前题库
    let list = reactive([]);
    let dataArr = [Judge, Select, MultipleSelect, Case];
    list = dataArr[+type - 1];

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

    // 菜单
    let visible = ref(false);
    function hide(e) {
      if (
        e.target.className !== "close hand" &&
        e.target.className !== "iconfont iconlist"
      ) {
        visible.value = false;
      }
    }
    document.addEventListener("click", hide);

    // 当前题目索引
    let curRowIndex = ref(0);

    // 获取题型
    function typeName(curType) {
      let qType = curType || type;
      let arr = ["判断题", "单选题", "多选题", "案例题"];
      return arr[+qType - 1];
    }

    // 选择答案
    function handSelect(code, caseType, index) {
      let thisType = caseType || type;
      let thisObj = list[curRowIndex.value];
      caseType && (thisObj = list[curRowIndex.value].plist[index]);
      // 多选
      if (thisType === "3") {
        if (thisObj.handAnswer) {
          let valueArr = thisObj.handAnswer.split("");
          if (~valueArr.indexOf(code)) {
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
      let box = document.getElementsByClassName("case-box")[0];
      box && (box.scrollTop = 0);
      if (cType === 1 && curRowIndex.value > 0) {
        curRowIndex.value--;
      } else if (cType === 2) {
        if (type === "4") {
          if (list[curRowIndex.value].plist[0].isShow && curRowIndex.value < list.length - 1) {
            curRowIndex.value++;
          } else {
            list[curRowIndex.value].plist.forEach((k) => {
              k.isShow = true;
            });
          }
        } else {
          if (list[curRowIndex.value].isShow && curRowIndex.value < list.length - 1) {
            curRowIndex.value++;
          } else {
            list[curRowIndex.value].isShow = true;
          }
        }
      }
    }

    // 获取答案颜色
    function getAnswerColor(item) {
      let flag = "error";
      if (item.handAnswer === item.answer) {
        flag = "success";
      }
      return flag;
    }

    // 回到首页
    function backHome() {
      window.location.search = "";
    }

    // 提交答案
    let visibleSubmit = ref(false);
    function submit() {
      visibleSubmit.value = true;
      clearInterval(window.timer);
    }
    // 获得正确和错误的题数 state => 1、正确 2、错误
    function getAnswerState(state) {
      let num = 0;
      list.forEach((k) => {
        if (type === "4") {
          if (state === 1) {
            k.plist.every((k) => k.handAnswer === k.answer) && num++;
          } else {
            k.plist.some((k) => k.handAnswer && k.handAnswer !== k.answer) &&
              num++;
          }
        } else {
          if (state === 1) {
            k.handAnswer === k.answer && num++;
          } else {
            k.handAnswer && k.handAnswer !== k.answer && num++;
          }
        }
      });
      return num;
    }

    return {
      type,
      list,
      time,
      visible,
      curRowIndex,
      typeName,
      handSelect,
      changePage,
      getAnswerColor,
      backHome,
      submit,
      visibleSubmit,
      getAnswerState,
    };
  },
};
</script>

<style lang="less" scoped>
@import "../assets/css/base.less";
.bank {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    padding: 0 20px;
    font-size: 18px;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    > div {
      display: flex;
      align-items: center;
      .iconfont {
        margin-right: 5px;
      }
    }
    .clock,
    .close {
      color: @mainColor;
    }
  }
  .menu {
    position: absolute;
    top: 50px;
    left: -50%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 0px 10px 10px;
    background-color: #fff;
    border-right: 1px solid #ddd;
    transition: all 0.5s;
    .menu-header {
      line-height: 40px;
    }
    .menu-list {
      flex: 1;
      height: 80%;
      overflow: auto;
      li {
        float: left;
        width: 30px;
        height: 30px;
        line-height: 28px;
        margin-right: 10px;
        margin-bottom: 10px;
        text-align: center;
        color: @mainColor;
        border: 1px solid @mainColor;
        border-radius: 50%;
        cursor: pointer;
        &.success {
          color: #fff;
          background-color: @mainColor;
        }
        &.error {
          color: #fff;
          border-color: #f36969;
          background-color: #f36969;
        }
      }
    }
  }
  .main-row {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 80%;
    line-height: 40px;
    padding: 20px;
    overflow: auto;
    .title {
      line-height: 24px;
    }
    .case-box {
      flex: 1;
      height: 80%;
      overflow: auto;
    }
    .list {
      margin-top: 20px;
      > li {
        display: flex;
        padding: 10px;
        margin-bottom: 10px;
        line-height: 24px;
        border: 1px solid #ddd;
        border-radius: 3px;
        cursor: pointer;
        &.active {
          border: 1px solid @mainColor;
        }
        > span {
          display: flex;
          align-items: flex-start;
          svg {
            margin-right: 10px;
            margin-top: 2px;
          }
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
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #fff;
    border: 1px solid @mainColor;
    > span {
      flex: 1;
      color: @mainColor;
      border-right: 1px solid @mainColor;
      cursor: pointer;
      &:last-child {
        border: none;
        color: #fff;
        background-color: @mainColor;
      }
    }
  }
  .achievement {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    .achievement-layer {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-color: #000;
      opacity: 0.5;
      z-index: -1;
    }
    .achievement-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 50%;
      height: 50%;
      border-radius: 5px;
      background-color: #fff;
      text-align: center;
      .achievement-num {
        position: relative;
        height: 100px;
        line-height: 100px;
        margin-bottom: 20px;
        font-size: 30px;
        color: @mainColor;
        &::before {
          display: block;
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 100px;
          height: 100px;
          margin-left: -50px;
          border: 1px solid #ddd;
          border-radius: 50%;
          box-shadow: 0 0 15px #ddd;
        }
      }
      .achievement-info {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        text-align: center;
        div {
          span {
            line-height: 30px;
            &:last-child {
              color: @mainColor;
            }
          }
        }
      }
    }
  }
}
</style>