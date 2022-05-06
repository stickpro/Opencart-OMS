import VSvg from "@/components/controls/VSvg/VSvg.vue";
import "virtual:svg-icons-register";

export default {
  install: (app) => {
    app.component("v-svg", VSvg);
  },
};
