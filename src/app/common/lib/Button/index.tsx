import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import { iButtonProps, iIconButtonProps } from './type';

const StyledButton = styled(Button)<iButtonProps>`
  &.MuiButton-root {
    font-weight: ${(props): number => (props.variant === 'text' ? 700 : 400)};
    text-transform: ${(props): string => (props.variant === 'contained' || props.listBtn ? 'capitalize' : 'uppercase')};
    color: ${(props): string => props.isDeleteBtn && props.theme.palette.error.main};
  }
  &[href] {
    color: ${(props): string => props.$linkColor || 'inherit'};
  }
`;

const LoadingProgressBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
`;

const StyledIconButton = styled(IconButton)`
  &:hover {
    svg {
      path {
        fill: ${(props): string => props.theme.palette.secondary.light};
      }
    }
  }
`;

export const Btn: React.FC<iButtonProps> = (props) => {
  return (
    <StyledButton disabled={props.isLoading || props.disabled} disableRipple {...props}>
      {props.children}{' '}
      {props.isLoading && (
        <LoadingProgressBar>
          <CircularProgress color="secondary" size={17} />
        </LoadingProgressBar>
      )}
    </StyledButton>
  );
};

export const IconBtn: React.FC<iIconButtonProps> = (props) => {
  return (
    <StyledIconButton disableRipple {...props}>
      {props.children}
    </StyledIconButton>
  );
};
