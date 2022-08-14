import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";

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

const theme = createTheme({
	palette: {
		primary: {
			main: "#ef773b",
			contrastText: "#fff",
		},
		secondary: {
			main: "#225a49",
		},
		quizColor: {
			main: "#CCD4D7",
			light: "F2F8FA",
			contrastText: "#000",
		},
	},
	typography: {
		fontFamily: ["Raleway", "sans-serif"].join(","),
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: "contained",
			},
		},
	},
});

export const CustomTheme = ({ children }: { children: ReactNode }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
