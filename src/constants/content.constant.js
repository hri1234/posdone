export const MESSAGE = {
  LOGIN_SUCCESS: "Login Successfully",
  LOGIN_FAILED: "Invalid Email or Password",
  OTP_SENT: "OTP sent on your email, please verify",
  REGISTER_SUCCESS: "Register Successfully. Please verify OTP here",
  REGISTER_FAILED: "Register Failed",
  LOGOUT_SUCCESS: "Logout successfully",
  LOOGUT_FAILED: "Try again later !!",
  SESSION_EXPIRED: "Your session expired, login again",

  INVALID_EMAIL: "Invalid Email Id !",
  INVALID_OTP: "Invalid OTP !",
  INVALID_ACCOUNT_NAME:
    "only letters, digits & hyphens. Atleast one letter & hyphens not allow at start or end ",
  INVALID_ACCOUNT_NUMBER: "Must be 12 digits.",
  INVALID_ACCESS_KEY: "Must be 20 uppercase alphanumeric characters",
  INVALID_SECRET_KEY:
    "Must be 40 alphanumeric characters, including only '/', '+', or '='",
  NAME_MINIMUM_CHAR: "Must be 3 characters.",
  SPECIAL_CHAR_NOT_ALLOW_AT_START_END:
    "Special characters not allowed at start or end.",
  INVALID_PASSWORD: "Minimum 8 characters required",
  INVALID_MOBILE: "Invalid mobile number",

  FIELDS_REQUIRED: "Fields required !",
  DATE_REQUIRED: "Date is required !",
  EMAIL_REQUIRED: "Email Id is required !",
  MOBILE_REQUIRED: "Mobile Number is required !",

  CREATE_SUCCESS: "Created successfully",
  UPDATE_SUCCESS: "Updated successfully",
  DELETE_SUCCESS: "Deleted successfully",
  EXPORT_SUCCESS: "Export started successfully",
  ARE_YOU_SURE_TO_PROCEED: "Are you sure to proceed?",

  SOMETHING_WENT_WRONG: "Something went wrong, try again later !!",
};

export const API_STATUS_CODE = {
  NOT_FOUND: 404,
  SUCCESS: 200,
  INTERNAL_SERVER: 500,
  UPDATE: 204,
  EXIST: 406,
  CREATED: 201,
  UNAUTHORIZED: 401,
  ACCEPTED: 202,
  BAD_REQUEST: 400,
};

export const TABLE_OPTIONS = {
  search: true,
  download: false,
  print: false,
  viewColumns: true,
  filter: true,
  filterType: "dropdown",
  elevation: 0,
  searchAlwaysOpen: true,
  selectableRowsHeader: false,
  selectableRowsHideCheckboxes: true,
  responsive: "standard",
};

export const TABLE_COLUMN_OPTIONS = {
  setCellProps: () => ({ style: { whiteSpace: "nowrap" } }),
  setCellHeaderProps: () => ({ style: { whiteSpace: "nowrap" } }),
  sort: true,
  sortOrder: "desc",
};

export const ID_KEY = "_id";
