/* eslint-disable react/prop-types */
import React from 'react';
import NextLink from 'next/link';

export default function Link({
  children,
  href,
  isEnabled,
  ...props
}) {
  return (
    <NextLink
      href={isEnabled ? href : '#'}
      passHref
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <a {...props} aria-disabled={!isEnabled}>{children}</a>
    </NextLink>
  );
}
