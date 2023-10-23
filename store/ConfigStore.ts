import Plan from "~~/interfaces/Models/Config/Plan";
import Workspace from "~~/interfaces/Models/Config/Workspace";
import Wallet from "~~/interfaces/Models/Wallet";
import Limit from "~~/interfaces/Models/Config/Limit";
import User from "~~/interfaces/User";
import Request from "~~/Api/Request";

export default class ConfigStore {
  static async init(data: any): Promise<void> {
    ConfigStore.set_token(data.token ?? null);
    ConfigStore.set_user(JSON.stringify(data.user) ?? null);
    ConfigStore.set_plan(JSON.stringify(data.plan) ?? null);
    ConfigStore.set_wallets(JSON.stringify(data.wallets) ?? null);
    ConfigStore.set_workspaces(JSON.stringify(data.workspaces) ?? null);
    ConfigStore.set_roles(JSON.stringify(data.workspaces) ?? null);
    ConfigStore.set_limits(JSON.stringify(data.limits) ?? null);
  }

  static async reload(): Promise<void> {
    const request = new Request('v1');
    let response = await request.get("profile/init");
    console.log("response");

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

      navigateTo("/");
    } else {
      ConfigStore.logout();
      navigateTo("/auth/login");
    }
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
