export default interface Site {
  uuid: string;
  status: {
    code: number;
    label: string;
  };
  site: string;
}
