export interface HelperTextProps {
  disabled?: boolean;
}

export interface MuiButtonProps {
  disabled: boolean;
  active: boolean;
  noBorder: boolean;
}

export interface Props {
  label: string;
  dropDownChildren: JSX.Element;
  clickAway: boolean;
  helperText: string;
  testId: string;
  renderLabel?: JSX.Element;
  disabled?: boolean;
  noBorder?: boolean;
  disableLoader?: boolean;
  disableDropDown?: boolean;
  className?: string;
  closeDropdown?: boolean;
  getDropDownState?: (active: boolean) => void;
  isStudyDropdown?: boolean;
  isFilterDropdown?: boolean;
}
