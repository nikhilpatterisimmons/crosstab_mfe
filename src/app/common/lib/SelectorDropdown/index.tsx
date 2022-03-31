import { SyntheticEvent, useEffect, useState } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Typography from '@mui/material/Typography';
import CircularProgressBar from '../CircularProgressBar';
import {
  HelperText,
  MuiButton,
  BtnLabel,
  ListContent,
  StudySelectorDropdown,
  Wrapper,
} from './dropdownStyledComponents';
import { Props } from './types/dropdownPropTypes';
import { defaultTheme } from '../../../../styles/theme';
import IconDropdown from '../../../../svg/IconDropdown';

const SelectorDropdown = ({
  label,
  dropDownChildren,
  clickAway,
  helperText,
  testId,
  renderLabel,
  disabled = false,
  noBorder = false,
  disableLoader,
  disableDropDown,
  className,
  getDropDownState,
  closeDropdown,
  isStudyDropdown,
  isFilterDropdown,
}: Props): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const handleClick = (event: SyntheticEvent): void => {
    getDropDownState && getDropDownState(true);
    if (!disabled && !disableDropDown) {
      setOpen((prev) => !prev);
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClickAway = (): void => {
    getDropDownState && getDropDownState(false);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [clickAway]);

  useEffect(() => {
    if (closeDropdown) {
      setOpen(false);
    }
  }, [closeDropdown]);
  
  const {
    action: { disabled: colorDisabled },
    common: { black },
    primary: { light },
    text: { primary },
  } = defaultTheme.palette;

  const typographyColor = disabled ? colorDisabled : black;

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Wrapper data-testid={testId}>
        <HelperText disabled={disabled}>{helperText}</HelperText>
        <MuiButton
          data-testid="dropdown-btn"
          role="button"
          onClick={handleClick}
          disabled={disabled}
          active={open}
          noBorder={noBorder}
        >
          {renderLabel ? (
            <>{renderLabel}</>
          ) : (
            <BtnLabel>
              <Typography component="span" variant="body1" title={label} noWrap color={typographyColor}>
                {label}
              </Typography>
            </BtnLabel>
          )}
          {!disableLoader && (
            <span>{disabled ? <CircularProgressBar /> : <IconDropdown color={open ? light : primary} />}</span>
          )}
        </MuiButton>
        {open ? (
          (isStudyDropdown || isFilterDropdown) ? (
            <StudySelectorDropdown
              id={testId}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              onClose={handleClickAway}
              isFilterDropdown={isFilterDropdown}
            >
              {dropDownChildren}
            </StudySelectorDropdown>
          ) : (
            <ListContent data-testid="list-item-content" className={className} helperText={helperText} >
              {dropDownChildren}
            </ListContent>
          )
        ) : null}
      </Wrapper>
    </ClickAwayListener>
  );
};

export default SelectorDropdown;
