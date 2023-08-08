import { VscCheck, VscChromeClose } from 'react-icons/vsc'


const GuestUsersSuggest = () => {
    return (
        <div className="one-guest-user">
            <div className="default-profile-img">
                <img src="https://avatars.githubusercontent.com/u/73744585?v=4" alt="" />
            </div>
            <div className="suggest-info">
                <h3>Temperature :<span> 30°C</span></h3>
                <h3>Light Intensity :<span> 30%</span></h3>
                <h3>Room Status :<span> Occupied</span></h3>
            </div>
            <div className="accept-reject">
                <button className="accept"><VscCheck /></button>
                <button className="reject"><VscChromeClose /></button>
            </div>
        </div>
    )
}

export default GuestUsersSuggest