import React, { useState } from "react";
import "../../App.scss";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import FormAuthor from "../../components/FormAuthor/FormAuthor";
import Alert from "../../components/Alert/Alert";

import { createAuthor } from "../../service/author";

const initialState = {
  name: "",
  lastname: "",
};

const CreatAhuthor = () => {

  const [author, setAuthor] = useState(initialState);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const postAuthor = async () => {
    console.log({ author });
    try {
      await createAuthor(author);
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
        <FormAuthor author={author} setAuthor={setAuthor} submit={postAuthor}></FormAuthor>
      </Card>
    </div>
  );
};

export default CreatAhuthor;
