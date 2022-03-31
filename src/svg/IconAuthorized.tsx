import { IconProps } from './iconProps';

const IconAuthorized = ({ size = 16, color = '#4D0F28' }: IconProps): JSX.Element => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path
      d="M8 0.666656L2 3.33332V7.33332C2 11.0333 4.56 14.4933 8 15.3333C11.44 14.4933 14 11.0333 14 7.33332V3.33332L8 0.666656ZM6.66667 11.3333L4 8.66666L4.94 7.72666L6.66667 9.44666L11.06 5.05332L12 5.99999L6.66667 11.3333Z"
      fill={color}
    />
  </svg>
);

export default IconAuthorized;
