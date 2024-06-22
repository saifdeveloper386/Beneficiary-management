import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeBeneficiary } from "../redux/beneficiariesSlice";

const BeneficiaryDetails = ({
  id,
  deleteBeneficiary,
  newBeneficiary,
  handleConfirm,
  setShowModal,
}) => {
  const dispatch = useDispatch();

  // Fallback to newBeneficiary for new entries or find existing by id.
  const beneficiary =
    useSelector((state) =>
      state.beneficiaries.beneficiaries.find((b) => b.id === id)
    ) || newBeneficiary;

  if (!beneficiary) {
    return <div>Beneficiary not found</div>;
  }

  const { fullName, address, country, pincode } = beneficiary;

  const handleDelete = () => {
    dispatch(removeBeneficiary(id));
  };

  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">
          {deleteBeneficiary ? "Delete" : newBeneficiary ? "Confirm" : "View"}{" "}
          Beneficiary
        </h4>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-hidden="true"
          onClick={() => {
            if (newBeneficiary) {
              setShowModal(false);
            }
          }}
        >
          &times;
        </button>
      </div>
      <div className="modal-body">
        <p>
          Name: <b>{fullName}</b>
        </p>
        <p>
          Address: <b>{address}</b>
        </p>
        <p>
          Country: <b>{country}</b>
        </p>
        <p>
          Pin code: <b>{pincode}</b>
        </p>
      </div>
      <div className="modal-footer">
        {deleteBeneficiary ? (
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
            data-dismiss="modal"
          >
            Delete
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success"
            onClick={newBeneficiary ? handleConfirm : undefined}
            data-dismiss="modal"
          >
            {newBeneficiary ? "Confirm" : "Ok"}
          </button>
        )}
      </div>
    </>
  );
};

export default BeneficiaryDetails;
