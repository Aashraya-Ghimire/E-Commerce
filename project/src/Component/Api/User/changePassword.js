import SecureFetch from "../Auth/ApiConfiguration";
import mainEndpoint from "../mainEndpoint";

const changePassword = async (tempData) => {
  const request = await SecureFetch(
    mainEndpoint + "/user/update",
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    tempData
  );
  if (request.status == 200) {
    alert("Password Changed sucessfully");
  } else {
    alert("something went wrong please try again");
  }
};
export default changePassword;
