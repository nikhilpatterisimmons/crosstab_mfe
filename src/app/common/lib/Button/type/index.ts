import { ButtonProps } from '@mui/material/Button';
import { IconButtonProps } from '@mui/material/IconButton';
export interface iButtonProps extends ButtonProps {
  label?: string;
  listBtn?: boolean;
  isDeleteBtn?: boolean;
  isLoading?: boolean;
  component?: string;
  onlyPrimaryButton?: boolean;
  $linkColor?: string;
}

export interface iIconButtonProps extends IconButtonProps {
  label?: string;
  listBtn?: boolean;
}
