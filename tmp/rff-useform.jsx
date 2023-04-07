import * as React from "react";
import type { FormApi, FormValuesShape } from "final-form";
import ReactFinalFormContext from "./context";

function useForm( componentName ) {
  const form = React.useContext(ReactFinalFormContext);
  if (!form) {
    throw new Error(
      `${componentName || "useForm"} must be used inside of a <Form> component`,
    );
  }
  return form;
}

export default useForm;