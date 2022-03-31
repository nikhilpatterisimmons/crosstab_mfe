import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconSearch from '../../svg/IconSearch';
interface Props {
  value: string;
  changeHandler: (value: string) => void;
  placeholder?: string;
}

const SearchField = ({ value, changeHandler, placeholder = '' }: Props): JSX.Element => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    changeHandler(event.target.value);
  };
  /**
   * TODO: AJAIN
   * labelWidth={0} is removed from new materail ui version
   * <OutlinedInput .... labelWidth={0}/>
   * check the migration documentation https://mui.com/guides/migration-v4/#preset-safe
   */
  return (
    <FormControl data-testid="search-field" variant="outlined">
      <OutlinedInput
        id="outlined-adornment-search"
        data-testid="outlined-adornment-search"
        value={value}
        className="searchInput"
        onChange={handleChange}
        startAdornment={<IconSearch />}
        aria-describedby="outlined-search-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        placeholder={placeholder}
      />
    </FormControl>
  );
};

export default SearchField;
