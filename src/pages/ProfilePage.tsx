import DesktopProfilePage from "../components/profile/ProfileDesktop";
import MobileProfilePage from "../components/profile/ProfileMobile";

function ProfilePage() {
  return (
    <div className='min-h-screen w-full px-5 pt-24 sm:px-10'>
      <MobileProfilePage />
      <DesktopProfilePage />
    </div>
  );
}
export default ProfilePage;
