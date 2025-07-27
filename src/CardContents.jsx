import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Sun from "./Sun";
import ExtraDetails from "./ExtraDetails";

import {
  AcUnit,
  Cloud,
  SevereCold,
  Thunderstorm,
  Umbrella,
  WaterDrop,
  WbSunny,
} from "@mui/icons-material";

export default function CardContents({ weatherInfo }) {
  const iconStyle = { fontSize: "large" };

  const weatherIcon = (() => {
    const type = weatherInfo.type;

    if (type === "Thunderstorm") {
      return <Thunderstorm sx={iconStyle} />;
    } else if (type === "Rain" || type === "Drizzle") {
      return <Umbrella sx={iconStyle} />;
    } else if (type === "Snow") {
      return <AcUnit sx={iconStyle} />;
    } else if (type === "Clouds") {
      return <Cloud sx={iconStyle} />;
    } else if (type === "Clear") {
      return <WbSunny sx={iconStyle} />;
    } else if (weatherInfo.humidity > 85) {
      return <WaterDrop sx={iconStyle} />;
    } else if (weatherInfo.temp < 5) {
      return <SevereCold sx={iconStyle} />;
    } else {
      return <WbSunny sx={iconStyle} />;
    }
  })();

  return (
    <>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          {weatherInfo.name}
          <sup style={{ fontSize: "0.6rem" }}> {weatherInfo.country}</sup>
        </Typography>

        <Typography variant="body1" gutterBottom>
          Lat: {weatherInfo.lat}, Lon: {weatherInfo.lon}
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "3.5rem",
              sm: "4.5rem",
              md: "5.5rem",
            },
          }}
        >
          {weatherInfo.temp}&deg;C
        </Typography>

        <Typography
          variant="body1"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {weatherInfo.type} - {weatherInfo.description} &nbsp;
          {weatherIcon}
        </Typography>

        <Box>
          <Typography variant="body2" sx={{ mt: 6 }}>
            Min: {weatherInfo.temp_min}&deg;C / Max: {weatherInfo.temp_max}
            &deg;C
          </Typography>

          <Divider
            variant="middle"
            sx={{ my: 2, mx: -15, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
          />
        </Box>

        <Box sx={{ alignSelf: "start", mt: -3 }}>
          <p>Details:</p>
        </Box>

        <Sun
          sunInfo={{ sunrise: weatherInfo.sunrise, sunset: weatherInfo.sunset }}
        />

        <ExtraDetails
          extraDetails={{
            feelsLike: weatherInfo.feels_like,
            humidity: weatherInfo.humidity,
            windSpeed: weatherInfo.windSpeed,
            pressure: weatherInfo.pressure,
          }}
        />
      </CardContent>
    </>
  );
}
