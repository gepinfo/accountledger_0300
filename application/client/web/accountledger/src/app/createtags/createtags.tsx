import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./createtags.scss";
import  {service}   from './createtags.service';

class Createtags extends React.Component<any, any> {
    test = new service ("");
    constructor(props:any){
    super(props);
    this.state={
    ItemTags : {
    created_date: '',
    created_by: '',
    last_modified_by: '',
    last_modified_date: '',
    itemtagslist: '',
    },
    
    rowData :[],options:[],
    } }


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ ItemTags: { ...this.state.ItemTags, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.ItemTags.created_by = sessionStorage.getItem('email')||'{}';
    }

    render(){
    return(
    <>
        <h2 className="screen-align">createtags</h2>
        <div id="template-ie1e" className="gjs-row"></div>
    </>
    );
    };
    };

    export default Createtags;