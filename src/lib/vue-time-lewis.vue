<template>
    <div class="time-lewis-container">
        <section class="time-box">
            <header class="time-header">
               <span class="cancel font-28">取消</span>
                <span class="link">
                  <a href="#" class="font-24">智能分析</a>
                  <img src="http://p72g2g35a.bkt.clouddn.com/entry.svg" alt="">
                </span>
               <span class="ok font-28">确定</span>
            </header>
            <section class="time-center">
               <span class="font-100">6<sub class="font-28">小时</sub></span>
            </section>
            <footer class="time-footer">
               <div class="time-point">
                 <img src="http://p72g2g35a.bkt.clouddn.com/time-select-pointer.png" alt="">
               </div>
               <div class="time-line wrapper" ref="wrapper">
                 <ul
                        class="time-line-ul content"
                        ref="wrapper_ul"
                         @touchstart.stop.prevent="touchstart"
                          @touchmove.stop.prevent="touchmove"
                        @touchend.stop.prevent="touchend">
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
    return {};
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    initScroll() {
      const lis = this.$refs.wrapper_ul.querySelectorAll("li");
      let lisW = this.isIphone()
        ? window.screen.width / 3
        : window.screen.width / 6;
      lis.forEach((item, index) => {
        item.style.width = lisW + "px";
        lis[lis.length - 1].style.width = 0 + "px";
      });
      this.$refs.wrapper_ul.style.width = lisW * 24 + "px";

      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          startX: 0,
          startY: 0,
          scrollX: true,
          scrollY: false,
          eventPassthrough: "vertical"
        });
      } else {
        this.scroll.refresh();
      }
    },
    isIphone() {
      if (/android/i.test(navigator.userAgent)) {
        return false;
      }
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        return true;
      }
    },
    touchend() {
      console.log(this.scroll);
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

.time-lewis-container .time-box .time-center {
  width: 100%;
  text-align: center;
  margin-top: 0.453rem;
  margin-bottom: 0.4933rem;
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
  border-top: 1px solid rgba(216, 216, 216, 0.2);
  font-size: 0;
  display: flex;
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
  top: 0;
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
