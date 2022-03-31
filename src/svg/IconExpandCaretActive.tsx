import { IconProps } from './iconProps';

const IconExpandCaretActive = ({ size = 24 }: IconProps): JSX.Element => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#4E8FCB" />
    <path d="M9 7.41L13.58 12L9 16.59L10.41 18L16.41 12L10.41 6L9 7.41Z" fill="white" />
  </svg>
);

export default IconExpandCaretActive;
