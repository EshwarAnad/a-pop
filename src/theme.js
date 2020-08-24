import { createMuiTheme } from "@material-ui/core/styles";
import { deepPurple, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: pink[600],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
  typography: {
    // Use the system font.
    fontSize: 12,
    fontFamily: "Balsamiq Sans",
  },
  overrides: {
    MuiSlider: {
      thumb: {
        color: "white",
      },
      track: {
        color: "green",
      },
      rail: {
        color: "grey",
      },
    },
  },
});

export default theme;
