import React, { useState, useEffect } from "react";
import "../../App.scss";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../../components/Card/Card";
import FormEditorial from "../../components/FormEditorial/FormEditorial";
import Alert from "../../components/Alert/Alert";

import { putEditorial, geOneEditorial } from "../../service/editorial";

const initialState = {
    editorialName: ""
};

const EditEditorial = () => {

  const [editorial, setEditorial] = useState(initialState);
  const navigate = useNavigate();
  const [err, setErr] = useState("");

  const { id } = useParams();

  useEffect(() => {
    geOneEditorial(id)
        .then(data => setEditorial(data))
        .catch(err => console.log(err))
  },[])

  const updateAuthor = async () => {
    try {
      await putEditorial(editorial, id);
      navigate("/editorial");
    } catch (err) {
      setErr("an error occurred while creating the book");
    }
  };

  return (
    <div className="contet-form">
      {err !== "" ? <Alert text={err} type="error" /> : null}
      <Card>
        <h2 className="title">Edit Editorial</h2>
        <FormEditorial editorial={editorial} setEditorial={setEditorial} submit={updateAuthor}></FormEditorial>
      </Card>
    </div>
  );
};

export default EditEditorial;