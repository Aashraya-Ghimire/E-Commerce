import SecureFetch from "../Auth/ApiConfiguration";
import mainEndpoint from "../mainEndpoint";

const deleteUserApi = async () => {
  const request = await SecureFetch(mainEndpoint + "/user/", "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });
  console.log(userDetail);
  if (request.status == 200) {
    alert("account deleted sucessfully");
    localStorage.removeItem("token");
    localStorage.removeItem("userDetail");
    localStorage.removeItem("cart1");
    window.location.href = "/";
  } else {
    alert("Something went wrong please try again");
  }
};
export default deleteUserApi;
