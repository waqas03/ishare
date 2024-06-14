import * as React from "react";
import {
  useColorScheme as useMaterialColorScheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  experimental_extendTheme as extendMaterialTheme,
  THEME_ID,
} from "@mui/material/styles";
import { extendTheme } from "@mui/joy/styles";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";

// Material UI components
import CssBaseline from "@mui/material/CssBaseline";

// Icons
import DarkMode from "@mui/icons-material/DarkMode";
import LightMode from "@mui/icons-material/LightMode";
// Joy UI components
import { Box, Button, Grid, Typography } from "@mui/joy";

import {
  CssVarsProvider as JoyCssVarsProvider,
  useColorScheme as useJoyColorScheme,
  THEME_ID as JoyTHEME_ID,
} from "@mui/joy/styles";

const info = {
  50: "#fce4ec",
  100: "#f8bbd0",
  200: "#f48fb1",
  300: "#f06292",
  400: "#ec407a",
  500: "#e91e63",
  600: "#d81b60",
  700: "#c2185b",
  800: "#ad1457",
  900: "#880e4f",
};

const Joytheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        info: {
          ...info,
          plainColor: `var(--joy-palette-info-600)`,
          plainHoverBg: `var(--joy-palette-info-100)`,
          plainActiveBg: `var(--joy-palette-info-200)`,
          plainDisabledColor: `var(--joy-palette-info-200)`,
          outlinedColor: `var(--joy-palette-info-500)`,
          outlinedBorder: `var(--joy-palette-info-200)`,
          outlinedHoverBg: `var(--joy-palette-info-100)`,
          outlinedHoverBorder: `var(--joy-palette-info-300)`,
          outlinedActiveBg: `var(--joy-palette-info-200)`,
          outlinedDisabledColor: `var(--joy-palette-info-100)`,
          outlinedDisabledBorder: `var(--joy-palette-info-100)`,
          softColor: `var(--joy-palette-info-600)`,
          softBg: `var(--joy-palette-info-100)`,
          softHoverBg: `var(--joy-palette-info-200)`,
          softActiveBg: `var(--joy-palette-info-300)`,
          softDisabledColor: `var(--joy-palette-info-300)`,
          softDisabledBg: `var(--joy-paletteinfo}-50)`,
          solidColor: "#fff",
          solidBg: `var(--joy-palette-info-500)`,
          solidHoverBg: `var(--joy-palette-info-600)`,
          solidActiveBg: `var(--joy-palette-info-700)`,
          solidDisabledColor: `#fff`,
          solidDisabledBg: `var(--joy-palette-info-200)`,
        },
      },
    },
    dark: {
      palette: {
        info: {
          ...info,
          plainColor: `var(--joy-palette-info-300)`,
          plainHoverBg: `var(--joy-palette-info-800)`,
          plainActiveBg: `var(--joy-palette-info-700)`,
          plainDisabledColor: `var(--joy-palette-info-800)`,
          outlinedColor: `var(--joy-palette-info-200)`,
          outlinedBorder: `var(--joy-palette-info-700)`,
          outlinedHoverBg: `var(--joy-palette-info-800)`,
          outlinedHoverBorder: `var(--joy-palette-info-600)`,
          outlinedActiveBg: `var(--joy-palette-info-900)`,
          outlinedDisabledColor: `var(--joy-palette-info-800)`,
          outlinedDisabledBorder: `var(--joy-palette-info-800)`,
          softColor: `var(--joy-palette-info-200)`,
          softBg: `var(--joy-palette-info-900)`,
          softHoverBg: `var(--joy-palette-info-800)`,
          softActiveBg: `var(--joy-palette-info-700)`,
          softDisabledColor: `var(--joy-palette-info-800)`,
          softDisabledBg: `var(--joy-palette-info-900)`,
          solidColor: `#fff`,
          solidBg: `var(--joy-palette-info-600)`,
          solidHoverBg: `var(--joy-palette-info-700)`,
          solidActiveBg: `var(--joy-palette-info-800)`,
          solidDisabledColor: `var(--joy-palette-info-700)`,
          solidDisabledBg: `var(--joy-palette-info-900)`,
        },
      },
    },
  },
});

const ModeToggle = () => {
  const { mode, setMode } = useMaterialColorScheme();
  const { setMode: setJoyMode } = useJoyColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      onClick={() => {
        setMode(mode === "dark" ? "light" : "dark");
        setJoyMode(mode === "dark" ? "light" : "dark");
      }}
    >
      {mode === "dark" ? <DarkMode /> : <LightMode />}
    </IconButton>
  );
};

const materialTheme = extendMaterialTheme();


export default function HeroSection() {
  return (
    <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider theme={{ [JoyTHEME_ID]: Joytheme }}>
        <CssBaseline enableColorScheme />
        {/* <ModeToggle /> */}
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundImage: "url('public/icon.svg')",
            backgroundSize: "cover",
            height: { xs: "auto", sm: "90vh" },
            padding: 3,
          }}
        >
          <Grid xs={12} sm={7}>
            <Box>
              <Typography
                sx={{ color: "black",lineHeight:"80px" }}
                variant="h2"
                fontWeight={"bold"}
                fontSize={"69px"}
              >
                The <span style={{ color: "#FF7426" }}> Smart</span> <br />
                Choice For <span style={{ color: "#FF7426" }}>Future</span>
              </Typography>
              <Typography className={"first"} variant="h2" fontSize={"20px"} marginY={3}>
                Elearn is a global training provider based across the UK that
                specialises in accredited and bespoke training courses. We crush
                the...
              </Typography>
              <Input
                size="lg"
                startDecorator={<KeyRoundedIcon />}
                placeholder="Search for a location..."
                type="password"
                endDecorator={
                  <Button color="info" sx={{ borderRadius: "30px" }}>
                    Continue
                  </Button>
                }
                sx={{ maxWidth: "50%", borderRadius: "40px" }}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={5}>
            <Box>
              <img
                src="public\hero.png"
                style={{ maxWidth: "100%" }}
                alt="HeroImage"
              />
            </Box>
          </Grid>
        </Grid>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
