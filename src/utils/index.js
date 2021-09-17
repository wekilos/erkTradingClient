export const logout = () => {
    localStorage.removeItem("erkProfile");
  };
  
  export const isLogin = () => {
    if (localStorage.getItem("erkProfile")) {
      var data = JSON.parse(localStorage.getItem("erkProfile"));
      if (data.token) {
        return true;
      } else {
        localStorage.removeItem("erkProfile");
      }
    }
    return false;
  };
  
  export const isLoginAdmin = () => {
    if (localStorage.getItem("erkProfile")) {
      var data = JSON.parse(localStorage.getItem("erkProfile"));
      if (data.token) {
        return true;
      } else {
        localStorage.removeItem("erkProfile");
      }
    } else {
      return false;
    }
  };
  