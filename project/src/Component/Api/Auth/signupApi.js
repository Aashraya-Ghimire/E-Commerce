import mainEndpoint from "../mainEndpoint";
import SecureFetch from "./ApiConfiguration";

const signupApi = async (userDetail, setStage, setUserDetail) => {
  const request = await SecureFetch(
    mainEndpoint + "/user/signup",
    "Post",
    {
      "content-type": "application/json",
    },
    userDetail
  );
  const response = await request.json();
  if (request.status == 200) {
    response.response.token;
    localStorage.setItem("token", response.response.token);
    localStorage.setItem("userDetail", JSON.stringify(response.response));
    window.location.href = "/";
  } else {
    setUserDetail({
      userName: "",
      contactNumber: "",
      email: "",
      password: "",
      city: "",
      street: "",
      deliveryDescription: "",
    });
    setStage(0);
  }
};
export default signupApi;
