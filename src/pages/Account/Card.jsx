import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { FcGoogle } from "react-icons/fc";
import { GrLinkPrevious } from "react-icons/gr";
import { MdLogout } from "react-icons/md";
import IconButton from "@mui/material/IconButton";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function HomeCard() {
  return (
    <Card sx={{ width: "auto", paddingY:2 }}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <FcGoogle size={60} />
            <Box sx={{ marginX: 2 }}>
              <Typography>Welcome,</Typography>
              <Typography variant="h5" fontWeight={'bold'}>Ahsan Elahi</Typography>
            </Box>
          </Box>
          <Box>
            <IconButton>
              <MdLogout />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
