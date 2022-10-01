import BodyContent from "./Profile/Posts/Profile"
import SettingsProfile from "./Profile/Sections/ProfileSections"

const WrappContentSite = ()=> {
    return(
        <div className="wrap-profile-site">
            <BodyContent/>
            <SettingsProfile/>
        </div>
    )
}

export default WrappContentSite;