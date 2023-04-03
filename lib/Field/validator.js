// TMP hack - pasted from badger-ui
const validator = field => {
  return (resolve, reject) => {
    const validate = field.validate;
      const empty =
        field.value === undefined ||
        field.value === null ||
        field.value.length === 0;

      // we don't want to send any undefined/null values in case they get
      // stringified to "undefined" / "null" so we set them to empty strings
      if (empty) {
        field.value = '';
      }

      // set the field.validating flag and update the form state
      // to show which field is being validation
      Object.assign(field, { validating: true }, options);
      this.setValidating(field);

      //this.debug("fieldValidation prepared field: ", field);
      if (empty) {
        // an empty field is an error if it's required, otherwise
        // is an acceptable state of affairs.
        if (this.props.required) {
          this.debug('required FAIL on empty: ', field);
          field.message = this.props.requiredMessage;
          reject(field);
        }
        else {
          resolve(field);
        }
      }
      else if (validate) {
        // if there's a validate property then we run it
        this.debug('validating: ', field);
        validate(field.value, field)
          .then((value) => {
            field.value = value;
            this.debug('validation PASS, result: [%s] => ', value, field);
            resolve(field);
          })
          .catch((err) => {
            this.debug('caught: ', err);

            field.message = isString(err) ? err : err.message;
            this.debug(
              'validation FAIL, message: [%s] => ',
              field.message,
              field
            );
            reject(field);
          });
      }
      else {
        // otherwise all is good
        this.debug('no validation: ', field);
        resolve(field);
      }
    };
