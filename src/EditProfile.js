import React, {useState} from "react";

export default function EdifProfile(){
    const [profile, setProfile] = useState({});

    const handleChange = ({target}) => {
        const {name, value} = target ;
        setProfile((preProfile) => ({
            ...preProfile, 
            [name]: value
        }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(profile, '', 2));
    };

    return(
        <div className="w-75 mt-5 mx-auto">
            <form onSubmit={handleSubmit}>
            <input
                value={profile.firstName || ''}
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                className="form-control mt-3"
            />
            <input
                value={profile.lastName || ''}
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="form-control mt-3"

            />
            <input
                value={profile.bday || ''}
                type="date"
                name="bday"
                onChange={handleChange}
                className="form-control mt-3"

            />
            <input
                value={profile.password || ''}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                className="form-control mt-3"

            />
            <button type="submit" className="btn btn-primary mt-3 float-end">Submit</button>
            </form>
        </div>
    )
}