import React from 'react'
import { Link } from 'react-router-dom'

export const Tab = () => {
    return (
        <>
            <div className="tabs is-large is-centered is-boxed mb-5">
                <ul>
                    <li><Link to="/">User Details Form</Link></li>
                    <li><Link to="/address">User Address Form</Link></li>
                    <li><Link to="/edu">User Education Form</Link></li>
                    <li><Link to="/occupation">User Occupation Form</Link></li>
                </ul>
            </div>
        </>
    )
}
