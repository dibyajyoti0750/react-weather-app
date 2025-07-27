import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import Alert from "@mui/material/Alert";

export default function Search({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  const endPoint = "https://api.openweathermap.org/data/2.5/weather";
  const key = "a2b8ffa3a34c5cab924af7f05c6fca32";

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      let newInfo = await getWeatherInfo();
      setError(false);
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      setError(true);
    }
  };

  const getWeatherInfo = async () => {
    try {
      let res = await fetch(`${endPoint}?q=${city}&appid=${key}&units=metric`);
      let jsonRes = await res.json();

      let result = {
        name: jsonRes.name,
        country: jsonRes.sys.country,
        lat: jsonRes.coord.lat,
        lon: jsonRes.coord.lon,
        sunrise: jsonRes.sys.sunrise,
        sunset: jsonRes.sys.sunset,
        feels_like: jsonRes.main.feels_like,
        humidity: jsonRes.main.humidity,
        temp: jsonRes.main.temp,
        temp_max: jsonRes.main.temp_max,
        temp_min: jsonRes.main.temp_min,
        windSpeed: jsonRes.wind.speed,
        pressure: jsonRes.main.pressure,
        type: jsonRes.weather[0].main,
        description: jsonRes.weather[0].description,
      };

      return result;
    } catch (err) {
      throw err;
    }
  };

  return (
    <>
      {error && (
        <Box
          sx={{
            mx: "auto",
            mt: 4,
            width: "90%",
            maxWidth: "600px",
          }}
        >
          <Alert
            severity="warning"
            variant="filled"
            onClose={() => setError(false)}
          >
            Sorry, city not found!
          </Alert>
        </Box>
      )}

      <Box
        sx={{
          mx: "auto",
          pt: {
            xs: 2.2,
            xm: 2.2,
            md: 10,
          },
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <form onSubmit={handleFormSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
            }}
          >
            <TextField
              onChange={handleInputChange}
              id="city"
              label="Search for city or place..."
              variant="outlined"
              value={city}
              required
              fullWidth
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(6px)",
                borderRadius: "8px",
                input: {
                  color: "#EFEFEF",
                },
                label: {
                  color: "#EFEFEF",
                },
                "& label.Mui-focused": {
                  color: "#EFEFEF",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    border: "none",
                  },
                  "&:hover fieldset": {
                    border: "none",
                  },
                  "&.Mui-focused fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="outlined"
              sx={{
                color: "#EFEFEF",
                borderColor: "#EFEFEF",
                borderRadius: "12px",
                textTransform: "none",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                px: 3,
                py: 1.5,
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#EFEFEF",
                },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              Search
            </Button>
          </Box>
        </form>
      </Box>
    </>
  );
}
