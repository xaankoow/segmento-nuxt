import User from "~~/interfaces/User";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    name: "",
    img: "",
    email: {
      value: "",
      ok: false,
    },
    mobile: {
      value: "",
      ok: false,
    },
    lang: "",
  }),
  actions: {
    // Method to update user data
    updateUserData(newData: User) {
      this.name = newData.name;
      this.img = newData.img;
      this.email = newData.email;
      this.mobile = newData.mobile;
      this.lang = newData.lang;
    },
  },
});
