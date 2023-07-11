import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<LanguageProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</LanguageProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
