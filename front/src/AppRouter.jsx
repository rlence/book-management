import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";

const AppRouter = () => {
	return (
		<div>
			<BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<h1>home</h1>} />
          </Routes>
        </Layout>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
