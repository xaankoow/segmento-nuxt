import Plan from "../interfaces/Models/Config/Plan";
import Workspace from "../interfaces/Models/Config/Workspace";
import Wallet from "../interfaces/Models/Wallet";
import Limit from "../interfaces/Models/Config/Limit";
import User from "../interfaces/User";

export default class ConfigStore {
    private _token: string;
    private _user: User | null;
    private _plan: Plan | null;
    private _roles: String[] | [];
    private _wallets: Array<Wallet>;
    private _workspaces: Array<Workspace>;
    private _limits: Array<Limit>

    public static set_token(token) {
        useCookie("token").value = token;
    }

    public static set_user(user) {
        useCookie("user").value = user; 
    }

    public static set_plan(plan) {
        useCookie("plan").value = plan; 
    }

    public static set_wallets(wallets) {
        useCookie("wallets").value = wallets;
    }

    public static set_workspaces(workspaces) {
        useCookie("workspaces").value = workspaces;
    }

    public static set_roles(roles) {
        useCookie("rolse").value = roles;
    }

    public static set_limits(limits) {
        useCookie("limits").value = limits;
    }

    public static wallets(): Array<Wallet> {
        return useCookie("wallets").value;
    }

    public static token(): String {
        return useCookie("token").value;
    }
    
    public static user(): User {
        return useCookie("user").value;
    }
    
    public static plan(): Plan {
        return useCookie("plan").value;
    }

    public static workspaces(): Array<Workspace> {
        return useCookie("workspaces").value;
    }

    public static roles(): Array<string> {
        return useCookie("roles").value;
    }

    public static limits(): Array<Limit> {
        return useCookie("limits").value;
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
