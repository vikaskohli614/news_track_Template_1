import React from 'react';
import './MoreButton.css';



function MoreButton() {
    return (
        <div className='postnav'>
            <ul className='postnav-ul'>
                <li className='postnav-li'>
                    <a className='postnav-a' href="/">1</a>
                </li>
                <li className='postnav-li'>
                    <a className='postnav-a' href="/">2</a>
                </li>
                <li className='postnav-li'>
                    <a className='postnav-a' href="/">&raquo;</a>
                </li>
            </ul>
        </div>
    )
}

export default MoreButton;