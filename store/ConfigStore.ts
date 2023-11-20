import type Limit from "~~/interfaces/Limit";
import type User from "~~/interfaces/User";
import type Plan from "~~/interfaces/Plan";
import type Site from "~~/interfaces/Site";
import type Wallet from "~~/interfaces/Wallet";
import Request from "~~/Api/Request";

export default class ConfigStore {
  static init(data: any): boolean {
    const promises = [];
    promises.push(ConfigStore.set_token(data.token));

    const parsedWallets: Wallet[] =
      typeof data.wallets === "string"
        ? JSON.parse(data.wallets)
        : data.wallets;
    const WalletsStore = useWalletsStore();
    WalletsStore.updateWalletsData(parsedWallets);

    const parsedSites: Site[] =
      typeof data.workspaces === "string"
        ? JSON.parse(data.workspaces)
        : data.workspaces;
    const SitesStore = useSitesStore();
    SitesStore.updateSitesData(parsedSites);
    ConfigStore.set_current_site(data.workspaces[0] ?? null);

    const parsedUser: User =
      typeof data.user === "string" ? JSON.parse(data.user) : data.user;
    const userStore = useUserStore();
    userStore.updateUserData(parsedUser);

    const parsedPlan: Plan =
      typeof data.plan === "string" ? JSON.parse(data.plan) : data.plan;
    const planStore = usePlanStore();
    planStore.updatePlanData(parsedPlan);

    const parsedLimits: Limit[] =
      typeof data.limits === "string" ? JSON.parse(data.limits) : data.limits;
    const limitsStore = useLimitsStore();
    limitsStore.updateLimitsData(parsedLimits);

    // Wait for all promises to resolve
    Promise.all(promises)
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.error("Error initializing ConfigStore:", error);
        return false;
      });
    return true;
  }

  static reload(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        const request = new Request("v1");
        let response = await request
          .get("profile/init")
          .then((response) => {
            if (!response.data.user.img) {
              response.data.user.img = "/images/profileDefaultImg.png";
            }
            const data = response.data;

            const parsedWallets: Wallet[] =
              typeof data.wallets === "string"
                ? JSON.parse(data.wallets)
                : data.wallets;
            const WalletsStore = useWalletsStore();
            WalletsStore.updateWalletsData(parsedWallets);

            const parsedSites: Site[] =
              typeof data.workspaces === "string"
                ? JSON.parse(data.workspaces)
                : data.workspaces;
            const SitesStore = useSitesStore();
            SitesStore.updateSitesData(parsedSites);
            ConfigStore.set_current_site(data.workspaces[0] ?? null);

            const parsedUser: User =
              typeof data.user === "string" ? JSON.parse(data.user) : data.user;
            const userStore = useUserStore();
            userStore.updateUserData(parsedUser);

            const parsedPlan: Plan =
              typeof data.plan === "string" ? JSON.parse(data.plan) : data.plan;
            const planStore = usePlanStore();
            planStore.updatePlanData(parsedPlan);

            const parsedLimits: Limit[] =
              typeof data.limits === "string"
                ? JSON.parse(data.limits)
                : data.limits;
            const limitsStore = useLimitsStore();
            limitsStore.updateLimitsData(parsedLimits);
            resolve(); // Resolve the promise if everything is successful
          })
          .catch((err) => {
            ConfigStore.logout();
            navigateTo("/auth/login");
            reject(new Error("Failed to reload store")); // Reject the promise if there's an error
          });
      } catch (error) {
        console.error("Error reloading store:", error);
        reject(error); // Reject the promise if there's an error
      }
    });
  }

  public static set_token(token: any) {
    useCookie("token").value = token;
  }

  public static token(): String {
    return String(useCookie("token").value);
  }

  public static set_current_site(current_site: any) {
    useCookie("current_site").value = current_site;
  }

  public static current_site(): String {
    return String(useCookie("current_site").value);
  }

  public static logout() {
    this.set_token(null);
    this.set_current_site(null);
  }
}
