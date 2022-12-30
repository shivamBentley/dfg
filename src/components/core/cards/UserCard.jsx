import React from 'react'
import "../../../styles/core/cards/UserCard.scss"

function UserCard({ name, university, degree, year }) {
    return (
        <div>
            <div className='user-card-container'>
                <div >
                    <img
                        className='user-image'
                        src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png"
                        alt="Profile"
                        width="250px"
                    />
                </div>
                <h2 className="user-name" >{name}</h2>
                <p className="user-college" >{university}</p>
                <p className="user-degree">{degree}</p>
                <p className="user-year">{year}</p>
            </div>
        </div>
    )
}

export default UserCard