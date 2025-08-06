import SecureFetch from "../Auth/ApiConfiguration";

const updateUserApi = async (updatedData) => {
  const request = await SecureFetch(
    "http://localhost:3000/user/userDetail",
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    updatedData
  );

  const response = await request.json();
  console.log("updatedData", updatedData);
  if (request.status == 200) {
    console.log("request", response);
    localStorage.setItem("userDetail", JSON.stringify(response.response));
    alert("Profile updated sucessfully");
    window.location.href = "/";
  } else if (request.status == 401) {
    alert("Hello");
  }
};
export default updateUserApi;
