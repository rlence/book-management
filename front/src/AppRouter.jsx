import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";

import Book from "./view/Books/Book";
import Editorial from "./view/Editorial/Editorial";
import Author from "./view/Author/Author";

const AppRouter = () => {
	return (
		<div>
			<BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<h1>home</h1>} />
            <Route exact path="/book" element={ <Book/> } />
            <Route exact path="/editorial" element={ <Editorial /> } />
            <Route exact path="/author" element={ <Author /> } />
          </Routes>
        </Layout>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
