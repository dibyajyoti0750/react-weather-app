import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SunnyIcon from "@mui/icons-material/Sunny";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

export default function Sun({ sunInfo }) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          mt: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <SunnyIcon fontSize="small" sx={{ color: "yellow" }} />
          <Typography variant="body2" gutterBottom sx={{ m: 0 }}>
            {new Date(sunInfo.sunrise * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            flexGrow: 1,
            height: "2px",
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            mx: 2,
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              transform: "translateY(-50%)",
              width: 0,
              height: 0,
              borderTop: "5px solid transparent",
              borderBottom: "5px solid transparent",
              borderLeft: "10px solid rgba(255, 255, 255, 0.8)",
            }}
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WbTwilightIcon fontSize="small" color="warning" />
          <Typography variant="body2" gutterBottom sx={{ m: 0 }}>
            {new Date(sunInfo.sunset * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
