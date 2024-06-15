import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Divider, IconButton, Link, Typography } from "@mui/material";
import HomeCard from "./Card";
import { FaHotel } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  width: "100%",
  color: theme.palette.text.secondary,
}));

export const Account = () => {
  return (
    <Box>
      <Box>
        <HomeCard />
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              float: "left",
              display: "flex",
              flexDirection: "column",
              marginTop: 4,
              marginBottom: 2,
            }}
          >
            <Button variant="contained" size="small">
              my mypoints:1000
            </Button>
          </Box>
          <Box
            sx={{
              float: "right",
              display: "flex",
              flexDirection: "column",
              marginTop: 4,
              marginBottom: 2,
            }}
          >
            <Button variant="contained" size="small">
              my credits:1000
            </Button>
            <Link textAlign={"center"} sx={{ cursor: "pointer" }}>
              <small>click here to topup</small>
            </Link>
          </Box>
        </Box>
        <Grid container spacing={2}>
          {[{ name: "Hotel" }].map((val, ind) => (
            <Grid item xs={12} key={ind}>
              <Item sx={{ cursor: "pointer" }} elevation={3}>
                <Box sx={{ marginY: 2 }}>
                  <Typography marginTop={2} fontWeight={"bold"}>
                    Whats New
                  </Typography>
                  <Divider sx={{marginY:2}}/>
                  <img style={{width:"100%"}} src="public\hero.png" alt="hero"/>
                </Box>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
