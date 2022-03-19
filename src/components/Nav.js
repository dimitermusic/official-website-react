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

    return (
        <>
            <nav>
                <h1>Dimiter Yordanov</h1>
                <div className='anchors'>
                    <a href='#watch'>watch</a>
                    <a href='#tour'>tour</a>
                    <a href='#subscribe'>subscribe</a>
                </div>
                <Icons />
            </nav>
            <div className='mobile-nav'>
                <a href='#'><h1>Dimiter Yordanov</h1></a>
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
                                <a href='#watch' onClick={() => {
                                    handleCloseModal();
                                }}>watch</a>
                            </li>
                            <li>
                                <a href='#tour' onClick={() => {
                                    handleCloseModal();
                                }}>tour</a>
                            </li>
                            <li>
                                <a href='#subscribe' onClick={() => {
                                    handleCloseModal();
                                }}>subscribe</a>
                            </li>
                        </ul>
                        <Icons />
                    </div>
                </div>
            </div>
        </>
    )
}