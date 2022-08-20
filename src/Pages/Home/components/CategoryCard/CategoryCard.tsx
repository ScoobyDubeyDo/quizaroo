import { Link } from "react-router-dom";
import * as colors from "@mui/material/colors";
import { PlayArrow } from "@mui/icons-material";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from "@mui/material";

type Props = {
	imgUrl: string;
	title: string;
	numberOfQuestions: number;
	bgColor: "green" | "pink" | "yellow" | "blue" | "red";
};

export const CategoryCard = ({
	imgUrl,
	title,
	numberOfQuestions,
	bgColor,
}: Props) => {
	return (
		<Card
			sx={{
				display: "flex",
				bgcolor: colors[bgColor][200],
				justifyContent: "space-between",
			}}
		>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography variant="h5">{title}</Typography>
					<Typography variant="subtitle1" color="text.secondary">
						{numberOfQuestions} Questions
					</Typography>
				</CardContent>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						pl: 1,
						pb: 1,
					}}
				>
					<IconButton
						component={Link}
						to="/quiz/assas"
						size="large"
						sx={{
							color: colors[bgColor][900],
						}}
					>
						<PlayArrow sx={{ height: 38, width: 38 }} />
					</IconButton>
				</Box>
			</Box>
			<CardMedia
				component="img"
				sx={{ width: 151 }}
				image={imgUrl}
				alt={title + "cover"}
			/>
		</Card>
	);
};
