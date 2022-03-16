import '../styles/style.css';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
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
                <div className='modal' style={{ display: modalDisplay }}>
                    <div className='modal-menu'>
                        <div onClick={handleCloseModal}>
                            <FaTimes className='times' />
                        </div>
                        <ul>
                            <li>
                                <a onClick={handleCloseModal} href='#watch'>watch</a>
                            </li>
                            <li>
                                <a onClick={handleCloseModal} href='#tour'>tour</a>
                            </li>
                            <li>
                                <a onClick={handleCloseModal} href='#subscribe'>subscribe</a>
                            </li>
                        </ul>
                        <Icons />
                    </div>
                </div>
            </div>
        </>
    )
}