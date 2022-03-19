import '../styles/style.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Icons from '../components/Icons';

export default function Nav() {

    const [modalDisplay, setModalDisplay] = useState('none');

    // Function to handle displaying modal on hamburger icon click.
    const handleOpenModal = () => {
        setModalDisplay('flex');
    }

    // Function to handle hiding modal on times icon click.
    const handleCloseModal = () => {
        setModalDisplay('none');
    }

    // Function to handle hiding modal on tap outside of modal menu.
    window.onclick = (e) => {
        if (e.target === document.getElementById('modal')) {
            setModalDisplay('none');
        }
    }

    // Function that takes in element id name and uses built in scroll method with "smooth" option.
    const handleSmoothScroll = (elementId) => {
        const element = document.getElementById('watch')
        element.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <nav>
                <h1>Dimiter Yordanov</h1>
                <div className='anchors'>
                    <p onClick={() => handleSmoothScroll('watch')}>watch</p>
                    <p onClick={() => handleSmoothScroll('tour')}>tour</p>
                    <p onClick={() => handleSmoothScroll('subscribe')}>subscribe</p>
                </div>
                <Icons />
            </nav>
            <div className='mobile-nav'>
                <div><h1>Dimiter Yordanov</h1></div>
                <div onClick={handleOpenModal}>
                    <FaBars className='hamburger' />
                </div>
                <div className='modal' style={{ display: modalDisplay }} id='modal'>
                    <div className='modal-menu'>
                        <div onClick={handleCloseModal}>
                            <FaTimes className='times' />
                        </div>
                        <ul>
                            <li>
                                <div onClick={() => {
                                    handleSmoothScroll('watch')
                                    handleCloseModal();
                                }}>watch</div>
                            </li>
                            <li>
                                <div onClick={() => {
                                    handleSmoothScroll('tour')
                                    handleCloseModal();
                                }}>tour</div>
                            </li>
                            <li>
                                <div onClick={() => {
                                    handleSmoothScroll('subscribe')
                                    handleCloseModal();
                                }}>subscribe</div>
                            </li>
                        </ul>
                        <Icons />
                    </div>
                </div>
            </div>
        </>
    )
}