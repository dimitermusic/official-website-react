import '../styles/style.css';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import scrollTo from "gatsby-plugin-smoothscroll"
import Icons from '../components/Icons';

export default function Nav() {

    const [modalDisplay, setModalDisplay] = useState('none');

    function handleOpenModal() {
        setModalDisplay('flex')
    }

    function handleCloseModal() {
        setModalDisplay('none')
    }

    return (
        <>
            <nav>
                <h1>Dimiter Yordanov</h1>
                <div className='anchors'>
                    <div onClick={() => scrollTo('#watch')}>watch</div>
                    <div onClick={() => scrollTo('#tour')}>tour</div>
                    <div onClick={() => scrollTo('#subscribe')}>subscribe</div>
                </div>
                <Icons />
            </nav>
            <div className='mobile-nav'>
                <div onClick={() => scrollTo('#root')}><h1>Dimiter Yordanov</h1></div>
                <div onClick={handleOpenModal}>
                    <FaBars className='hamburger' />
                </div>
                <div className='modal' style={{ display: modalDisplay }}>
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