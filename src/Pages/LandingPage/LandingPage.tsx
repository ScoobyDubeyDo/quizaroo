import { Button, Container, Stack, Typography } from "@mui/material";
import welcomeImg from "../../asset/welcome.svg";

export const LandingPage = () => {
	return (
		<Container
			maxWidth={false}
			sx={({ palette }) => ({
				bgcolor: palette.secondary.main,
			})}
		>
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
					variant="h4"
					sx={({ typography, palette }) => ({
						fontWeight: typography.fontWeightMedium,
						color: palette.secondary.contrastText,
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
						bgcolor: palette.secondary.light,
						borderRadius: "50%",
					})}
				>
					<img
						width="360"
						height="360"
						alt="Quizaroo the wolf"
						src={welcomeImg}
					/>
				</Stack>
				<Typography
					align="center"
					variant="h5"
					sx={({ typography, palette }) => ({
						fontWeight: typography.fontWeightBold,
						color: palette.secondary.contrastText,
					})}
				>
					Are you ready to test your knowledge?
				</Typography>
				<Stack width="100%" spacing={1}>
					<Button fullWidth>Yes? Log in!</Button>
					<Button fullWidth variant="text">
						New member
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};
