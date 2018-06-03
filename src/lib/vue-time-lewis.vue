<template>
    <div class="time-lewis-container">
        <section class="time-box">
            <header class="time-header">
               <span class="cancel font-28" @click="handleCancel">取消</span>
                <span class="link">
                  <a :href="linkSrc" class="font-24">智能分析</a>
                  <img src="http://p72g2g35a.bkt.clouddn.com/entry.svg" alt="">
                </span>
               <span class="ok font-28" @click="handleSubmit">确定</span>
            </header>
            <section class="time-center">
               <span class="font-100"><i>{{hours}}<sub class="font-28">小时</sub></i><i class="minite" v-if="minite">{{minite}}<sub class="font-28">分钟</sub></i></span>
            </section>
            <footer class="time-footer">
               <div class="time-point">
                 <img src="http://p72g2g35a.bkt.clouddn.com/time-select-pointer.png" alt="">
               </div>
               <div class="time-line wrapper" ref="wrapper">
                 <ul
                        class="time-line-ul content"
                        ref="wrapper_ul"

                  >
                   <li class="font-28">
                     <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>0</b>
                    </li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>1</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>2</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>3</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>4</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>5</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>6</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>7</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>8</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>9</b>
                     </li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>10</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>11</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>12</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>13</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>14</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>15</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>16</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>17</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>18</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>19</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>20</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>21</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>22</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>23</b></li>
                   <li class="font-28">
                      <span>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                       <i></i>
                     </span>
                     <b>24</b></li>
                     <div class="suggestTime" ref="sgt"></div>
                 </ul>
               </div>
            </footer>
        </section>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "vue-time-lewis",
  data() {
    return {
      hours: 6, //小时
      minite: 30, //分钟,
      STime: "" //当前选择的时间
      // selectedTime: 53400000, //上次选择的时间
      // suggestTime: 48000000 //建议时长
    };
  },
  props: {
    selectedTime: {
      type: Number,
      default: 53400000 //上次选择的时间
    },
    suggestTime: {
      type: Number,
      default: 48000000 //建议时长
    },
    linkSrc: {
      type: String,
      default: "http://www.bilibili.com",
      required: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
      this.initTime();
    });
  },
  methods: {
    initScroll() {
      const lis = this.$refs.wrapper_ul.querySelectorAll("li");
      this.lisW = this.isIphone()
        ? window.screen.width / 3
        : window.screen.width / 6;
      let self = this;
      lis.forEach((item, index) => {
        item.style.width = self.lisW + "px";
        lis[lis.length - 1].style.width = 0 + "px";
      });
      if (!this.$refs.wrapper) {
        return;
      }
      this.$refs.wrapper_ul.style.width = self.lisW * 24 + "px";
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          startX: 0,
          startY: 0,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical"
        });
        //设置监听滚动位置
        this.scroll.on("scrollEnd", pos => {
          //计算当前选中的时间
          console.log(pos.x);
          let temTime = Math.abs(Math.round(pos.x)) / self.lisW;
          self.setTime(temTime);
        });
      } else {
        this.scroll.refresh();
      }
    },
    initTime() {
      let initX = this.selectedTime / 3600000 * this.lisW; //初始选择时间
      let sgtX =
        (this.suggestTime / 3600000 + 3) * this.lisW -
        this.$refs.sgt.offsetWidth / 2; //建议选择时间
      this.$refs.wrapper_ul.style.transform = `translateX(-${initX}px)`;
      this.setTime(this.selectedTime / 3600000);
      this.$refs.sgt.style.left = sgtX + "px";
    },
    setTime(temTime) {
      let hours = parseInt(temTime);
      let minite =
        Math.round(String(temTime.toFixed(2)).split(".")[1] / 1000 * 60) * 10;
      this.minite = minite === 0 || minite === 60 ? "" : minite;
      this.hours = minite === 60 ? hours + 1 : hours;
    },
    isIphone() {
      if (/android/i.test(navigator.userAgent)) {
        return false;
      }
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return true;
      }
    },
    handleSubmit() {
      // 确定最终的数字
      this.STime = this.hours * 60 * 60 * 1000 + this.minite * 60 * 1000;
      console.log(this.STime);
      this.$emit("getTime", this.STime);
    },
    handleCancel() {
      //通过父组件v-if来控制 组件的销毁,取消弹出层
      this.$emit("hideTP");
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
[data-dpr="1"] .font-28 {
  font-size: 14px;
}

[data-dpr="2"] .font-28 {
  font-size: 28px;
}

[data-dpr="3"] .font-28 {
  font-size: 42px;
}

[data-dpr="1"] .font-32 {
  font-size: 16px;
}

[data-dpr="2"] .font-32 {
  font-size: 32px;
}

[data-dpr="3"] .font-32 {
  font-size: 48px;
}

[data-dpr="1"] .font-100 {
  font-size: 50px;
}

[data-dpr="2"] .font-100 {
  font-size: 100px;
}

[data-dpr="3"] .font-100 {
  font-size: 150px;
}

[data-dpr="1"] .font-24 {
  font-size: 12px;
}

[data-dpr="2"] .font-24 {
  font-size: 24px;
}

[data-dpr="3"] .font-24 {
  font-size: 36px;
}

[data-dpr="1"] .font-30 {
  font-size: 15px;
}

[data-dpr="2"] .font-30 {
  font-size: 30px;
}

[data-dpr="3"] .font-30 {
  font-size: 45px;
}
.time-lewis-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  z-index: 3000;
  color: #fff;
}
.time-lewis-container .time-box {
  width: 100%;
  height: 7.7867rem;
  background-image: radial-gradient(50% 106%, #0d0a34 70%, #070a21 100%);
  position: fixed;
  bottom: 0;
  padding-top: 0.533rem;
}
.time-lewis-container .time-box .time-header {
  position: relative;
  height: 0.6133rem;
  line-height: 0.6133rem;
}
.time-lewis-container .time-box .time-header span.ok {
  float: right;
  padding-right: 0.4rem;
  letter-spacing: 0.23px;
}
.time-lewis-container .time-box .time-header span.cancel {
  float: left;
  padding-left: 0.4rem;
  letter-spacing: 0.23px;
}
.time-lewis-container .time-box .time-header span.link {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 100px;
  padding: 0 0.266rem;
  box-sizing: border-box;
}
.time-lewis-container .time-box .time-header span.link a {
  color: #ffffff;
  letter-spacing: 0.2px;
  padding-right: 0.133rem;
}

.time-lewis-container .time-box .time-header span.link img {
  width: 0.2267rem;
  height: 0.24rem;
}

.time-lewis-container .time-box .time-center {
  width: 100%;
  text-align: center;
  margin-top: 0.453rem;
  margin-bottom: 0.4933rem;
}
.time-lewis-container .time-box .time-center i {
  font-style: normal;
}
.time-lewis-container .time-box .time-center sub {
  bottom: 0;
  padding-left: 0.133rem;
}
.time-lewis-container .time-box footer.time-footer {
  position: relative;
}
.time-lewis-container .time-box footer.time-footer .time-point {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 250;
}
.time-lewis-container .time-box footer.time-footer .time-point > img {
  width: 1.44rem;
  height: 2.7066rem;
}

.time-lewis-container .time-box footer.time-footer .time-line {
  position: absolute;
  top: 1.986rem;
  height: 2rem;
  width: 100vw;
}
.time-lewis-container .time-box footer.time-footer .time-line .time-line-ul {
  height: 1.8rem;
  padding-left: calc(100vw / 2);
  padding-right: calc(100vw / 2);
  font-size: 0;
  display: flex;
}

.time-lewis-container
  .time-box
  footer.time-footer
  .time-line
  .time-line-ul
  div.suggestTime {
  display: inline-block;
  background: url(http://p72g2g35a.bkt.clouddn.com/time-flag.svg) no-repeat;
  background-size: contain;
  width: 0.5333rem;
  height: 0.5333rem;
  position: absolute;
  left: 0;
  top: -0.2666rem;
}

.time-lewis-container
  .time-box
  footer.time-footer
  .time-line
  .time-line-ul
  > li {
  float: left;
  outline-style: none;
  position: relative;
  border-top: 1px solid rgba(216, 216, 216, 0.2);
  cursor: pointer;
}
.time-lewis-container
  .time-box
  footer.time-footer
  .time-line
  .time-line-ul
  > li::before {
  content: "";
  width: 0.08rem;
  height: 0.08rem;
  line-height: 0.08rem;
  border-radius: 0.08rem;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: -0.04rem;
}

.time-lewis-container
  .time-box
  footer.time-footer
  .time-line
  .time-line-ul
  > li
  > span {
  width: 100%;
  height: 1px;
  display: flex;
  justify-content: space-between;
}
.time-lewis-container
  .time-box
  footer.time-footer
  .time-line
  .time-line-ul
  > li
  > span
  > i {
  font-style: normal;
  width: 0.0533rem;
  height: 0.0533rem;
  line-height: 0.0533rem;
  background: #232638;
  display: inline-block;
}
.time-lewis-container
  .time-box
  footer.time-footer
  .time-line
  .time-line-ul
  > li
  > span
  > i:first-of-type,
.time-lewis-container
  .time-box
  footer.time-footer
  .time-line
  .time-line-ul
  > li
  > span
  > i:last-of-type {
  background-color: transparent;
}
.time-lewis-container
  .time-box
  footer.time-footer
  .time-line
  .time-line-ul
  > li
  > b {
  font-weight: normal;
  position: absolute;
  left: -0.18rem;
  top: 0.9733rem;
}
</style>
