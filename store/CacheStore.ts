export default class CacheStore {
    public static set_workspace_uuid(uuid: string) {
        useCookie("workspace_uuid").value = uuid;

    }

    public static workspace_uuid(): string | null {
        return useCookie("workspace_uuid").value;
    }
}