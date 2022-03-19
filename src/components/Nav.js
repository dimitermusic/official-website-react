import '../styles/style.css';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import scrollTo from "gatsby-plugin-smoothscroll"
import Icons from '../components/Icons';

export default function Nav() {

    const [modalDisplay, setModalDisplay] = useState('none');


    const handleOpenModal = () => {
        setModalDisplay('flex');
    }

    const handleCloseModal = () => {
        setModalDisplay('none');
    }

    window.onclick = (e) => {
        if (e.target === document.getElementById('modal')) {
            e.preventDefault();
            setModalDisplay('none');
        }
    }

    return (
        <>
            <nav>
                <h1>Dimiter Yordanov</h1>
                <div className='anchors'>
                    <p onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#watch')
                    }}>watch</p>
                    <p onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#tour')
                    }}>tour</p>
                    <p onClick={(e) => {
                        e.preventDefault();
                        scrollTo('#subscribe')
                    }}>subscribe</p>
                </div>
                <Icons />
            </nav>
            <div className='mobile-nav'>
                <div onClick={(e) => {
                    e.preventDefault();
                    scrollTo('#landing')
                }}><h1>Dimiter Yordanov</h1></div>
                <div onClick={(e) => {
                    e.preventDefault();
                    handleOpenModal
                }}>
                    <FaBars className='hamburger' />
                </div>
                <div className='modal' style={{ display: modalDisplay }} id='modal'>
                    <div className='modal-menu'>
                        <div onClick={handleCloseModal}>
                            <FaTimes className='times' />
                        </div>
                        <ul>
                            <li>
                                <div onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#watch');
                                    handleCloseModal();
                                }}>watch</div>
                            </li>
                            <li>
                                <div onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo('#tour');
                                    handleCloseModal();
                                }}>tour</div>
                            </li>
                            <li>
                                <div onClick={(e) => {
                                    e.preventDefault();
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