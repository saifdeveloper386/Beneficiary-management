import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {  Router, useNavigate, useRoutes } from "react-router-dom/dist";
import path from "../utils/path";

const BeneficiaryForm = ({ onSubmit, defaultValues = {} }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues });
  const isAddPageOpen = window.location.pathname === path.addBeneficiaries ? true : false;
  const navigate = useNavigate();

  return (
    <>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <h4 className="modal-title">
                {isAddPageOpen ? "Add New" : "Edit"} Beneficiary
              </h4>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("fullName", {
                    required: "Full Name is required",
                    pattern: {
                      value: /^[A-Za-z\s]+$/, // Only alphabets and spaces
                      message: "Full Name should contain only alphabets",
                    },
                  })}
                  onChange={(e)=>{
                    e.target.value.replace(/[a-zA-z]/gi,"")
                    setValue(
                      "fullName",
                      e.target.value.replace(/[^a-z ]/gi, ""),
                      { shouldValidate: true }
                    );
                    setValue(
                      "fullName",
                      e.target.value.replace(/(\s{2,})|[^a-zA-Z']/g, " ")
                    );
                    setValue(
                      "fullName",
                      e.target.value.replace(/^\s*/, "")
                    );
                  }}
                />
                {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
              </div>
              <div className="form-group">
                <label>Address</label>
                <textarea
                  type="text"
                  className="form-control"
                  {...register("address", {
                    required: "Address is required",
                    pattern: {
                      value: /^[A-Za-z0-9\s,/-]+$/, // Alphanumeric, spaces, comma, dash, and slash
                      message:
                        "Address should contain only alphanumeric characters, spaces, comma, dash, and slash",
                    },
                  })}
                ></textarea>
                {errors.address && <span className="text-danger">{errors.address.message}</span>}
              </div>

              <div className="form-group">
                <label>Country</label>
                <select
                  type="text"
                  className="form-control"
                  {...register("country", { required: "Country is required" })}
                >
                  <option value="">Select Country</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                </select>
                {errors.country && <span className="text-danger">{errors.country.message}</span>}
              </div>
              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("pincode", {
                    required: "Pincode is required",
                    pattern: {
                      value: /^[0-9]+$/, // Only digits
                      message: "Pincode should contain only numbers",
                    },
                  })}
                />
                {errors.pincode && <span className="text-danger">{errors.pincode.message}</span>}
              </div>
            </div>
            <div className="modal-footer">
              <input
                type="button"
                className="btn btn-default"
                onClick={()=>{navigate(path.manageBeneficiaries)}}
                data-dismiss="modal"
                value="Cancel"
              />
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BeneficiaryForm;
