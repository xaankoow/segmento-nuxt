import Plan from '~~/interfaces/Plan'

export const usePlanStore = defineStore({
  id: 'plan',
  state: () => ({
    uuid: '',
    plan: {
      name: '',
      package: '',
      color: '',
    },
    features: '',
    expire_at: '',
    created_at: '',
    status: {
      code: 0,
      label: '',
    },
  }),
  actions: {
    updatePlanData(newData: Plan) {
      this.uuid = newData.uuid;
      this.plan.name = newData.plan.name;
      this.plan.package = newData.plan.package;
      this.plan.color = newData.plan.color;
      this.features = newData.features;
      this.expire_at = newData.expire_at;
      this.created_at = newData.created_at;
      this.status.code = newData.status.code;
      this.status.label = newData.status.label;
    },
  },
});
