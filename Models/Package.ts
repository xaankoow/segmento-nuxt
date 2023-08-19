import Pack from "../interfaces/Models/Pack";
import Plans from "../interfaces/Models/Plans";
import { ref } from "vue"
export default class Package {
    public readonly uuid: string;
    public readonly name: string;
    public readonly color: string;
    public readonly plans: Array<Plans> | null;
    private _plan = ref<any>(undefined);

    constructor(pack: Pack) {
        this.uuid = pack.uuid;
        this.name = pack.name;
        this.color = pack.color;
        this.plans = pack.plans;
    }

    /**
     * select plan by id
     */
    public select_plan(uuid: string) {
        let plan = this.plans?.find(p => p.uuid === uuid);

        this._plan = plan;

        return plan;
    }

    /**
     * return the selected plan
     */
    public selected_plan(): Plans | undefined {
        return this._plan;
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

    public calculate_discount(plan: any, discount: number | null, type: number) {
        /*
         * TYPE = 1 === %
         * TYPE = 2 === $
         */
        
        if (plan === undefined || plan === null) {
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