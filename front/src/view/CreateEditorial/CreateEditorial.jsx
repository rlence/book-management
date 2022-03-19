import React, { useState } from "react";
import "../../App.scss";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card/Card";
import FormEditorial from "../../components/FormEditorial/FormEditorial";
import Alert from "../../components/Alert/Alert";

import { postEditorial } from "../../service/editorial";

const initialState = {
  editorialName: ""
};

const CreateEditorial = () => {

  const [editorial, setEditorial] = useState(initialState);
  const navigate = useNavigate();
  const [err, setErr] = useState("");


  const createAuthor = async () => {
    try {
      await postEditorial(editorial);
      navigate("/editorial");
    } catch (err) {
      setErr("an error occurred while creating the book");
    }
  };

  return (
    <div className="contet-form">
      {err !== "" ? <Alert text={err} type="error" /> : null}
      <Card>
        <h2 className="title">Create Editorial</h2>
        <FormEditorial editorial={editorial} setEditorial={setEditorial} submit={createAuthor}></FormEditorial>
      </Card>
    </div>
  );
};

export default CreateEditorial;