import * as yup from "yup";
import messages from "./messages";

export interface IUserReq {
  email?: string;
  password?: string;
}

const signinValidate = yup
  .object({
    email: yup.string().required(messages.required.email),
    password: yup.string().required(messages.required.password),
  })
  .required();

export const signinInitValues: IUserReq = {
  email: "",
  password: "",
};

export default signinValidate;
