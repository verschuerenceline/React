import React from 'react';
import Link from 'next/link';

function ButtonInfo(props) {
  const { label, onClick, href, className } = props;

  if (href) {
    return (
      <Link href={href}>
        <a className={className}>
          {label}
        </a>
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default ButtonInfo;