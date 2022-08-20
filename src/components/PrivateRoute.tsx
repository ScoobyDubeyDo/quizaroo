import { Navigate, Outlet, useLocation } from "react-router-dom";

type LocationState = {
	state: {
		from: {
			pathname: string;
		};
	};
	pathname: string;
};

export const PrivateRoute = ({ switchPath = true }) => {
	const { pathname, state } = useLocation() as LocationState;

	//fix it
	const userToken = !localStorage.getItem("myToken")
		? null
		: localStorage.getItem("myToken");

	if (switchPath) {
		return !!userToken ? (
			<Outlet />
		) : (
			<Navigate to="/" replace state={{ from: pathname }} />
		);
	}
	return !userToken ? (
		<Outlet />
	) : (
		<Navigate to={state?.from || "/"} replace />
	);
};
