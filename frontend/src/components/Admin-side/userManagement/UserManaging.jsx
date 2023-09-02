import React from 'react';
import './UserManaging.css'

const UserManaging = () => {
  

return(
    
   <div className="row justify-content-center m-0">
                <div className="col-md-8 mt-5 mb-5">
                    <div className="card">
                        <div className="card-header p-3">
                            <div className="card-header-flex">
                                <h5 className="text-dark m-0">User Management</h5>
                                <button className="btn btn-danger mt-0 btn-sm" ><i className="fa fa-trash-alt mr-2"></i><span>Empty Cart</span></button> 
                            </div>
                        </div>
                        <div className="card-body p-0">
                          <table className="table cart-table mb-0">
                                    <tbody>
                                        <tr>
                                            <td colSpan="6">
                                                <div className="cart-empty">
                                                    <i className="fa fa-shopping-cart"></i>
                                                    <p>Your Cart Is empty</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> :
                                    <table className="table cart-table mb-0">
                                        <thead>
                                            <tr>
                                                <th>User ID</th>
                                                <th>Image</th>
                                                <th>Gender</th>
                                                <th>Username</th>
                                                <th>Date of Birth</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                          
                                                        <tr key="">
                                                            <td><button className="prdct-delete" ><i className="fa fa-trash-alt"></i></button></td>
                                                            <td><div className="product-img"><img src=" " alt="" /></div></td>
                                                            <td><div className="product-name"><p></p></div></td>
                                                            <td></td>
                                                            <td>
                                                                {/* <div className="prdct-qty-container">
                                                                    <button className="prdct-qty-btn" type="button" >
                                                                        <i className="fa fa-minus"></i>
                                                                    </button>
                                                                    <input type="text" name="qty" className="qty-input-box" disabled />
                                                                    <button className="prdct-qty-btn" type="button">
                                                                        <i className="fa fa-plus"></i>
                                                                    </button>
                                                                </div> */}
                                                            </td>
                                                            <td>hai</td>
                                                            <td className="text-right"> <button className="btn btn-danger mt-0 btn-sm"><span>Edit profile</span></button></td>
                                                        </tr>
                                       
                                        </tbody>
                                    </table>
                        </div>
                    </div>
                </div>
            </div>
   
);
}

export default UserManaging;
