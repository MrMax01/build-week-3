import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Default = () => {
  const navigation = useNavigate();

  useEffect(() => {
    navigation("/me");
  }, []);
  return " ";
};

export default Default;
