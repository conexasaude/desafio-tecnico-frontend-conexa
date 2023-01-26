import "../src/styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import "react-calendar/dist/Calendar.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "#FFFFFB",
  },
};
