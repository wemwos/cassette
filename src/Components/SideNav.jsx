import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faFileAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/side-nav.css';

function SideNav({activePage}) {
    const active = activePage;
    const navItems = [
        { text: 'Dashboard', icon: faChartLine },
        { text: 'User Management', icon: faUsers },
        { text: 'Artist Management', icon: faUser },
        { text: 'Content Management', icon: faFileAlt }
    ];

    return (
        <nav className="col-3">
            <ul className='w-100 d-flex flex-column list-unstyled align-items-start gap-4 py-4 px-2'>
                {navItems.map((item, index) => (
                    <li key={index} className={`d-flex align-items-center ${item.text === active ? 'active' : ''}`}>
                        <FontAwesomeIcon icon={item.icon} />
                        <span className="ml-2">{item.text}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SideNav;
