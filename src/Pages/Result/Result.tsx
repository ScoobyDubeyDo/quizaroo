import {
	Box,
	Button,
	CircularProgress,
	Container,
	Stack,
	Typography,
} from "@mui/material";
import trophy from "../../asset/trophy.svg";

export const Result = () => {
	return (
		<Container
			maxWidth={false}
			sx={({ palette }) => ({
				bgcolor: palette.secondary.dark,
			})}
		>
			<Stack
				direction="column"
				justifyContent="space-between"
				alignItems="center"
				px="2.5rem"
				py="4rem"
				margin="auto"
				sx={({ breakpoints }) => ({
					height: "100vh",
					maxWidth: breakpoints.values.sm,
					borderRadius: "50%",
				})}
			>
				<Stack alignItems="center">
					<Typography
						sx={({ typography, palette }) => ({
							fontWeight: typography.fontWeightMedium,
							color: palette.secondary.contrastText,
							textTransform: "uppercase",
						})}
						variant="h4"
					>
						Your Result!
					</Typography>
					<Typography
						sx={({ typography, palette }) => ({
							fontWeight: typography.fontWeightMedium,
							color: palette.grey[400],
							textTransform: "uppercase",
						})}
						variant="subtitle1"
					>
						5/12 in 36 sec
					</Typography>
				</Stack>
				<Box sx={{ position: "relative", display: "inline-flex" }}>
					<CircularProgress
						style={{
							width: "250px",
							height: "250px",
						}}
						sx={({ palette }) => ({
							color: palette.primary.light,
						})}
						variant="determinate"
						value={70}
					/>
					<Box
						sx={{
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							position: "absolute",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<img height={200} src={trophy} alt="trophy" />
					</Box>
				</Box>
				<Stack width="100%" spacing={1}>
					<Button fullWidth>See Leaderboards</Button>
					<Button fullWidth variant="text">
						Back Home
					</Button>
				</Stack>
			</Stack>
		</Container>
	);
};
