import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const CustomSelect = ({
  menuItems,
  selectedValue,
  handleSelection,
}: {
  menuItems: { label: string; value: string }[];
  selectedValue: string;
  handleSelection: any;
}) => {
  const handleChange = (event: SelectChangeEvent) => {
    handleSelection(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          onChange={handleChange}
        >
          {menuItems.map((menuItem) => {
            const { label, value } = menuItem;
            return (
              <MenuItem key={label} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
