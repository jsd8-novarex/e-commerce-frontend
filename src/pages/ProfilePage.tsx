import DesktopProfilePage from "../components/profilePage/ProfileDesktop";
import MobileProfilePage from "../components/profilePage/ProfileMobile";

function ProfilePage() {
  return (
    <div>
      <MobileProfilePage />
      <DesktopProfilePage />
    </div>
  );
}
export default ProfilePage;
