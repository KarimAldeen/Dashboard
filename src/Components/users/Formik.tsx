import * as Yup from "yup";
import { buildFormData } from "../../api/helpers/buildFormData";

export const getInitialValues : any = (objectToEdit : any) => {
    return {
      id :objectToEdit?.id ?? "",
      name :objectToEdit?.name ?? "",
      password :objectToEdit?.password ?? "",
      email :objectToEdit?.email ?? "",

    };
  

};

export const getValidationSchema = () => {
  return Yup.object().shape({


  });
};

export const getDataToSend = (values : any) => {
      const data = { ...values };

  // const formData = new FormData();
  // buildFormData(formData, data);
  // return formData;
  return data
};

