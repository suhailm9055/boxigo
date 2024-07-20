import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { createTheme,ThemeProvider, alpha, getContrastRatio } from '@mui/material/styles';

const orangeBase = '#ff5722';
const orangeMain = alpha(orangeBase, 0.7);

const theme = createTheme({
  palette: {
    orange: {
      main: orangeMain,
      light: alpha(orangeBase, 0.5),
      dark: alpha(orangeBase, 0.9),
      contrastText: getContrastRatio(orangeMain, '#fff') > 4.5 ? '#fff' : '#111',
    },
  },
});

const ButtonComponent = ({ title, type }) => {
  return (
    <ThemeProvider theme={theme}>
    <Stack direction="row" spacing={2}>
      <Button 
      color="orange"
       variant={type}
       sx={{color:type == "outlined" ?  orangeBase :  '#fff'}}>
        {title}
      </Button>
    </Stack>
  </ThemeProvider>

  );
};

export default ButtonComponent;
// className="myButton"