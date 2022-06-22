import React from "react";
import img4 from "../../images/img4.jpg";
import { Card } from "react-bootstrap";
const ProfilePhoto = () => {
  return (
    <>
      <Card.Img variant="top" src={img4} alt="myprofile immage" />
    </>
  );
};
export default ProfilePhoto;
