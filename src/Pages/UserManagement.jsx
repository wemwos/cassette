import { useState } from "react";
import Layout from "../Layout/Layout";
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@mui/icons-material';
import '../assets/css/user-management.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';



function UserManagement() {

    const [globalFilterValue, setGlobalFilterValue] = useState('');

    const userData = [
        { name: "John Philips", registrationDate: "2023-05-15", userType: "Artist", status: "Active" },
        { name: "Juan Juan", registrationDate: "2023-06-20", userType: "Listener", status: "Unverified" },
        { name: "Jane Doe", registrationDate: "2023-07-10", userType: "Listener", status: "Unverified" },
        { name: "Jake Smith", registrationDate: "2023-08-05", userType: "Admin", status: "Active" },
        { name: "Jessica Brown", registrationDate: "2023-09-02", userType: "Listener", status: "Unverified" },
        { name: "James Taylor", registrationDate: "2023-10-18", userType: "Artist", status: "Active" },
        { name: "John Philips", registrationDate: "2023-05-15", userType: "Artist", status: "Active" },
        { name: "Juan Juan", registrationDate: "2023-06-20", userType: "Listener", status: "Unverified" },
        { name: "Jane Doe", registrationDate: "2023-07-10", userType: "Listener", status: "Unverified" },
        { name: "Jake Smith", registrationDate: "2023-08-05", userType: "Admin", status: "Active" },
        { name: "Jessica Brown", registrationDate: "2023-09-02", userType: "Listener", status: "Banned" },
        { name: "James Taylor", registrationDate: "2023-10-18", userType: "Artist", status: "Active" }
    ];
    

    const renderHeader = () => {
        return (
            <div className="search-bar d-flex justify-content-end">
                <input type="search" value={globalFilterValue} onChange={(e) => setGlobalFilterValue(e.target.value)} placeholder="Global Search" />
            </div>
        );
    };

    const header = renderHeader();

    return (
        <Layout activePage={'User Management'}>
            <div className="container w-100 h-100 m-0 p-3 py-2 dashboard-container overflow-hidden ">
                <div className="row w-auto m-0 overflow-x-hidden overflow-y-auto">
                    <div className="col p-2 m-0 mt-1 page-title d-flex align-items-center justify-content-between ">
                        <h1 className='m-0'>User Management</h1>
                        <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                            <Link color="#fffffff2" href="/">
                                <HomeOutlined className='home-breedcrumbs' fontSize="small"/>
                            </Link>
                            <Link color="#fffffff2" to="/dashboard">
                                <Typography color="#fff" fontSize="small">Dashboard</Typography>
                            </Link>
                                <Typography color="#d40000" fontSize="small">User Management</Typography>
                        </Breadcrumbs>
                    </div>
                </div>
                <div className="container-fluid h-100 content-container p-2">
                    <div className="card w-100 table-container align-items-center d-flex justify-content-start">
                        <DataTable 
                        scrollable 
                        value={userData} 
                        paginator rows={10} 
                        rowsPerPageOptions={[5, 10, 25, 50]} 
                        paginatorTemplate=" FirstPageLink PrevPageLink PageLinks  NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                        currentPageReportTemplate="{first} to {last} of {totalRecords}" 
                        tableStyle={{ minWidth: '60rem',}} 
                        scrollHeight="350px"
                        globalFilter={globalFilterValue}
                        header={header}
                        >
                            <Column sortable style={{width: '50%'}} field="name" header="Name"></Column>
                            <Column sortable field="registrationDate" header="Registration Date"></Column>
                            <Column
                                sortable
                                field="status"
                                header="Status"
                                body={(rowData) => {
                                    let statusColor = '';
                                    switch (rowData.status) {
                                        case 'Active':
                                            statusColor = '#00ff00';
                                            break;
                                        case 'Unverified':
                                            statusColor = 'yellow';
                                            break;
                                        case 'Banned':
                                            statusColor = 'red';
                                            break;
                                        default:
                                            statusColor = 'inherit'; // default color
                                    }
                                    return <span style={{ color: statusColor }}>{rowData.status}</span>;
                                }}
                            ></Column>
                            <Column sortable field="userType" header="User Type"></Column>
                        </DataTable>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default UserManagement;
