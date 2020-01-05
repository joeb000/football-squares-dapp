import React, { Component } from "react";
import ProfileForm from "../../components/ProfileForm"
import ProfileCard from "../../components/ProfileCard"
import { MyWeb3Consumer } from '../../Web3Context';

class ProfilePage extends Component {

    render() {
        return (

            <div>
                <section className="section-padding">
                <h1>Profile Page</h1>
                <h2>Create Profile:</h2>
                <ProfileForm />
                <h2>Your Profile:</h2>

                <MyWeb3Consumer>
                    {props => {
                        console.log("prooo", props)
                        if (props.loaded){
                            return  (<div> <ProfileCard address={props.accounts[0]} />  </div>)
                        }
                        return <div>empty</div>

                    }}
                </MyWeb3Consumer>
                </section> 
            </div>

        );
    }
}

export default ProfilePage;