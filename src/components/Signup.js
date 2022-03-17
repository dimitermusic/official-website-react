import '../styles/style.css';
import React, { useState } from 'react';

export default function Signup() {

    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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
        }

    };

    return (
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
                            name='b_ea9416c85051a9c2c512c1604_e8695d45d2' tabIndex='-1' value='' /></div>
                        <div className='optionalParent'>
                            <div className='clear foot'>
                                <input type='submit' value='SUBMIT' name='subscribe' className='button btn' />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
            {/* <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FULLNAME';ftypes[1]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
        </div>
    )
}