/**
 * Get Full Name
 * @name getFullName Concats first name and last name
 * @param {string} firstname in Stringformat
 * @param {string} lastname in Stringformat
 * @return {string}
 */
function getFullName(firstname, lastname) {
  return `${firstname} ${lastname}`.trim();
}

/**
 * Calculate the number of days between two dates.
 * @param {*} endDate
 * @param {*} startDate
 * @returns {number} returns the number of days between two dates
 */
function days(endDate, startDate) {
  const start = typeof startDate === 'string' ? new Date(startDate) : startDate;
  const end = typeof endDate === 'string' ? new Date(endDate) : endDate;

  // return zero if dates are valid
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return 0;
  }

  const diffInMs = Math.abs(end.getTime() - start.getTime());
  return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

/**
 * testSetProperty
 * @name testSetProperty
 * @param {object} normalField
 * @param {scope} globals
 * @return {string}
 */
function testSetProperty(normalField, globals)
{
    globals.functions.setProperty(normalField, {label : {value : 'Changed Label'}});
    return "defaultValue";
}

/**
 * testSubmitFormPreprocessor
 * @name testSubmitFormPreprocessor
 * @param {scope} globals
 */
function testSubmitFormPreprocessor(globals)
{
    let formData = globals.functions.exportData();
    formData.textinput1 = 'customData';
    globals.functions.submitForm(formData, false, 'application/json');
}

/**
 * Formats telephone input
 * @name formatTelephoneInput Formats telephone input
 * @param {object} field field whose value to be formatted
 * @return {string}
 */
function formatTelephoneInput(field) {
  const phoneNumber = field.$value;
  if (phoneNumber) {
    const maskedDigits = phoneNumber.substring(0, 7).replace(/\d/g, '*');
    const lastThreeDigits = phoneNumber.substring(7);
    return maskedDigits + lastThreeDigits;
  }
  return phoneNumber;
}

// eslint-disable-next-line import/prefer-default-export
export { getFullName, days, testSetProperty, testSubmitFormPreprocessor, formatTelephoneInput};
