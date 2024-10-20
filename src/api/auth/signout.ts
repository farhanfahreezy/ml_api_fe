export const signout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("name");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  window.location.href = "/";
};
