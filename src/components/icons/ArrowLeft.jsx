export const ArrowLeft = () => {
  return (
    <svg width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity=".498">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.497 1.513a2.118 2.118 0 0 0-2.994 0l-5.99 5.99a2.118 2.118 0 0 0 0 2.994l5.99 5.99a2.118 2.118 0 0 0 2.994-2.995L6.005 9l4.492-4.492a2.118 2.118 0 0 0 0-2.995Z"
          fill="#3A4562"
        />
        <mask
          id="a"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="18"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.497 1.513a2.118 2.118 0 0 0-2.994 0l-5.99 5.99a2.118 2.118 0 0 0 0 2.994l5.99 5.99a2.118 2.118 0 0 0 2.994-2.995L6.005 9l4.492-4.492a2.118 2.118 0 0 0 0-2.995Z"
            fill="#fff"
          />
        </mask>
        <g mask="url(#a)">
          <path fill="#7D859C" d="M0 0h14.294v18H0z" />
        </g>
      </g>
    </svg>
  );
};
