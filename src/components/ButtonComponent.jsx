import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import {
  createTheme,
  ThemeProvider,
  alpha,
  getContrastRatio,
} from "@mui/material/styles";

const orangeBase = "#EE4700";
const orangeMain = alpha(orangeBase, 0.7);

const theme = createTheme({
  palette: {
    orange: {
      main: orangeMain,
      light: alpha(orangeBase, 0.5),
      dark: alpha(orangeBase, 0.9),
      contrastText:
        getContrastRatio(orangeMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },
});

const ButtonComponent = ({ title, type, setShowMoveDetails }) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row" spacing={2}>
        <Button
          color="orange"
          variant={type}
          onClick={() => {
            setShowMoveDetails((prev) => !prev);
          }}
          sx={{ color: type == "outlined" ? orangeBase : "#fff" ,textTransform: 'none'}}
        >
          {title}
        </Button>
      </Stack>
    </ThemeProvider>
  );
};

export default ButtonComponent;
