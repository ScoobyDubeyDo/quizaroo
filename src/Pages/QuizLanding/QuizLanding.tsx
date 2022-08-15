import { Button, Container, Paper, Stack, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import waving from "../../asset/waving.svg";

export const QuizLanding = () => {
	return (
		<Container maxWidth={false} sx={{ bgcolor: blue[200] }} disableGutters>
			<Container maxWidth="md" disableGutters>
				<Stack
					p="1rem"
					justifyContent="center"
					sx={{
						height: "30vh",
						background: `url("${waving}")`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: {
							xs: "right bottom",
							sm: "right top",
						},
						backgroundSize: "50%",
					}}
				>
					<Stack height="100%" justifyContent="center">
						<Typography variant="h4">Mother Nature</Typography>
						<Typography variant="subtitle1" color="text.secondary">
							8 Questions
						</Typography>
						<Typography variant="subtitle1" color="text.secondary">
							1h 24m
						</Typography>
					</Stack>
				</Stack>
				<Stack
					component={Paper}
					justifyContent="space-between"
					alignItems="center"
					spacing={5}
					sx={{
						maxHeight: "70vh",
						minHeight: "70vh",
						padding: "2rem",
						borderTopLeftRadius: "2rem",
						borderTopRightRadius: "2rem",
						overflow: "auto",
					}}
				>
					<Typography variant="h6">
						Your quizes Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Consequatur modi veniam pariatur ab
						aperiam quis nihil earum in culpa corporis odit maiores
						nulla, quaerat adipisci exercitationem ratione sed.
						Aperiam consequatur quaerat sit ab exercitationem omnis
						enim eaque iste ducimus quo consectetur cumque minima
						alias magnam, nihil maxime non illum porro! Your quizes
						Lorem i ratione sed. Aperiam consequatur quaerat sit ab
						exercitationem omnis enim eaque iste ducimus quo
						consectetur cumque minima alias magnam, nihil maxime non
						illum porro!
					</Typography>
					<Button
						sx={{
							width: { xs: "100%", sm: "19rem" },
						}}
					>
						Start now
					</Button>
				</Stack>
			</Container>
		</Container>
	);
};
