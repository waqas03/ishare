import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
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
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";

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

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.level1 : "#fff",
  ...theme.typography["body-sm"],
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
}));

const materialTheme = extendMaterialTheme();

export default function HeroSection() {
  return (
    <MaterialCssVarsProvider theme={{ [THEME_ID]: materialTheme }}>
      <JoyCssVarsProvider theme={{ [JoyTHEME_ID]: Joytheme }}>
        <CssBaseline enableColorScheme />
        {/* <ModeToggle /> */}
        <Grid container sx={{ flexGrow: 1 }} marginTop={3} padding={3}>
          {Array.from(Array(3)).map((_, index) => (
            <Grid xs={12} sm={4} key={index} padding={1}>
              <Card variant="outlined" sx={{ width: "auto" }}>
                <CardOverflow>
                  <AspectRatio ratio="2">
                    <img src="hello.png" alt="img" />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="title-md">
                    Yosemite National Park
                  </Typography>
                  <Typography level="body-sm">California</Typography>
                </CardContent>
                <CardOverflow
                  variant="soft"
                  sx={{ bgcolor: "background.level1" }}
                >
                  <Divider inset="context" />
                  <CardContent orientation="horizontal">
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      6.3k views
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      1 hour ago
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      1 hour ago
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      1 hour ago
                    </Typography>
                  </CardContent>
                </CardOverflow>
              </Card>
            </Grid>
          ))}
        </Grid>
      </JoyCssVarsProvider>
    </MaterialCssVarsProvider>
  );
}
