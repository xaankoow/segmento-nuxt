export default interface Wallet {
  uuid: string;
  status: {
    code: number;
    label: string;
  };
  balance: number;
}
