import { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		quizColor: Palette["primary"];
	}

	interface PaletteOptions {
		quizColor?: PaletteOptions["primary"];
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		quizColor: true;
	}
}

const { palette } = createTheme();
const theme = createTheme({
	palette: {
		primary: {
			main: "#ef773b",
			contrastText: "#fff",
		},
		secondary: {
			main: "#225a49",
		},
		quizColor: palette.augmentColor({
			color: { main: "#cfd8dc" },
		}),
	},
	typography: {
		fontFamily: ["Raleway", "sans-serif"].join(","),
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained",
				size: "large",
			},
			styleOverrides: {
				root: {
					textTransform: "capitalize",
				},
			},
		},
	},
});

export const CustomTheme = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
