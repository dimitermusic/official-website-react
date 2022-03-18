import '../styles/style.css';
import React, { useState, Suspense } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import scrollTo from "gatsby-plugin-smoothscroll"
import Icons from '../components/Icons';
import Spinner from '../components/Spinner';

const Landing = React.lazy(() => import('./Landing'));

export default function Nav() {

    const [modalDisplay, setModalDisplay] = useState('none');

    function handleOpenModal() {
        setModalDisplay('flex')
    }

    function handleCloseModal() {
        setModalDisplay('none')
    }

    window.onclick = (e) => {
        if (e.target === document.getElementById('modal')) {
            setModalDisplay('none')
        }
    }

    return (
        <>
            <nav>
                <h1>Dimiter Yordanov</h1>
                <div className='anchors'>
                    <p onClick={() => scrollTo('#watch')}>watch</p>
                    <p onClick={() => scrollTo('#tour')}>tour</p>
                    <p onClick={() => scrollTo('#subscribe')}>subscribe</p>
                </div>
                <Icons />
            </nav>
            <div className='mobile-nav'>
                <div onClick={() => scrollTo('#landing')}><h1>Dimiter Yordanov</h1></div>
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
            <Suspense fallback={<Spinner />}>
                <Landing />
            </Suspense>
        </>
    )
}