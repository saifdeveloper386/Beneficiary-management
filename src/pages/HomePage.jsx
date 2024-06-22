import React from "react";
import { Link } from "react-router-dom/dist";
import path from "../utils/path";

const HomePage = () => {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Beneficiary</h1>
        <p className="lead">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Link className="btn btn-info btn-lg" to={path.manageBeneficiaries} role="button">
            Manage Beneficiary
          </Link>
        </p>
      </div>
    </>
  );
};

export default HomePage;
