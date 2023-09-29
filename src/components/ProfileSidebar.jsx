import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileSidebar = () => {
  const myProfile = useSelector((state) => state.myProfile.myContent);

  return (
    <aside className="bg-light rounded border g-0 mb-2">
      <div className="p-md-3 border-bottom">
        <div className="d-flex p-md-3 justify-content-center">
          <img src={myProfile.image} alt="profile-img" width={100} height={100} className="rounded-circle" />
        </div>
        <div className="text-center d-none d-lg-block ">Welcome, {myProfile.name}!</div>
        <div className="text-center  d-md-none ">
          <Link to="/profile/me">
            <Button className="my-2">Visualizza il tuo profilo</Button>
          </Link>
        </div>
      </div>
      <div className=" d-none d-md-block p-3 border-bottom">
        <p className="m-0">
          <small>Connections</small>
        </p>
        <p>Grow your network</p>
      </div>
      <div className="d-none d-md-block p-3 border-bottom">
        <p className="m-0">
          <small>Access exclucive tools & insight</small>
        </p>
        <p>Try Premium for free</p>
      </div>
      <div className="d-none d-md-block p-3">
        <p>
          <i className="bi bi-bookmark-fill"></i> My Items
        </p>
      </div>
    </aside>
  );
};

export default ProfileSidebar;
