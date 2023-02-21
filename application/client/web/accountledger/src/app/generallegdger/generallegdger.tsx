import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import {Link} from 'react-router-dom';
import {Upload} from "../../shared/shared.service";
import Select from "react-select";
import "./generallegdger.scss";
import  {service}   from './generallegdger.service';

class Generallegdger extends React.Component<any, any> {
    columnDefs: any = [{ headerName: 'name', field: 'name' },];
    gridApi: any;
    gridColumnApi: any;
    test = new service ("");
    constructor(props:any){
    super(props);
    this.onRowSelected = this.onRowSelected.bind(this)
    this.state={
    generalledger : {
    created_date: '',
    created_by: '',
    last_modified_by: '',
    last_modified_date: '',
    name: '',
    },
    
    rowData :[],options:[],
    } }
    


    handlechange = (e: any) => {
    if(e?.target){
    this.setState({ generalledger: { ...this.state.generalledger, [e.target.name]: e.target.value } })
    }
    }


    componentDidMount() {
    this.state.generalledger.created_by = sessionStorage.getItem('email')||'{}';
    this.GpGetAllValues();
    }
    GpGetAllValues  () {
    this.test.GpGetAllValues().then((data:any) => {
    this.setState({rowData:data.data})
    },
    (error:any) => {
    console.log('Error', error);
    });
    }
    onRowSelected(event:any)
    {
     this.props.history.push({pathname:"/",state:{id : event.data}})
    }
    onGridReady(params :any)
    {
    this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }

    render(){
    return(
    <>
        <h2 className="screen-align">generallegdger</h2>
        <div id="template-iyid" className="gjs-row">
    <div id="template-ingu" className="gjs-cell">
        <div id="template-i797b" className="grid">
            <div id="template-i7m52" className="template-i797b-div0 grid-cell">
                <label id="template-ihgfh" className="label ">Ref Type</label>
                <div id="template-ixh5f">
                    <Select id="template-i0v02" options={this.state.options} className="form-control "></Select>
                </div>
            </div>
            <div id="template-iabto" className="template-i797b-div1 grid-cell">
                <label id="template-i88xp" className="label ">To date</label>
                <input id="template-i27lv" className="input form-control "
                />
            </div>
            <div id="template-ino9x" className="template-i797b-div2 grid-cell">
                <label id="template-ios56" className="label ">GroupBy</label>
                <div id="template-if7n1">
                    <Select id="template-i0en2" options={this.state.options} className="form-control "></Select>
                </div>
            </div>
            <div id="template-inw69" className="template-i797b-div3 grid-cell">
                <label id="template-idahi" className="label ">Ref Name</label>
                <div id="template-idbpg">
                    <Select id="template-i9551" options={this.state.options} className="form-control "></Select>
                </div>
            </div>
            <div id="template-igrvf" className="template-i797b-div4 grid-cell">
                <label id="template-i4bny" className="label ">Account</label>
                <input id="template-i5y4j" className="input form-control "
                />
            </div>
            <div id="template-i4ra5" className="template-i797b-div5 grid-cell">
                <input type="checkbox" id="template-i61eu" className="checkbox form-control "
                />
            </div>
            <div id="template-iflvr" className="template-i797b-div6 grid-cell">
                <input type="checkbox" id="template-iq4nq" className="checkbox form-control "
                />
            </div>
            <div id="template-idnfi" className="template-i797b-div7 grid-cell"></div>
            <div id="template-i4mqd" className="template-i797b-div8 grid-cell">
                <label id="template-iwoky" className="label ">FromDate</label>
                <input id="template-iz2lt" className="input form-control "
                />
            </div>
            <div id="template-iioym" className="template-i797b-div9 grid-cell">
                <label id="template-i7su3" className="label ">Party</label>
                <div id="template-icujh">
                    <Select id="template-ign9a" options={this.state.options} className="form-control "></Select>
                </div>
            </div>
        </div>
        <div id="template-iuexvf" onClick={()=>this.GpGetAllValues()}className="ag-theme-material" style={{height: '500px',
            width: '100%'}} >
            <AgGridReact columnDefs={this.columnDefs} pagination={true}
            onGridReady={this.onGridReady} paginationPageSize={5} domLayout={
            "autoHeight"} animateRows={true}defaultColDef={{sortable: true, filter: true }} rowData={this.state.rowData}
            rowSelection={ "single"} onRowSelected={this.onRowSelected }></AgGridReact>
        </div>
    </div>
</div>
    </>
    );
    };
    };

    export default Generallegdger;