'use client';

import { Shell } from '../../components/shell';

export const Generate = ({ navItems }) => {
  return (
    <Shell navItems={navItems}>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Templates Generated</h1>
      </div>
    </Shell>
  );
};
