import React, { Component } from "react";
import ProfileForm from "../../components/ProfileForm"
// import BoxProfile from "../../misc/Profile";
import "./index.css"
class Scratch extends Component {

    render() {
        return (
            <div>
                <h1>Scratch page</h1>
                <h2>For experiments</h2>
                {/* <BoxProfile/> */}
                <img className="profImg"
                    src="http://api.decentprofile.com/images/0x27b953b3C226e7516569E99029EA2062D4003612"
                    alt="new"
                />

                <ProfileForm />
            </div>
        );
    }
}

export default Scratch;