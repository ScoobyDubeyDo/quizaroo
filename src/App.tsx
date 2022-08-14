import { LandingPage } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { CssBaseline } from "@mui/material";
function App() {
	return (
		<div className="App">
			<CssBaseline />
			<Routes>
				{/* <Route path="*" element={<FourOFour />} /> */}
				<Route path="/" element={<LandingPage />} />
				{/* <Route path="home" element={<Home />} />
				<Route path="products" element={<Products />} />
				<Route
					path="products/type/:categoryId"
					element={<Products />}
				/>

				<Route path="products/:productId" element={<SingleProduct />} />
				<Route element={<PrivateRoute switchPath={false} />}>
					<Route path="sign-up" element={<Signup />} />
					<Route path="sign-in" element={<Signin />} />
				</Route>
				<Route element={<PrivateRoute />}>
					<Route path="wishlist" element={<Wishlist />} />
					<Route path="profile" element={<UserProfile />} />
					<Route path="cart" element={<Cart />}>
						<Route index element={<ItemDetails />} />
						<Route
							path="price-details"
							element={<PriceDetails />}
						/>
					</Route> 
				</Route>*/}
			</Routes>
		</div>
	);
}

export default App;
