import React, { useState, useEffect } from "react";
import "./FormBook.scss";

import Spinner from "../Spinner/Spinner";
import Alert from "../Alert/Alert";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

import { getAllEditorial } from "../../service/editorial";
import { getAllAuthor } from "../../service/author";

import { x } from "../../icons/icons";

const FormBook = ({book, setBook, submit}) => {

    const [date, setDate] = useState(new Date());
    const [listEditoral, setListEditorial] = useState([]);
    const [listAuthor, setListAuthor] = useState([]);
    const [loading, setLoading] = useState({
        author: true,
        editorial: true,
        book: false,
    });

    const [authorsSelected, setAuthorsSelerect] = useState([]);

    const [errors, setErros] = useState("");

    const getData = async () => {
        try{
            const dataEditorial = await getAllEditorial();
            const dataAuthro = await getAllAuthor();
            setListAuthor(dataAuthro);
            setListEditorial(dataEditorial);

        }catch(err){
            console.log(err)
        }finally{
            setLoading({ author:false, editorial:false})
        }
    }

    useEffect(() => {
        getData();
    },[]);

    const handelAuthors = (id, mode) => {
        if(mode === "add"){
            const auhorExist = authorsSelected.find( author => author.id == id);
            if(auhorExist) return;
            const auhtorSeleted = listAuthor.find( author => author.id == id);
            setAuthorsSelerect([...authorsSelected, auhtorSeleted]);
        }else{
            const authorDelete = authorsSelected.filter( author => author.id !== id);
            setAuthorsSelerect(authorDelete);
        }
    }

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === "auhtorsId"){
            const authorsSelected = [...book.authorsId, parseInt(value)]
            setBook({...book, authorsId: authorsSelected})
            handelAuthors(value, "add" )
        }else{
            const transformValue = name === "editorialId" ? parseInt(value) : value;
            setBook({...book, [name]: transformValue });
        }
    }

    const handelDate = (e) => {
        setDate(e)
        setBook({...book, publicationDate: moment(e).format("YYYY/MM/DD")})
    }

    const handelSubmit = async (e) => {
        try{
            e.preventDefault();
            setLoading({...loading, book: true});
            if(book.title !== "" && book.genre !== "" && book.publicationDate !== "" && book.editorialId !== 0 && book.authorsId.length > 0){
                console.log('dentro del if')
                await submit();
            }
            setErros("all fields are required");
            
        }finally{
            setLoading({...loading, book: false});
        }
    }

    const handelPrintAuhtorSelected = (authorId) => {
        return listAuthor.map( author => {
            if(author.id === authorId){
                return (
                    <span className="author-select" key={author.id}>{author.name} {author.lastname} <span onClick={() => handelAuthors(author.id, "delete")} className="icon">{x}</span></span>
                )
            } 
        })
    }
   
    return (
        <form className="form-book" onChange={handelChange} onSubmit={handelSubmit}>
            <div className="input-group input-group-sm mb-3">
                <input type="text" defaultValue={book.title} className="form-control" placeholder="title" name="title" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <div className="input-group input-group-sm mb-3">
                <input type="text" defaultValue={book.genre} className="form-control" placeholder="genre" name="genre" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <div className="input-group input-group-sm mb-3 dropdown">
                <p className="form-control" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    {book.publicationDate === "" ? "Seletec a publication date" : book.publicationDate}
                </p>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <Calendar onChange={handelDate} value={date} />
                </ul>
                
            </div>

            {loading.editorial ? <Spinner /> :
                (
                    <select className="form-select mb-3" name="editorialId"  defaultValue={book.editorialId}>
                        <option value={0}>Select Editorial</option>
                        {listEditoral.map( editorial => <option key={editorial.id} value={editorial.id} >{editorial.editorialName}</option>)}
                    </select>
                )
            }

            {loading.author ? <Spinner /> :
                (
                    <select className="form-select mb-3" name="auhtorsId" value={0} defaultValue={0}>
                        <option value={0}>Select Author</option>
                        {listAuthor.map( author => <option key={author.id} value={author.id} >{author.name} {author.lastname}  </option>)}
                    </select>
                )
            }

            <div className="list-author">
                { !book.authorsId.length ?<span> No authores selected </span> : book.authorsId.map( authorId => handelPrintAuhtorSelected(authorId))}
            </div>

           {!loading.book ?  <button className="btn save-btn"> Save </button> : <Spinner />}
            
            {errors === "" ? null : <Alert text={errors} type="error" /> }

        </form>
    )

}

export default FormBook;