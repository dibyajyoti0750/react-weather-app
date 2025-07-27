import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ExtraDetails({ extraDetails }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          mt: 3,
        }}
      >
        {[
          { label: "RealFeel", value: `${extraDetails.feelsLike}°C` },
          { label: "Humidity", value: `${extraDetails.humidity}%` },
          { label: "Wind", value: `${extraDetails.windSpeed} m/s` },
          { label: "Pressure", value: extraDetails.pressure },
        ].map((item, idx) => (
          <Box key={idx} sx={{ textAlign: "center" }}>
            <Typography variant="body1" gutterBottom>
              {item.value}
            </Typography>
            <Typography variant="body2">{item.label}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
}
