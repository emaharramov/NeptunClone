import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

function CustomBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb" className="mb-4">
      <Link component={RouterLink} to="/" color="inherit">
        Ana Sayfa
      </Link>
      <Link component={RouterLink} to="/meyve-terevez" color="inherit">
        Meyve, tərəvəz, quru meyvə
      </Link>
      <Typography color="textPrimary">Meyvə</Typography>
    </Breadcrumbs>
  );
}

export default CustomBreadcrumbs;
