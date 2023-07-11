'use client';

import { Search } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

export default function SearchBar() {
  return (
    <TextField
      sx={{
        '& > .MuiOutlinedInput-root': {
          borderRadius: '8px',
          paddingX: 2.5,
          paddingY: 1,
        },
        '& input': { fontSize: 12, padding: 0 },
        minWidth: 'max-content',
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
      placeholder="Busque um filme..."
      variant="outlined"
    />
  );
}
