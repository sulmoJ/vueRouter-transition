<template>
  <div id="app">
    <transition
      :name="transitionName"
      :mode="transitionMode"
      :enter-active-class="transitionEnterActiveClass"
    >
      <router-view />
    </transition>
  </div>
</template>

<script>
const DEFAULT_TRANSITION = "fade";
const DEFAULT_TRANSITION_MODE = "out-in";

export default {
  data() {
    return {
      transitionName: DEFAULT_TRANSITION,
      transitionMode: DEFAULT_TRANSITION_MODE,
      transitionEnterActiveClass: ""
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      let transitionName =
        to.meta.transitionName ||
        from.meta.transitionName ||
        DEFAULT_TRANSITION;

      if (transitionName === "slide")  {
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      }

      this.transitionMode = DEFAULT_TRANSITION_MODE;
      this.transitionEnterActiveClass = `${transitionName}-enter-active`;

      

      if (to.meta.transitionName === "slide") {
        this.transitionMode = "in-out";
        this.transitionEnterActiveClass = `${transitionName}-enter-active`;
        // Disable scrolling in the background.
        document.body.style.overflow = null;
      }else if (from.meta.transitionName === "slide") {
        this.transitionMode = null;
        this.transitionEnterActiveClass = null;
        // Enable scrolling again.
        document.body.style.overflow = null;
      }
      else if ((to.meta.transitionName === "slide")||(from.meta.transitionName === "slide")) {
         
        this.transitionMode = "in-out";
        this.transitionEnterActiveClass = `${transitionName}-enter-active`;
        // Disable scrolling in the background.
        document.body.style.overflow = "hidden";
    
      }

      

      this.transitionName = transitionName;
      next();
    });
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
}
.mainContainer {
  width: 40%;
  height: 1000px;
  border: solid 1px black;
  position: fixed;
}

/* 페이지 이동 에니메이션 */
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-left-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
