import { Colors } from '../styles/colors';
import { IconProps } from './iconProps';

const IconSearch = ({ size = 24, color = Colors.defaultGray }: IconProps): JSX.Element => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.1867 14.4713H15.9767L20.2167 18.7313C20.6267 19.1413 20.6267 19.8113 20.2167 20.2213C19.8067 20.6313 19.1367 20.6313 18.7267 20.2213L14.4767 15.9713V15.1813L14.2067 14.9013C12.8067 16.1013 10.8967 16.7213 8.8667 16.3813C6.0867 15.9113 3.8667 13.5913 3.5267 10.7913C3.0067 6.56133 6.5667 3.00133 10.7967 3.52133C13.5967 3.86133 15.9167 6.08133 16.3867 8.86133C16.7267 10.8913 16.1067 12.8013 14.9067 14.2013L15.1867 14.4713ZM5.4767 9.97133C5.4767 12.4613 7.4867 14.4713 9.9767 14.4713C12.4667 14.4713 14.4767 12.4613 14.4767 9.97133C14.4767 7.48133 12.4667 5.47133 9.9767 5.47133C7.4867 5.47133 5.4767 7.48133 5.4767 9.97133Z"
      fill={color}
    />
  </svg>
);

export default IconSearch;
