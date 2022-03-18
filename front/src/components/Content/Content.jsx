import React from "react";
import "./Content.scss";

import Card from "../Card/Card";
import Alert from "../Alert/Alert";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";


const Content = ({alert, loading, columns, dataSource, text}) => {
    return (
        <div className="view-content">
            { alert.status ? <Alert text={alert.message} type={alert.type} />: null }
            <div>
                <h1>{text}</h1>
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
            <div>
                <button className="btn btn-primary">+ {text}</button>
            </div>
        </div>
    )
}

export default Content;