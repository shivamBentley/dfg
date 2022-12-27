import React from 'react'
import '../../../styles/core/cards/ResumeCard.scss'
function ResumeCard({ title, heading, date, address, items, width }) {
    return (
        <div className='card-container' style={{ width: `${width}` }}>
            <h1 className='title'>{title}</h1>
            <div className='main-content'>
                <div className='circle'></div>
                <div className='sub-content'>
                    <h3 className='heading'>{heading}</h3>
                    <div className='time-stamp'>
                        {date ? <p className='date-time'>{date}</p> : ''}
                        {address ? <p className='address'>{address}</p> : ''}
                    </div>
                    <div>
                        <ul>
                            {
                                items.map((item) => (
                                    <li>{item}</li>
                                ))
                            }
                        </ul>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ResumeCard