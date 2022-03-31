import { Popover } from '@mui/material';
import styled from 'styled-components';
import { HelperTextProps, MuiButtonProps } from './types/dropdownPropTypes';

export const HelperText = styled.label<HelperTextProps>`
  font-size: ${(props): string => props.theme.typography.caption.fontSize};
  color: ${(props): string =>
    props.disabled ? props.theme.palette.action.disabled : props.theme.palette.common.black};
  opacity: ${(props): number => (props.disabled ? 0.2 : 1)};
  font-weight: 400;
  margin: 0;
  display: block;
`;

interface ListContentProps {
  helperText: string;
}

export const ListContent = styled.div<ListContentProps>`
  position: absolute;
  width: 100%;
  top: ${(props): string => props.helperText ? '41px' : '30px'};
  box-sizing: border-box;
  background: ${(props): number => props.theme.palette.common.white};
  box-shadow: 5px 3px 20px 3px ${(props): number => props.theme.palette.border.modalShadow};
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  z-index: 9;
`;

interface StyledPopoverProps {
  isFilterDropdown?: boolean;
}

export const StudySelectorDropdown = styled(Popover)<StyledPopoverProps>`
  & .MuiPopover-paper {
    width: ${(props): string => props.isFilterDropdown ? '94px' : '560px'};
    overflow: hidden;
    top: 41px;
    box-sizing: border-box;
    background: ${(props): number => props.theme.palette.common.white};
    box-shadow: 5px 3px 20px 3px ${(props): number => props.theme.palette.border.modalShadow};
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    z-index: 9;
    padding-bottom: ${(props): string => props.isFilterDropdown ? `${props.theme.palette.spacing[0]}px` : `${props.theme.palette.spacing[1]}px`};
    padding-top: ${(props): string => props.isFilterDropdown ? `${props.theme.palette.spacing[0]}px` : '0px'};
  }
`;

export const MuiButton = styled.div<MuiButtonProps>`
  border: none;
  border-bottom: ${(props): string =>
    props.noBorder
      ? ''
      : props.active
      ? `2px solid ${props.theme.palette.primary.main}`
      : `2px solid ${props.theme.palette.secondary.main}`};
  background-color: inherit;
  display: flex;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  cursor: pointer;
  pointer-events: ${(props): string => (props.disabled ? 'none' : 'auto')};
  color: ${(props): string =>
    props.disabled ? props.theme.palette.action.disabled : props.theme.palette.common.black};
  &:hover {
    svg {
      path {
        fill: ${(props): string => props.active ? props.theme.palette.action.active : props.theme.palette.action.hover};
      }
    }
  }  
`;

export const BtnLabel = styled.span`
  padding-left: 0;
  overflow: hidden;
  width: calc(100% - 24px);
  text-align: left;
  padding-bottom: 4px;
  display: block;
`;

export const Wrapper = styled.div`
  position: relative;
`;
