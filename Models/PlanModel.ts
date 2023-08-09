import Package from "../interfaces/Models/Package";
import Plans from "../interfaces/Models/Plans";
import { ref } from "vue"
export default class PlanModel {
    protected _package: Package;
    protected _plans: Array<Plans>;
    protected _plan = ref<Plans | undefined>(undefined);

    constructor(pack: any, plans: any) {
        this._package = pack;
        this._plans = plans;
    }

    /**
     * this will return the package from interfaces/Modes/Package
     */
    public package() {
        return this._package;
    }

    /**
     * this will return an array of interfaces/Models/Plans
     */
    public plans() {
        return this._plans;
    }

    /**
     * select plan by id
     */
    public select_plan(id: Number) {
        let plan = this.plans().find(p => p.id === id);

        this._plan.value = plan;

        return plan;
    }

    /**
     * return the selected plan
     */
    public selected_plan() {
        return this._plan.value;
    }

    public check_discount(discount_code: String) {
        /* 
         * TODO : send a request to server to check discount validation
         * This must return an object with this content { message: String, status: Boolean, discount: { value: Number, type: Number } | NULL } 
         */

        // THIS MUST REMOVE LATER AND IMPLEMENT WHAT WE WANT IN TODO 
        if (discount_code === "درست") {
            return {
                message: "کد تخفیف صحیح است",
                status: true,
                discount: {
                    value: 5,
                    type: 1
                }
            }
        }
        return {
            message: "کد تخفیف نادرست است",
            status: false,
            discount: null
        }
    }

    public calculate_discount(plan: Plans | undefined, discount: number | null, type: number) {
        /*
         * TYPE = 1 === %
         * TYPE = 2 === $
         */
        if (plan === undefined) {
            return;
        }
        if (discount === null) {
            return plan!.price.final;
        }

        return type === 1 ?
            plan!.price.final - ((plan!.price.final * discount!) / 100) :
            plan!.price.final - discount!;
    }
}