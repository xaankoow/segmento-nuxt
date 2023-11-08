export default interface Plan {
  uuid: string;
  plan: {
    name: string;
    package: string;
    color: string;
  };
  features: string;
  expire_at: string;
  created_at: string;
  status: {
    code: number;
    label: string;
  };
}
