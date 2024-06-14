import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, IconButton, Link, Typography } from "@mui/material";
import HomeCard from "./Card";
import { FaHotel } from "react-icons/fa";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  width: "100%",
  color: theme.palette.text.secondary,
}));

export const Home = () => {
  return (
    <Box>
    <Box >
      <HomeCard />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            float: "right",
            display: "flex",
            flexDirection: "column",
            marginTop: 4,
            marginBottom: 2,
          }}
        >
          <Button variant="contained">my credits:1000</Button>
          <Link textAlign={"center"} sx={{ cursor: "pointer" }}>
            <small>click here to topup</small>
          </Link>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {[
          { name: "Hotel", icon: <FaHotel size={40} color="darkorange" /> },
          { name: "Hotel", icon: <FaHotel size={40} color="darkorange" /> },
          { name: "Hotel", icon: <FaHotel size={40} color="darkorange" /> },
          { name: "Hotel", icon: <FaHotel size={40} color="darkorange" /> },
        ].map((val, ind) => (
          <Grid
            item
            xs={6}
            key={ind}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Item sx={{ cursor: "pointer" }} elevation={3}>
              <Box sx={{ marginY: 2 }}>
                {val.icon}
                <Typography marginTop={2}>{val.name}</Typography>
              </Box>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Box>
  );
};
