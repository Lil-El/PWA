import Vue from "vue";
import Skeleton from "./skeleton.vue";
import SkeletonA from "./skeletonA.vue";

export default new Vue({
  components: {
    Skeleton,
    SkeletonA,
  },
  template: `<div>
    <Skeleton style="display:none" id="skeleton1"></Skeleton>
    <SkeletonA style="display:none" id="skeleton2"></SkeletonA>
  </div>`,
});
