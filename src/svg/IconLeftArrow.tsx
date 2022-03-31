import { IconProps } from './iconProps';

const IconLeftArrow = ({ size = 24, color = '#000' }: IconProps): JSX.Element => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path d="M15.7048 16.59L11.1248 12L15.7048 7.41L14.2948 6L8.29483 12L14.2948 18L15.7048 16.59Z" fill={color} />
  </svg>
);

export default IconLeftArrow;
