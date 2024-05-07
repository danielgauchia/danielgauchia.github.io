import React from "react";
import { Route, Routes} from "react-router-dom";


import Home from "./pages/Home";
import StreetliftingCompanion from "./pages/StreetliftingCompanion";



function App() {
	return (
		<Routes>
			<Route exact path="/" Component={StreetliftingCompanion} />
			<Route exact path="portfolio" Component={Home} />
		</Routes>
	);
}

export default App;
