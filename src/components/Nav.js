import '../styles/style.css';
import { useState } from 'react';
import title from '../images/dimiter-yordanov-text.png';
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

    // Funtion to handle hiding nav bar when scrolling down and showing when scrolling up
    let prevScrollPos = window.pageYOffset;
    const handleNavBarHide = () => {
        let currentScrollPos = window.pageYOffset;
        let nav = document.getElementById('nav');
        let mobileNav = document.getElementById('mobile-nav');
        if (prevScrollPos > currentScrollPos) {
            nav.style.top = '0';
            nav.style.boxShadow = '0 6px 8px -1px rgb(0, 0, 0, .13)';
            mobileNav.style.top = '0';
            mobileNav.style.boxShadow = '0 6px 8px -1px rgb(0, 0, 0, .13)';
        } else {
            nav.style.top = `-${nav.offsetHeight}px`;
            document.getElementById('nav').style.boxShadow = 'none';
            mobileNav.style.top = '-100px';
            mobileNav.style.boxShadow = 'none';
        }
        prevScrollPos = currentScrollPos;
    }

    window.onscroll = handleNavBarHide

    // Function to handle hiding modal on tap outside of modal menu.
    window.onclick = (e) => {
        if (e.target === document.getElementById('modal')) {
            setModalDisplay('none');
        }
    }

    return (
        <>
            <nav id='nav'>
                <a href='#app'><img src={title} className='title' alt='dimiter yordanov' /></a>
                <div className='anchors'>
                    <a href='#watch'>watch</a>
                    <a href='#tour'>tour</a>
                    <a href='#subscribe'>subscribe</a>
                </div>
                <Icons />
            </nav>
            <div className='mobile-nav' id='mobile-nav'>
                <a href='#app'><img src={title} className='title' alt='dimiter yordanov' /></a>
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
                        <Icons className='modal-icons' />
                    </div>
                </div>
            </div>
        </>
    )
}