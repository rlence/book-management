import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./layout/Layout";

import Home from "./view/Home/Home";
import Book from "./view/Books/Book";
import Editorial from "./view/Editorial/Editorial";
import Author from "./view/Author/Author";
import CreateBook from "./view/CreateBook/CreateBook";
import EditBook from "./view/EditBook/EditBook";
import CreatAhuthor from "./view/CreateAuthor/CreateAuthor";
import EditAhuthor from "./view/EditAuthor/EditAuthor";
import CreateEditorial from "./view/CreateEditorial/CreateEditorial";
import EditEditorial from "./view/EditEditorial/EditEditorial";

const AppRouter = () => {
	return (
		<div>
			<BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/book" element={ <Book/> } />
            <Route exact path="/editorial" element={ <Editorial /> } />
            <Route exact path="/author" element={ <Author /> } />
            <Route exact path="/create/books" element={ <CreateBook /> } />
            <Route exact path="/edit/book/:id" element={ <EditBook/> } />
            <Route exact path="/create/editorial" element={ <CreateEditorial /> } />
            <Route exact path="/edit/editorial/:id" element={ <EditEditorial /> } />
            <Route exact path="/create/authors" element={ <CreatAhuthor />} />
            <Route exact path="/edit/author/:id" element={ <EditAhuthor />} />
          </Routes>
        </Layout>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
