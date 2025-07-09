import React from 'react';

export default function AccountDashboard() {
  return (
    <main className="main pages">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="/" rel="nofollow">
              Home <i className="fi-rs-home mr-5"></i>
            </a>
            <span></span> Pages <span></span> My Account
          </div>
        </div>
      </div>

      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row">
                {/* Sidebar */}
                <div className="col-md-3">
                  <div className="dashboard-menu">
                    <ul className="nav flex-column" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="dashboard-tab" data-bs-toggle="tab" href="#dashboard" role="tab">
                          <i className="fi-rs-settings-sliders mr-10"></i>Dashboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="orders-tab" data-bs-toggle="tab" href="#orders" role="tab">
                          <i className="fi-rs-shopping-bag mr-10"></i>Orders
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="track-orders-tab" data-bs-toggle="tab" href="#track-orders" role="tab">
                          <i className="fi-rs-shopping-cart-check mr-10"></i>Track Your Order
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="address-tab" data-bs-toggle="tab" href="#address" role="tab">
                          <i className="fi-rs-marker mr-10"></i>My Address
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="account-detail-tab" data-bs-toggle="tab" href="#account-detail" role="tab">
                          <i className="fi-rs-user mr-10"></i>Account details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/login">
                          <i className="fi-rs-sign-out mr-10"></i>Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Content */}
                <div className="col-md-9">
                  <div className="tab-content account dashboard-content pl-50">
                    {/* Dashboard */}
                    <div className="tab-pane fade show active" id="dashboard" role="tabpanel">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Hello Rosie!</h3>
                        </div>
                        <div className="card-body">
                          <p>
                            From your account dashboard, you can easily check &amp; view your <a href="#">recent orders</a>,<br />
                            manage your <a href="#">shipping and billing addresses</a>, and <a href="#">edit your password and account details.</a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Orders */}
                    <div className="tab-pane fade" id="orders" role="tabpanel">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Your Orders</h3>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Total</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>#1357</td>
                                  <td>March 45, 2020</td>
                                  <td>Processing</td>
                                  <td>$125.00 for 2 item</td>
                                  <td><a href="#" className="btn-small d-block">View</a></td>
                                </tr>
                                <tr>
                                  <td>#2468</td>
                                  <td>June 29, 2020</td>
                                  <td>Completed</td>
                                  <td>$364.00 for 5 item</td>
                                  <td><a href="#" className="btn-small d-block">View</a></td>
                                </tr>
                                <tr>
                                  <td>#2366</td>
                                  <td>August 02, 2020</td>
                                  <td>Completed</td>
                                  <td>$280.00 for 3 item</td>
                                  <td><a href="#" className="btn-small d-block">View</a></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Track Order */}
                    <div className="tab-pane fade" id="track-orders" role="tabpanel">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Orders tracking</h3>
                        </div>
                        <div className="card-body contact-from-area">
                          <p>
                            To track your order please enter your OrderID in the box below and press "Track" button.
                            This was given to you on your receipt and in the confirmation email you should have received.
                          </p>
                          <div className="row">
                            <div className="col-lg-8">
                              <form className="contact-form-style mt-30 mb-50">
                                <div className="input-style mb-20">
                                  <label>Order ID</label>
                                  <input name="order-id" placeholder="Found in your order confirmation email" type="text" />
                                </div>
                                <div className="input-style mb-20">
                                  <label>Billing email</label>
                                  <input name="billing-email" placeholder="Email you used during checkout" type="email" />
                                </div>
                                <button className="submit submit-auto-width" type="submit">Track</button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="tab-pane fade" id="address" role="tabpanel">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card mb-3 mb-lg-0">
                            <div className="card-header">
                              <h3 className="mb-0">Billing Address</h3>
                            </div>
                            <div className="card-body">
                              <address>
                                3522 Interstate<br />
                                75 Business Spur,<br />
                                Sault Ste. Marie, MI 49783
                              </address>
                              <p>New York</p>
                              <a href="#" className="btn-small">Edit</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-header">
                              <h5 className="mb-0">Shipping Address</h5>
                            </div>
                            <div className="card-body">
                              <address>
                                4299 Express Lane<br />
                                Sarasota, FL 34249 USA<br />
                                Phone: 1.941.227.4444
                              </address>
                              <p>Sarasota</p>
                              <a href="#" className="btn-small">Edit</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Account Details */}
                    <div className="tab-pane fade" id="account-detail" role="tabpanel">
                      <div className="card">
                        <div className="card-header">
                          <h5>Account Details</h5>
                        </div>
                        <div className="card-body">
                          <p>Already have an account? <a href="/login">Log in instead!</a></p>
                          <form>
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>First Name <span className="required">*</span></label>
                                <input required className="form-control" name="name" type="text" />
                              </div>
                              <div className="form-group col-md-6">
                                <label>Last Name <span className="required">*</span></label>
                                <input required className="form-control" name="lastName" type="text" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Display Name <span className="required">*</span></label>
                                <input required className="form-control" name="dname" type="text" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Email Address <span className="required">*</span></label>
                                <input required className="form-control" name="email" type="email" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Current Password <span className="required">*</span></label>
                                <input required className="form-control" name="password" type="password" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>New Password <span className="required">*</span></label>
                                <input required className="form-control" name="newPassword" type="password" />
                              </div>
                              <div className="form-group col-md-12">
                                <label>Confirm Password <span className="required">*</span></label>
                                <input required className="form-control" name="confirmPassword" type="password" />
                              </div>
                              <div className="col-md-12">
                                <button type="submit" className="btn btn-fill-out submit font-weight-bold">Save Change</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                  </div> {/* End tab-content */}
                </div> {/* End main content column */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
