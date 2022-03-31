import { IconProps } from './iconProps';

const IconDropdown = ({ size = 24, color = '#747474' }: IconProps): JSX.Element => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M9.29648 12.71L11.8865 15.3C12.2765 15.69 12.9065 15.69 13.2965 15.3L15.8865 12.71C16.5165 12.08 16.0665 11 15.1765 11H9.99648C9.10648 11 8.66648 12.08 9.29648 12.71Z"
      fill={color}
    />
  </svg>
);

export default IconDropdown;
