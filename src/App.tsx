import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import {
	Home,
	LandingPage,
	QuizLanding,
	Result,
	SignIn,
	SignUp,
} from "./Pages";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Routes>
				<Route element={<PrivateRoute switchPath={false} />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="signup" element={<SignUp />} />
					<Route path="signin" element={<SignIn />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path="home" element={<Home />} />
					<Route path="quiz/:quizId" element={<QuizLanding />} />
					<Route path="results" element={<Result />} />
				</Route>
				{/* <Route path="*" element={<FourOFour />} /> */}
			</Routes>
		</div>
	);
}

export default App;
