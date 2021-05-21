import { h } from "vue";
import { QInput, QBtn } from "quasar";

export default {
  name: "Auth",
  props: {
    label: String,
  },

  setup({ label }) {




    function clg() {
      console.log("tst");
    }

    return () => [
      h(QInput, {
        class: "Auth",
        label: "Auth",
      }),
      h(QInput, {
        class: "Auth",
        label: "Auth",
      }),
      h(QBtn, {
        label: `${label}`,
        on: {
          click: clg(),
        },
      }),
    ];
  },
};
