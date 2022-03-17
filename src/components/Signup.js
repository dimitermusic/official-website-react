import '../styles/style.css';
import React, { useState, Suspense } from 'react';
import BeatLoader from 'react-spinners/BeatLoader'

export default function Signup() {

    const Footer = React.lazy(() => import('./Footer'))

    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [robotInput, setRobotInput] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either name, email, and message.
        if (inputType === 'FULLNAME') {
            setName(inputValue);
        } else if (inputType === 'EMAIL') {
            setEmail(inputValue);
        } else if (inputType === 'b_ea9416c85051a9c2c512c1604_e8695d45d2') {
            setRobotInput(inputValue)
        }

    };

    return (
        <>
            <div id='subscribe'>
                <div id='mc_embed_signup'>
                    <form
                        action='https://dimitermusic.us14.list-manage.com/subscribe/post?u=ea9416c85051a9c2c512c1604&amp;id=e8695d45d2'
                        method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate'
                        target='_blank' noValidate>
                        <div id='mc_embed_signup_scroll'>
                            <h1>SUBSCRIBE</h1>
                            <div className='mc-field-group'>
                                <input type='text' value={name} onChange={handleInputChange} placeholder='Full Name' name='FULLNAME' className='required'
                                    id='mce-FULLNAME' />
                            </div>
                            <div className='mc-field-group'>
                                <input type='email' value={email} onChange={handleInputChange} placeholder='Email Address' name='EMAIL' className='required email'
                                    id='mce-EMAIL' />
                            </div>
                            <div id='mce-responses' className='clear foot'>
                                <div className='response' id='mce-error-response' style={{ display: 'none' }}></div>
                                <div className='response' id='mce-success-response' style={{ display: 'none' }}></div>
                            </div>
                            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden='true'><input type='text'
                                name='b_ea9416c85051a9c2c512c1604_e8695d45d2' tabIndex='-1' value={robotInput} onChange={handleInputChange} /></div>
                            <div>
                                <div className='clear foot'>
                                    <input type='submit' value='SUBSCRIBE' readOnly name='subscribe' className='button btn subscribe' />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
            </div >
            <Suspense fallback={<BeatLoader />}>
                <Footer />
            </Suspense>
        </>
    )
}