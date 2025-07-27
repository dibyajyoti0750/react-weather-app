import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import WeatherApp from "./WeatherApp";

const theme = createTheme({
  typography: {
    fontFamily: "'Outfit', sans-serif",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <WeatherApp />
    </ThemeProvider>
  );
}
