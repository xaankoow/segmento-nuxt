import Workspace from "~~/interfaces/Models/Config/Workspace";
import Wallet from "~~/interfaces/Models/Wallet";
import Limit from "~~/interfaces/Limit";
import User from "~~/interfaces/User";
import Request from "~~/Api/Request";
import Plan from '~~/interfaces/Plan';


export default class ConfigStore {
  static init(data: any): boolean {
    const promises = [];
    promises.push(ConfigStore.set_token(data.token));
    promises.push(ConfigStore.set_wallets(JSON.stringify(data.wallets)));
    promises.push(ConfigStore.set_workspaces(JSON.stringify(data.workspaces)));
    promises.push(ConfigStore.set_roles(JSON.stringify(data.workspaces)));
    
    const parsedUser: User = typeof data.user === 'string' ? JSON.parse(data.user) : data.user;
    const userStore = useUserStore();
    userStore.updateUserData(parsedUser);
    
    const parsedPlan: Plan = typeof data.plan === 'string' ? JSON.parse(data.plan) : data.plan;
    const planStore = usePlanStore();
    planStore.updatePlanData(parsedPlan);

    const parsedLimits: Limit[] = typeof data.limits === 'string' ? JSON.parse(data.limits) : data.limits;
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
        let response = await request.get("profile/init");

        if (response.ok) {
          if (!response.data.user.img) {
            response.data.user.img = "/images/profileDefaultImg.png";
          }
          ConfigStore.set_user(JSON.stringify(response.data.user));
          ConfigStore.set_plan(JSON.stringify(response.data.plan));
          ConfigStore.set_wallets(JSON.stringify(response.data.wallets));
          ConfigStore.set_workspaces(JSON.stringify(response.data.workspaces));
          ConfigStore.set_roles(JSON.stringify(response.data.workspaces));
          ConfigStore.set_limits(JSON.stringify(response.data.limits));
          resolve(); // Resolve the promise if everything is successful
        } else {
          ConfigStore.logout();
          navigateTo("/auth/login");
          reject(new Error('Failed to reload store')); // Reject the promise if there's an error
        }
      } catch (error) {
        console.error('Error reloading store:', error);
        reject(error); // Reject the promise if there's an error
      }
    });
  }


  public static set_token(token: any) {
    useCookie("token").value = token;
  }

  public static set_user(user: any) {
    useCookie("user").value = user;
  }

  public static set_plan(plan: any) {
    useCookie("plan").value = plan;
  }

  public static set_wallets(wallets: any) {
    useCookie("wallets").value = wallets;
  }

  public static set_workspaces(workspaces: any) {
    useCookie("workspaces").value = workspaces;
  }

  public static set_roles(roles: any) {
    useCookie("rolse").value = roles;
  }

  public static set_limits(limits: any) {
    useCookie("limits").value = limits;
  }

  public static wallets(): Wallet[] {
    const walletData = useCookie("wallets").value;
    return Array.isArray(walletData) ? walletData : [];
  }

  public static token(): String {
    return String(useCookie("token").value);
  }

  public static user(): User | null {
    // return useCookie("user").value;

    const userData = useCookie("user").value;
    // Assuming useCookie returns an object with a property named 'value' of type User

    if (userData && typeof userData === "object" && !Array.isArray(userData)) {
      return userData as User;
    } else {
      // Handle the case where the data is not in the expected format or null
      // You can throw an error, return null, or handle it in another way based on your use case
      return null;
    }
  }

  public static plan(): Plan | null {
    const planData = useCookie("plan").value;
    if (planData && typeof planData === "object") {
      return planData as Plan;
    } else {
      return null;
    }
  }

  public static workspaces(): Workspace[] {
    const workspacesData = useCookie("workspaces").value;
    if (Array.isArray(workspacesData)) {
      return workspacesData;
    } else {
      return [];
    }
  }

  public static roles(): string[] {
    const rolesData = useCookie("roles").value;
    if (Array.isArray(rolesData)) {
      return rolesData;
    } else {
      return [];
    }
  }

  public static limits(): Limit[] {
    const limitsData = useCookie("limits").value;
    if (Array.isArray(limitsData)) {
      return limitsData;
    } else {
      return [];
    }
  }

  public static logout() {
    this.set_plan(null);
    this.set_token(null);
    this.set_user(null);
    this.set_workspaces(null);
    this.set_wallets(null);
    this.set_roles(null);
    this.set_limits(null);
  }
}
