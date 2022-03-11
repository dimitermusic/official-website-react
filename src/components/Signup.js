import '../styles/style.css'

export default function Signup() {
    return (
        <div id="mc_embed_signup">
            <form
                action="https://dimitermusic.us14.list-manage.com/subscribe/post?u=ea9416c85051a9c2c512c1604&amp;id=e8695d45d2"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate"
                target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">
                    <h1>SUBSCRIBE</h1>
                    <div class="mc-field-group">
                        <input type="text" value="" placeholder="Full Name" name="FULLNAME" class="required"
                            id="mce-FULLNAME" />
                    </div>
                    <div class="mc-field-group">
                        <input type="email" value="" placeholder="Email Address" name="EMAIL" class="required email"
                            id="mce-EMAIL" />
                    </div>
                    <div id="mce-responses" class="clear foot">
                        <div class="response" id="mce-error-response" style={{ display: 'none' }}></div>
                        <div class="response" id="mce-success-response" style={{ display: 'none' }}></div>
                    </div>
                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                    <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input type="text"
                        name="b_ea9416c85051a9c2c512c1604_e8695d45d2" tabindex="-1" value="" /></div>
                    <div class="optionalParent">
                        <div class="clear foot">
                            <input type="submit" value="SUBMIT" name="subscribe" class="button btn" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}