import { Button } from "primereact/button";
import { useState } from "react";
import Layout from "../Layout/Layout";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@mui/icons-material";
import "../assets/css/artist-management.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import * as PrimeReactButton from "primereact/button";



function ArtistManagement() {
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const userData = [
    {
      name: "John Philips",
      genre: "Rap",
      Description: "",
      status: "Pending Request",
      youtubeLink: "https://www.youtube.com/",
      twitterLink: "https://twitter.com/",
      facebookLink: "https://www.facebook.com/",
    },
    {
      name: "Rae Mond",
      genre: "Rap",
      Description: "",
      status: "Pending Request",
      youtubeLink: "https://www.youtube.com/",
      twitterLink: "https://twitter.com/",
      facebookLink: "https://www.facebook.com/",
    },
    {
      name: "Zrake",
      genre: "Rap",
      Description: "",
      status: "Pending Request",
      youtubeLink: "https://www.youtube.com/",
      twitterLink: "https://twitter.com/",
      facebookLink: "https://www.facebook.com/",
    },
    // Add more objects with social media links as needed
  ];

  const renderHeader = () => {
    return (
      <div className="search-bar d-flex justify-content-end">
        <input
          type="search"
          value={globalFilterValue}
          onChange={(e) => setGlobalFilterValue(e.target.value)}
          placeholder="Global Search"
        />
      </div>
    );
  };

  const header = renderHeader();

  // Function to handle approve action
  const handleApprove = (rowData) => {
    // Add your logic here to handle approve action
    console.log("Approving:", rowData.name);
  };

  // Function to handle deny action
  const handleDeny = (rowData) => {
    // Add your logic here to handle deny action
    console.log("Denying:", rowData.name);
  };

  // Define the actions column header and body
  const actionsHeader = <div className="text-center">Actions</div>;
  const actionsBody = (rowData) => {
    return (
      <div className="d-flex justify-content-center">
        <Button
          icon="pi pi-check" // Icon for the Approve button
          className="p-button-success mr-2 approve-btn"
          onClick={() => handleApprove(rowData)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <Button
          icon="pi pi-times" // Icon for the Deny button
          className="p-button-danger deny-btn"
          onClick={() => handleDeny(rowData)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    );
  };

  // Define the description column header and body

  const descriptionHeader = <div className="text-center">Description</div>;
  const descriptionBody = (rowData) => {
    return (
      <div>
        <div>Real Name: {rowData.name}</div>
        <div>Genre: {rowData.genre}</div>
        {/* View More link */}
        <div>
          <a href="#" onClick={() => handleViewMore(rowData)}>
            View More
          </a>
        </div>
      </div>
    );
  };

  return (
    <Layout activePage={"Artist Management"}>
      <div className="container w-100 h-100 m-0 p-3 py-2 dashboard-container overflow-hidden ">
        <div className="row w-auto m-0 overflow-x-hidden overflow-y-auto">
          <div className="col p-2 m-0 mt-1 page-title d-flex align-items-center justify-content-between ">
            <h1 className="m-0">Artist Management</h1>
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
              <Link color="#fffffff2" href="/">
                <HomeOutlined className="home-breedcrumbs" fontSize="small" />
              </Link>
              <Link color="#fffffff2" to="/dashboard">
                <Typography color="#fff" fontSize="small">
                  Dashboard
                </Typography>
              </Link>
              <Typography color="#d40000" fontSize="small">
                Artist Management
              </Typography>
            </Breadcrumbs>
          </div>
        </div>
        <div className="container-fluid h-100 content-container p-2">
          <div className="card w-100 table-container align-items-center d-flex justify-content-start">
            <DataTable
              scrollable
              value={userData}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25, 50]}
              paginatorTemplate=" FirstPageLink PrevPageLink PageLinks  NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
              currentPageReportTemplate="{first} to {last} of {totalRecords}"
              tableStyle={{ minWidth: "60rem" }}
              scrollHeight="350px"
              globalFilter={globalFilterValue}
              header={header}
            >
              <Column
                sortable
                style={{ width: "20%" }}
                field="name"
                header="Name"
              />
              {/* Description column */}
              <Column
                style={{ width: "30%" }}
                header={descriptionHeader}
                body={descriptionBody}
              ></Column>
              <Column
                sortable
                field="status"
                header="Status"
                body={(rowData) => {
                  let statusColor = "";
                  switch (rowData.status) {
                    case "Active":
                      statusColor = "#00ff00";
                      break;
                    case "Pending Request":
                      statusColor = "#F5E30F";
                      break;
                    default:
                      statusColor = "inherit";
                  }
                  return (
                    <span style={{ color: statusColor }}>{rowData.status}</span>
                  );
                }}
              />
              {/* Actions column */}
              <Column header={actionsHeader} body={actionsBody}></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ArtistManagement;
