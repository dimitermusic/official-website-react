import '../styles/style.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import scrollTo from "gatsby-plugin-smoothscroll"
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
                    <p onClick={scrollTo('#watch')}>watch</p>
                    <p onClick={scrollTo('#tour')}>tour</p>
                    <p onClick={scrollTo('#subscribe')}>subscribe</p>
                </div>
                <Icons />
            </nav>
            <div className='mobile-nav'>
                <div onClick={scrollTo('#landing')}><h1>Dimiter Yordanov</h1></div>
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
                                    scrollTo('#watch');
                                    handleCloseModal();
                                }}>watch</div>
                            </li>
                            <li>
                                <div onClick={() => {
                                    scrollTo('#tour');
                                    handleCloseModal();
                                }}>tour</div>
                            </li>
                            <li>
                                <div onClick={() => {
                                    scrollTo('#subscribe');
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