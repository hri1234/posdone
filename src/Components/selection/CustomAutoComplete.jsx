import * as React from "react";
// library
import { Checkbox, TextField, Autocomplete, Box } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { styled } from "@mui/material/styles";
import { Toolbar } from "@mui/material";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const RootStyle = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  width: "350px",
  borderRadius: "0px",
}));

const SearchStyle = styled(TextField)(({ theme }) => ({
  width: "100%",
  transition: theme.transitions.create(["box-shadow", "width"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&::placeholder": {
    textOverflow: "ellipsis !important",
    color: "#ABAFB3",
  },
}));

const CustomAutoComplete = (props) => {
  const {
    placeholder,
    id,
    options,
    labelField,
    multiple = false,
    startAdornment,
    endAdornment,
    onChange,
  } = props;

  return (
    <>
      {/* <RootStyle> */}
      {/* {label && <label>{label}</label>} */}
      <Autocomplete
        multiple={multiple}
        id={id}
        options={options || []}
        // disableCloseOnSelect
        getOptionLabel={(option) => option[labelField]}
        onChange={(event, newValue) => {
          event?.preventDefault();
          onChange(newValue);
        }}
        // forcePopupIcon={<ArrowDropDownIcon />}
        popupIcon={<ArrowDropDownIcon />}
        classes={{
          // clearIndicatorDirty: classes.clearIndicator,
          popupIndicator: { color: "primary.main" }, // classes.popupIndicator,
        }}
        renderOption={(props, option, { selected }) => (
          <Box
            component="li"
            {...props}
            sx={{
              color: "#ABAFB3",
              fontFamily: "fontFamily2",
              fontSize: "15px",
              fontWeight: "fontWeightMedium",
            }}
          >
            {multiple && (
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
            )}
            <span>{option[labelField]}</span>
          </Box>
        )}
        sx={{ width: "100%" }}
        // classes={{ paper: "select-dropdown-paper" }}
        renderInput={(params) => (
          <SearchStyle
            {...params}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              startAdornment: startAdornment || null,
              endAdornment: endAdornment || null,
            }}
            sx={{
              color: "primary.main",
              bgcolor: "#ffffff",
              borderRadius: "0px",
              // ">div": {
              //   paddingRight: "0px !important",
              // },
            }}
          />
        )}
      />
      {/* </RootStyle> */}
    </>
  );
};
export default CustomAutoComplete;
