import React, { useEffect, useState } from "react";
import "./Book.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

import moment from "moment";

import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";

import { getBooks } from "../../service/book";

const Book = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const headTable = ["id", "Title", "Genre", "Publication Date", "Editorial", "Authors", "Status"];

    useEffect(() => {
        getBooks()
            .then(response => response.json())
            .then( data => {
                const listBook = data.body.map(book => ({
                    id: book.id,
                    genre: book.genre,
                    publicationDate: moment(book.publicationDate).format("DD-MM-YYYY"),
                    status: book.status,
                    title: book.title,
                    is_active: book.is_active,
                    editorial: book.Editorial,
                    authors: book.BookAutors
                }));
                setBooks(listBook);
            })
            .catch( err => {
                console.log(err, "err");
            })
            .finally(() => setLoading(false));
    },[]);

    const printAuhtors = (authors) => {
        return authors.map( author => <>
            <span className="separation">{author.Author.name}</span>
            <span className="separation">{author.Author.lastname}</span>
        </> )
    }
    return(
        <div className="book-content">
            <h1>Book</h1>
            { !loading ? <div>
                <Card>
                    <table className="table tabale-book">
                        <thead>
                            <tr>
                                {headTable.map( head => <th key={head} scope="col">{head}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {books.map( book => (
                                <tr key={book.id}>
                                    <td>{book.id}</td>
                                    <td>{book.title}</td>
                                    <td>{book.genre}</td>
                                    <td>{book.publicationDate}</td>
                                    <td>{book.editorial ? book.editorial : "-"}</td>
                                    <td>{book.authors ? printAuhtors(book.authors) : "-"}</td>
                                    <td>
                                        <div className={book.status}>
                                            {book.status}
                                        </div>
                                    </td>
                                    <td>
                                       <span className="separation">
                                            <FontAwesomeIcon onClick={() => console.log("en el icono")} icon={faPen} />
                                       </span>
                                        <span className="separation">
                                            <FontAwesomeIcon onClick={() => console.log("en el icono")} icon={faTrash} />
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
                
            </div> :
            <Card>
                <Spinner />
            </Card>
            }
            
        </div>
    )

}

export default Book;