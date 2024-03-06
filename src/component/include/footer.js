import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>

            <div className='footer-main-wrapper'>
                <ul className='footer-wrapper'>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li><Link to={'/product'}>Product</Link></li>

                </ul>
            </div>

        </div>
    )
}
