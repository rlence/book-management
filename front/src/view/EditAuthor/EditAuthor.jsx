import React, { useState, useEffect } from "react";
import "../../App.scss";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import FormAuthor from "../../components/FormAuthor/FormAuthor";
import Alert from "../../components/Alert/Alert";

import { putAuthor, geOneAuthor } from "../../service/author";

const initialState = {
  name: "",
  lastname: "",
};

const EditAhuthor = () => {

  const [author, setAuthor] = useState(initialState);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const { id } = useParams();

  useEffect(() => {
    geOneAuthor(id)
        .then(data => setAuthor(data))
        .catch(err => console.log(err))
  },[])

  const updateAuthor = async () => {
    try {
      await putAuthor(author, id);
      navigate("/author");
    } catch (err) {
      setErr("an error occurred while creating the book");
    }
  };

  return (
    <div className="contet-form">
      {err !== "" ? <Alert text={err} type="error" /> : null}
      <Card>
        <h2 className="title">Create Author</h2>
        <FormAuthor author={author} setAuthor={setAuthor} submit={updateAuthor}></FormAuthor>
      </Card>
    </div>
  );
};

export default EditAhuthor;