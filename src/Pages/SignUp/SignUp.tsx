import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import signinImg from "../../asset/signin.svg";
import {
	Button,
	InputAdornment,
	TextField,
	TextFieldProps,
	Typography,
	Box,
	Stack,
} from "@mui/material";

const commonTextFieldProps: TextFieldProps = {
	required: true,
	fullWidth: true,
	size: "small",
	margin: "dense",
	variant: "outlined",
	color: "secondary",
};

export const SignUp = () => {
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
					src={signinImg}
				/>
			</Stack>
			<Box component="form" width="100%" noValidate autoComplete="off">
				<TextField
					type="text"
					label="Username"
					{...commonTextFieldProps}
				/>
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
				<Button fullWidth>Sign up</Button>
				<Button
					fullWidth
					variant="text"
					sx={{
						textTransform: "unset",
					}}
				>
					I already have an account
				</Button>
			</Stack>
		</Stack>
	);
};
