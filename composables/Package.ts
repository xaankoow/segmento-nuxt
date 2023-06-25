export class Package {
    private package_id = 0;
    private discount_code = '';

    public package(package_id : number) {
        this.package_id = package_id;

        return this.package_id;
    }

    public discount(code : string) {
        this.discount_code = code;

        return this.discount;
    }

    public check_discount(discount_code = null) {
        let code = discount_code ?? this.discount_code;

        if (code === null) {
            return null;
        }

        return code === 'درست'
    }
}