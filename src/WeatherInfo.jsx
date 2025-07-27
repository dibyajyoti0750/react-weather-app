import Card from "@mui/material/Card";
import CardContents from "./CardContents";

export default function WeatherInfo({ weatherInfo }) {
  return (
    <Card
      sx={{
        width: "80vw",
        maxWidth: "450px",
        padding: 2,
        mx: "auto",
        mt: 2.2,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: 4,
        color: "white",
      }}
    >
      <CardContents weatherInfo={weatherInfo} />
    </Card>
  );
}
