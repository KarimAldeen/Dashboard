import React from "react";
import { ErrorMessage, useField, Field } from "formik";
     ///@ts-ignore 
import { CustomInput, FormGroup } from "reactstrap";
import { useTranslation } from 'react-i18next';

import PropTypes from "prop-types";

const ValidatedField = ({
  name,
  label,
  CustomField,
  icon: Icon,
  optional,
  labelIcon = null,
  formProps,
  isRequired,
  ...props
} : any) => {
  const [field, meta] = useField({ name, ...props });
  const [t] = useTranslation();
  let Wrapper = Field;
  if (props.type === "file") {
    Wrapper = CustomInput;
  }
  if (CustomField) {
    Wrapper = CustomField;
  }
  const fieldProps = props.type === "file" ? {} : { ...field };

  return (
    <div key={name}>
      {(label && props.type !== "hidden")  && (
        <label htmlFor={name}>
          {label} {props.required || isRequired ? "*" : ""} {labelIcon}
        </label>
      )}
      <FormGroup
        className={Icon ? "position-relative has-icon-left" : ""}
        {...formProps}
      >
        <Wrapper
          className={
            "form-control " + (meta.touched && meta.error ? "is-invalid" : "")
          }
          {...fieldProps}
          {...props}
        />
        {Icon && (
          <div className="form-control-position">
            <Icon size={15} />
          </div>
        )}
        <ErrorMessage name={field.name}>
          {(msg : string) => <span className="field-error text-danger">{t(msg)}</span>}
        </ErrorMessage>
      </FormGroup>
    </div>
  );
};

ValidatedField.propTypes = {
  name: PropTypes.string.isRequired,
  optional: PropTypes.bool,
};

export { ValidatedField };
