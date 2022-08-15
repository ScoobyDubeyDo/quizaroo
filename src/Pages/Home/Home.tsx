import { Container, Paper, Grid, Typography, Stack } from "@mui/material";
import waving from "../../asset/waving.svg";
import { CategoryCard } from "./components";
export const Home = () => {
	return (
		<Container
			maxWidth={false}
			sx={({ palette }) => ({
				bgcolor: palette.secondary.main,
			})}
			disableGutters
		>
			<Container maxWidth="md" disableGutters>
				<Stack
					padding="1rem 0 1rem 1rem"
					direction="row"
					justifyContent="space-between"
					alignItems="center"
					sx={{
						height: "30vh",
					}}
				>
					<div>
						<Typography color="white" fontWeight="600" variant="h4">
							Hello
						</Typography>
						<Typography
							sx={{
								lineBreak: "anywhere",
								textTransform: "capitalize",
							}}
							color="white"
							fontWeight="600"
							variant="h5"
						>
							Aman
						</Typography>
					</div>
					<Stack
						justifyContent="center"
						alignItems="center"
						sx={{
							minWidth: "200px",
							minHeight: "200px",
						}}
					>
						<Stack
							justifyContent="center"
							alignItems="center"
							sx={({ palette }) => ({
								width: 140,
								height: 140,
								bgcolor: palette.secondary.light,
								borderRadius: "50%",
							})}
						>
							<img
								width="200"
								height="200"
								alt="Quizaroo the wolf"
								src={waving}
							/>
						</Stack>
					</Stack>
				</Stack>
				<Paper
					sx={{
						minHeight: "70vh",
						padding: "0 2rem",
						borderTopLeftRadius: "2rem",
						borderTopRightRadius: "2rem",
					}}
				>
					<Typography padding="1rem 0" fontWeight="900" variant="h5">
						Your quizes
					</Typography>

					<Grid
						container
						columns={2}
						spacing={2}
						sx={{
							maxHeight: "calc(70vh - 48px)",
							overflow: "auto",
						}}
					>
						{Array.from(Array(10)).map((_, index) => (
							<Grid item xs={2} sm={1} key={index}>
								<CategoryCard
									bgColor="red"
									imgUrl={waving}
									title="Mother Nature"
									numberOfQuestions={8}
								/>
							</Grid>
						))}
					</Grid>
				</Paper>
			</Container>
		</Container>
	);
};
