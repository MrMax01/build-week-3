import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const ProfileSidebar = () => {
  const myProfile = useSelector((state) => state.myProfile.myContent);

  return (
    <Container className="w-100">
      <aside className="bg-light rounded border">
        <div className="p-3 border-bottom">
          <div className="d-flex p-3 justify-content-center">
            <img src={myProfile.image} alt="profile-img" width={100} height={100} className="rounded-circle" />
          </div>
          <div className="text-center ">Welcome, {myProfile.name}!</div>
        </div>
        <div className="p-3 border-bottom">
          <p className="m-0">
            <small>Connections</small>
          </p>
          <p>Grow your network</p>
        </div>
        <div className="p-3 border-bottom">
          <p className="m-0">
            <small>Access exclucive tools & insight</small>
          </p>
          <p>Try Premium for free</p>
        </div>
        <div className="p-3">
          <p>
            <i className="bi bi-bookmark-fill"></i> My Items
          </p>
        </div>
      </aside>
    </Container>
  );
};

export default ProfileSidebar;
