import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBeneficiary } from "../redux/beneficiariesSlice";
import BeneficiaryForm from "../components/BeneficiaryForm";
import BeneficiaryDetails from "../components/BeneficiaryDetails";

const AddBeneficiary = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [newBeneficiary, setNewBeneficiary] = useState({});

  const onSubmit = (data) => {
    setNewBeneficiary({ id: Date.now().toString(), ...data });
    setShowModal(true);
  };

  const handleConfirm = () => {
    dispatch(addBeneficiary(newBeneficiary));
    setShowModal(false);
    navigate('/manage-beneficiaries');
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/add');
  };

  return (
    <>
      <BeneficiaryForm onSubmit={onSubmit} />
      <div
        className={`modal fade ${showModal ? "show d-block" : ""}`}
        id="confirmationModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="confirmationModalLabel"
        aria-hidden={!showModal}
        style={{ display: showModal ? "block" : "none", backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <BeneficiaryDetails
            setShowModal={setShowModal}
              newBeneficiary={newBeneficiary}
              handleConfirm={handleConfirm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBeneficiary;
