import React from "react";

const PersonalInfoCard = () => {
  return (
    <>
      <div className="d-flex justify-content-center vh-100 align-items-center">
        <div className="border p-3 w-50">
          <form className="">
            {/* firstname & lastname */}
            <div className="row">
              <div className="col">
                <label className="fs-4 mb-2" htmlFor="firstname">
                  Firstname
                </label>
                <input type="text" className="form-control" id="firstname" />
                <label className="text-secondary mt-2" htmlFor="firstname">
                  Firstname
                </label>
              </div>
              <div className="col">
                <label className="fs-4 mb-2" htmlFor="lastname">
                  Lastname
                </label>
                <input type="text" className="form-control" id="lastname" />
                <label className="text-secondary mt-2" htmlFor="lastname">
                  Lastname
                </label>
              </div>
            </div>

            {/* email */}
            <div className="mt-3 mb-2">
            <label className="fs-4 mb-2 form-label" htmlFor="email">
                E-mail
              </label>
              <input type="email" id="email" className="form-control" />
              <label className="text-secondary mt-2" htmlFor="email">
                E-mail
              </label>
            </div>

            {/* gender */}
            <div className="text-start mb-5">
              <label className="mb-2 fs-4">Gender: </label>
              <div className="d-flex gap-5">
                <div className="d-flex gap-2">
                  <input type="radio" id="male" name="gender" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="d-flex gap-2">
                  <input type="radio" id="female" name="gender" />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="d-flex gap-2">
                  <input type="radio" id="preferNotToSay" name="gender" />
                  <label htmlFor="preferNotToSay">Prefer not to say</label>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="btn btn-success w-100 btn-lg d-flex justify-content-center align-items-center"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoCard;