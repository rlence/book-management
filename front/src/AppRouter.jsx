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
import CreateBook from "./view/CreateBook/CreateBook";
import EditBook from "./view/EditBook/EditBook";

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
            <Route exact path="/create/books" element={ <CreateBook /> } />
            <Route exact path="/edit/book/:id" element={ <EditBook/> } />
            <Route exact path="/create/editorial" element={ <h1>create editorial</h1> } />
            <Route exact path="/edit/editorial/:id" element={ <h1>update editorial</h1> } />
            <Route exact path="/create/authors" element={ <h1>create author</h1>} />
            <Route exact path="/edit/author/:id" element={ <h1>updateEditorial author</h1>} />
          </Routes>
        </Layout>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
