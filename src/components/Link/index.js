/* eslint-disable react/prop-types */
import React from 'react';
import NextLink from 'next/link';

export default function Link({ children, href, ...props }) {
  return (
    <NextLink
      href={href}
      passHref
    >
      <a
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </a>
    </NextLink>
  );
}
