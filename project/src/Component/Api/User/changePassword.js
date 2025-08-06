import SecureFetch from "../Auth/ApiConfiguration";

const changePassword = async (tempData) => {
  const request = await SecureFetch(
    "http://localhost:3000/user/update",
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
