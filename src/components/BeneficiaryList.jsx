import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeBeneficiary } from "../redux/beneficiariesSlice";
import BeneficiaryDetails from "./BeneficiaryDetails";
import path from "../utils/path";

const BeneficiaryList = () => {
  const beneficiaries = useSelector(
    (state) => state.beneficiaries.beneficiaries
  );
  const dispatch = useDispatch();
  const [beneficiaryId, setBeneficiaryId] = useState();
  const [deleteBeneficiary, setDeleteBeneficiary] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Country</th>
                <th>Pin Code</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {beneficiaries?.map((b) => (
                <tr id={b?.id}>
                  <td> {b?.fullName}</td>
                  <td> {b?.address}</td>
                  <td> {b?.country}</td>
                  <td> {b?.pincode}</td>
                  <td>
                    <a
                      href="#deleteEmployeeModal"
                      onClick={() => {
                        setBeneficiaryId(b?.id);
                        setDeleteBeneficiary(false)
                      }}
                      className="material-icons"
                      data-toggle="modal"
                    >
                      <i className="material-icons">&#xE417;</i>
                    </a>
                    <Link to={path.editBeneficiaries.replace(':id', b?.id)} className="edit">
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                      >
                        &#xE254;
                      </i>
                    </Link>{" "}
                    <button
                      href="#deleteEmployeeModal"
                      onClick={() => {
                        setBeneficiaryId(b?.id);
                        setDeleteBeneficiary(true);
                      }}
                      //  className="material-icons"
                      data-toggle="modal"
                      // onClick={() => dispatch(removeBeneficiary(b.id))}
                      className="delete"
                    >
                      <i
                        className="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                      >
                        &#xE872;
                      </i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

            {beneficiaryId && (
      <div id="deleteEmployeeModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
              <BeneficiaryDetails
                id={beneficiaryId}
                deleteBeneficiary={deleteBeneficiary}
              />
          </div>
        </div>
      </div>
            )}
    </>
  );
};

export default BeneficiaryList;
