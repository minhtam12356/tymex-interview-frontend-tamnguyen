import React from 'react';

export const ContactGroup = (props: {
  href?: string;
  label: string;
  icon: React.ReactNode;
}) => {
  const { href, label, icon } = props;

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}
    >
      <div
        style={{
          width: 16,
          height: 16,
          display: 'flex',
          alignItems: 'center',
          marginRight: '0.8rem',
        }}
      >
        {icon}
      </div>
      <a href={href}>{label}</a>
    </div>
  );
};
