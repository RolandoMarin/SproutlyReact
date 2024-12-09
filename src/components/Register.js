import React from 'react';

const RegisterPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow" style={{ borderRadius: '20px' }}>
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Register</h2>

              <form>
             
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="Enter first name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Choose username"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Choose password"
                    required
                  />
                </div>

                <div className="mb-3 form-check">
                  <a href="/login" className="float-end" style={{ color: 'black' }}>
                    Already have an account?
                  </a>
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-outline-dark">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;