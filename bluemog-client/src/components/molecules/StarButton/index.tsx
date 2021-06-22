import { css } from '@emotion/react';
import React, { ButtonHTMLAttributes } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

function StarButton({ className, ...rest }: Props) {
  const componentCSS = css`
    border: none;
    background: none;
    padding: 0;
  `;

  return (
    <button className={className} css={componentCSS} type="button" {...rest}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.9348 9.4472C24.7711 8.91896 24.3221 8.54378 23.7909 8.49382L16.5752 7.81014L13.722 0.841321C13.5116 0.330597 13.0325 0 12.5001 0C11.9677 0 11.4886 0.330597 11.2782 0.842515L8.42495 7.81014L1.20814 8.49382C0.677884 8.54497 0.230029 8.91896 0.0654204 9.4472C-0.0991876 9.97544 0.0528316 10.5548 0.453957 10.9201L5.90815 15.9115L4.29983 23.3042C4.18215 23.8478 4.38433 24.4097 4.81655 24.7357C5.04887 24.9108 5.32067 25 5.59476 25C5.83109 25 6.06551 24.9335 6.27589 24.8022L12.5001 20.9204L18.722 24.8022C19.1773 25.088 19.7512 25.0619 20.1825 24.7357C20.6149 24.4087 20.8169 23.8466 20.6992 23.3042L19.0909 15.9115L24.5451 10.9211C24.9462 10.5548 25.0994 9.97643 24.9348 9.4472V9.4472Z" fill="rgb(241, 241, 241)" />
      </svg>
    </button>
  );
}

export default StarButton;
