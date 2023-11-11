// limits.ts
import Limit from '~~/interfaces/Limit'

// Define the Limits store state and actions
export const useLimitsStore = defineStore({
  id: 'limits',
  state: () => ({
    list: [] as Limit[], // Initialize as an empty array
  }),
  actions: {
    // Method to update Limits data
    updateLimitsData(newLimits: Limit[]) {
      this.list = newLimits;
    },
  },
});
