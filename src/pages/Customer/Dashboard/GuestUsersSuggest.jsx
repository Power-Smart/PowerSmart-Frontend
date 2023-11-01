import { VscCheck, VscChromeClose } from 'react-icons/vsc'


const GuestUsersSuggest = ({room_name,place_name,suggest_description,guest_profile_pic}) => {
    return (
        <div className="one-guest-user">
            <div className="default-profile-img">
                <img src={guest_profile_pic} alt="" />
            </div>
            <div className="suggest-info text-sm m-3">
                <h3>Room :<span> {room_name}</span></h3>
                <h3>Place :<span> {place_name}</span></h3>
                <h3>Suggest :<span> {suggest_description}</span></h3>
            </div>
            {/* <div className="accept-reject">
                <button className="accept"><VscCheck /></button>
                <button className="reject"><VscChromeClose /></button>
            </div> */}
        </div>
    )
}

export default GuestUsersSuggest