import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
<<<<<<< HEAD
				<Route path="/main" element={<Main />} />
				<Route path="/login" element={<Login />} />
=======
				<Route path="/" element={<Main />} />
				<Route path="/signin" element={<Login />} />
>>>>>>> 1eaf5b4 (Add: login 페이지 완료)
			</Routes>
		</BrowserRouter>
	);
}
