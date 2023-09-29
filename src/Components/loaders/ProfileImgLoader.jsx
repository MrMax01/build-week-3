import { Image } from "react-bootstrap";

const ProfileImgLoader = () => {
  return (
    <>
      <Image
        width={27}
        height={27}
        className="rounded-circle mt-2 bg-danger "
        style={{ animation: "blink 1.2s linear infinite" }}
      />
      <br />
      {/* <span>Tu</span> */}
    </>
  );
};
export default ProfileImgLoader;
