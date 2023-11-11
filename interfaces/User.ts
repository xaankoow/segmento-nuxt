export default interface User {
  name: string;
  img: string;
  email: {
    value: string;
    ok: boolean;
  };
  mobile: {
    value: string;
    ok: boolean;
  };
  lang: string;
}
