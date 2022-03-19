import React from "react";
import { useNavigate } from "react-router-dom";
import "./Content.scss";

import Card from "../Card/Card";
import Alert from "../Alert/Alert";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";


const Content = ({alert, loading, columns, dataSource, text}) => {
    const navigate = useNavigate();
    
    return (
        <div className="view-content">
            
            <div className="title">
                <h1>{text}</h1>
            </div>
            <div className="alert-content">
                { alert.status ? <Alert text={alert.message} type={alert.type} />: null }
            </div>
            { !loading ? <div>
                <Card>
                    <Table columns={columns} dataSource={dataSource}  />
                </Card>
                
            </div> :
            <Card>
                <Spinner />
            </Card>
            }
            <div className="content-button">
                <button className="btn"
                    onClick={() => navigate(`/create/${text.toLowerCase()}`) }
                > Create {text}</button>
            </div>
        </div>
    )
}

export default Content;