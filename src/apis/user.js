import { apiHelper } from "./../utils";

export default {
  getUsers(userPerPage) {
    return apiHelper.get(
      `?results=${userPerPage}&inc=login,gender,name,location,email,dob,picture&noinfo`
    );
  },
};
