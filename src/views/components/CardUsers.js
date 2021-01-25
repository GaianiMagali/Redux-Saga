import React from 'react';
import avatar from '../../img/user.png';

export const CardUsers = ({ user }) => {
    const { name, email } = user;

    return (
        <div className="col-md-4">
            <div className="card my-4" style={{ width: "18rem" }}>
                <img src={avatar} className="card-img-top p-3" alt="avatar" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{email}</h6>

                    <a href="#" class="btn btn-info d-md-block mt-4 text-white">Go details</a>
                </div>
            </div>
        </div>
    )
}
