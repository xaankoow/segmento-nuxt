import Workspace from "~~/interfaces/Models/Config/Workspace";
import Wallet from "~~/interfaces/Models/Wallet";
import Limit from "~~/interfaces/Limit";
import User from "~~/interfaces/User";
import Request from "~~/Api/Request";
import Plan from "~~/interfaces/Plan";
import Site from "~~/interfaces/Site";

export default class ConfigStore {
  static init(data: any): boolean {
    const promises = [];
    promises.push(ConfigStore.set_token(data.token));
    promises.push(ConfigStore.set_wallets(JSON.stringify(data.wallets)));
    // promises.push(ConfigStore.set_roles(JSON.stringify(data.workspaces)));

    const parsedSites: Site[] =
      typeof data.workspaces === "string"
        ? JSON.parse(data.workspaces)
        : data.workspaces;
    const SitesStore = useSitesStore();
    SitesStore.updateSitesData(parsedSites);

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
              ConfigStore.set_wallets(JSON.stringify(response.data.wallets));
              // ConfigStore.set_roles(JSON.stringify(response.data.workspaces));
              const data = response.data;
              const parsedSites: Site[] =
                typeof data.workspaces === "string"
                  ? JSON.parse(data.workspaces)
                  : data.workspaces;
              const SitesStore = useSitesStore();
              SitesStore.updateSitesData(parsedSites);

              const parsedUser: User =
                typeof data.user === "string"
                  ? JSON.parse(data.user)
                  : data.user;
              const userStore = useUserStore();
              userStore.updateUserData(parsedUser);

              const parsedPlan: Plan =
                typeof data.plan === "string"
                  ? JSON.parse(data.plan)
                  : data.plan;
              const planStore = usePlanStore();
              planStore.updatePlanData(parsedPlan);

              const parsedLimits: Limit[] =
                typeof data.limits === "string"
                  ? JSON.parse(data.limits)
                  : data.limits;
              const limitsStore = useLimitsStore();
              limitsStore.updateLimitsData(parsedLimits);
              resolve(); // Resolve the promise if everything is successful
            }
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

  public static set_wallets(wallets: any) {
    useCookie("wallets").value = wallets;
  }

  public static set_roles(roles: any) {
    useCookie("rolse").value = roles;
  }

  public static wallets(): Wallet[] {
    const walletData = useCookie("wallets").value;
    return Array.isArray(walletData) ? walletData : [];
  }

  public static token(): String {
    return String(useCookie("token").value);
  }

  public static roles(): string[] {
    const rolesData = useCookie("roles").value;
    if (Array.isArray(rolesData)) {
      return rolesData;
    } else {
      return [];
    }
  }

  public static logout() {
    this.set_token(null);
    this.set_wallets(null);
    this.set_roles(null);
  }
}
