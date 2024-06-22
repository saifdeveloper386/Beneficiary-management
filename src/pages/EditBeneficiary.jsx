import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateBeneficiary } from '../redux/beneficiariesSlice';
import BeneficiaryForm from '../components/BeneficiaryForm';
import BeneficiaryDetails from '../components/BeneficiaryDetails';

const EditBeneficiary = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const beneficiary = useSelector(state =>
    state.beneficiaries.beneficiaries.find(b => b.id === id)
  );
  const [showModal, setShowModal] = useState(false);
  const [updatedBeneficiary, setUpdatedBeneficiary] = useState({});
  const onSubmit = data => {
      setUpdatedBeneficiary({ id, ...data });
      setShowModal(true);
    
    // dispatch(updateBeneficiary({ id, ...data }));
    // navigate('/manage-beneficiaries');
  };
  const handleConfirm = () => {
    dispatch(updateBeneficiary(updatedBeneficiary));
    setShowModal(false);
    navigate('/manage-beneficiaries');
  };
  if (!beneficiary) {
    return <div>Beneficiary not found</div>;
  }

  return (
    <>
      <BeneficiaryForm onSubmit={onSubmit} defaultValues={beneficiary} />
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
              newBeneficiary={updatedBeneficiary}
              handleConfirm={handleConfirm}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBeneficiary;
