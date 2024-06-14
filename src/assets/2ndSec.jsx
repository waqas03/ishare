import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { Grid } from "@mui/material";
import UserCard from "./Card";

export default function ScnBox() {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: { xs: 25, sm: 15 },
        }}
      >
        <Grid
          container
          bgcolor={"#4D2C5E"}
          width={"95%"}
          paddingX={1}
          paddingY={6}
          borderRadius={"14px"}
          sx={{
            marginTop: { xs: "0px", sm: "-115px" },
            height: { xs: "auto", sm: "auto", md: "230px" },
          }}
          alignItems={"center"}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box sx={{ marginX: "auto", marginY: { xs: "20px", sm: "0px" } }}>
                <Box
                  marginX={"15px"}
                  bgcolor={"#ffffff6b"}
                  borderRadius={"23px"}
                  padding={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img style={{ width: "40px" }} src="public\onlineTest.png" />
                </Box>
              </Box>
              <Box sx={{ textAlign: { xs: "center", sm: "start" } }}>
                <Typography variant="h5" fontWeight={"bold"} color={"white"}>
                  Learn The Latest Skills
                </Typography>
                <Typography color={"white"} sx={{ opacity: "0.7", marginY: 1 }}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box sx={{ marginX: "auto", marginY: { xs: "20px", sm: "0px" } }}>
                <Box
                  marginX={"15px"}
                  bgcolor={"#ffffff6b"}
                  borderRadius={"23px"}
                  padding={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img style={{ width: "40px" }} src="public\onlineTest.png" />
                </Box>
              </Box>
              <Box sx={{ textAlign: { xs: "center", sm: "start" } }}>
                <Typography variant="h5" fontWeight={"bold"} color={"white"}>
                  Learn The Latest Skills
                </Typography>
                <Typography color={"white"} sx={{ opacity: "0.7", marginY: 1 }}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box sx={{ marginX: "auto", marginY: { xs: "20px", sm: "0px" } }}>
                <Box
                  marginX={"15px"}
                  bgcolor={"#ffffff6b"}
                  borderRadius={"23px"}
                  padding={2}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <img style={{ width: "40px" }} src="public\onlineTest.png" />
                </Box>
              </Box>
              <Box sx={{ textAlign: { xs: "center", sm: "start" } }}>
                <Typography variant="h5" fontWeight={"bold"} color={"white"}>
                  Learn The Latest Skills
                </Typography>
                <Typography color={"white"} sx={{ opacity: "0.7", marginY: 1 }}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a BC, making it over 2000 years old.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
        marginTop={5}
      >
        <Box width={"100%"}>
          <Box display={"flex"} justifyContent={"center"}>
            <Typography variant="h3" fontWeight={"bold"}>
              Our Services
            </Typography>
          </Box>
          <UserCard />
        </Box>
      </Box>
    </>
  );
}
