// wallets.ts
import Wallet from '~~/interfaces/Wallet'

// Define the Wallets store state and actions
export const useWalletsStore = defineStore({
  id: 'wallets',
  state: () => ({
    list: [] as Wallet[], // Initialize as an empty array
  }),
  actions: {
    // Method to update Wallets data
    updateWalletsData(newWallets: Wallet[]) {
      this.list = newWallets;
    },
  },
});
