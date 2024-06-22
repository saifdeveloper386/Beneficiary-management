import React from "react";
import BeneficiaryList from "../components/BeneficiaryList";
import { Link } from "react-router-dom";
import path from "../utils/path";

const ManageBeneficiaries = () => (
  <>
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  <Link to={path.homePage}>
                    Manage <b>Beneficiaries </b>
                  </Link>
                </h2>
              </div>
              <div className="col-sm-6">
                <a
                  href="#addEmployeeModal"
                  className="btn btn-success"
                  data-toggle="modal"
                >
                  <i className="material-icons">&#xE147;</i>{" "}
                  <Link to={path.addBeneficiaries}>Add New Beneficiary</Link>
                </a>
              </div>
            </div>
          </div>
            <BeneficiaryList />
        </div>
      </div>
    </div>
  </>
);

export default ManageBeneficiaries;
