'use client';

// interface Coordinates {
//   latitude: number;
//   longitude: number;
// }

import { PinDrop } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export default function Location() {
  // geolocation logics tbd
  return (
    <Box sx={{ alignItems: 'center', display: 'flex', gap: 1.5 }}>
      <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
        Recife, PE
      </Typography>
      <PinDrop
        color="warning"
        sx={{ alignSelf: 'baseline', height: 16, width: 16 }}
      />
    </Box>
  );
}
