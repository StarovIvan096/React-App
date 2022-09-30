import Footer from "./Footer"
import BodyContent from "./Profile"
import SettingsProfile from "./ProfileSections"

const WrappContentSite = ()=> {
    return(
        <div className="wrap-profile-site">
            <BodyContent/>
            <SettingsProfile/>
            <Footer/>
        </div>
    )
}

export default WrappContentSite;