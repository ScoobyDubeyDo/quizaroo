import { VisibilityOffOutlined, VisibilityOutlined } from "@mui/icons-material";
import {
	Box,
	Button,
	InputAdornment,
	Stack,
	TextField,
	TextFieldProps,
	Typography,
} from "@mui/material";
import signupImg from "../../asset/signup.svg";

const commonTextFieldProps: TextFieldProps = {
	required: true,
	fullWidth: true,
	size: "small",
	margin: "dense",
	variant: "outlined",
	color: "secondary",
};

export const SignIn = () => {
	return (
		<Stack
			direction="column"
			justifyContent="space-between"
			alignItems="center"
			padding="2.5rem"
			margin="auto"
			sx={(theme) => ({
				height: "100vh",
				maxWidth: theme.breakpoints.values.sm,
			})}
		>
			<Typography
				align="center"
				variant="h5"
				sx={({ typography }) => ({
					fontWeight: typography.fontWeightBold,
					textTransform: "uppercase",
				})}
			>
				Quizaroo
			</Typography>
			<Stack
				justifyContent="flex-end"
				alignItems="center"
				sx={({ palette }) => ({
					width: 250,
					height: 250,
					bgcolor: palette.primary.light,
					borderRadius: "50%",
				})}
			>
				<img
					width="360"
					height="360"
					alt="Quizaroo the wolf"
					src={signupImg}
				/>
			</Stack>
			<Box component="form" noValidate autoComplete="off" width="100%">
				<TextField
					type="email"
					label="Email Id"
					{...commonTextFieldProps}
				/>
				<TextField
					type="password"
					label="Password"
					{...commonTextFieldProps}
					InputProps={{
						endAdornment: (
							<InputAdornment
								position="end"
								onClick={() => console.log("switch")}
							>
								<VisibilityOutlined />
							</InputAdornment>
						),
					}}
				/>
			</Box>
			<Stack width="100%" spacing={1}>
				<Button fullWidth>Sign in</Button>
				<Button
					fullWidth
					variant="text"
					sx={{
						textTransform: "unset",
					}}
				>
					Create new account
				</Button>
			</Stack>
		</Stack>
	);
};
