import * as React from 'react'

function SvgJavascript({ title, titleId, ...props }) {
  return (
    <svg
      viewBox="0 0 26 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M25.478 12.51c-.28-1.748-1.42-3.215-4.795-4.584-1.172-.539-2.48-.924-2.869-1.813-.138-.517-.156-.808-.069-1.121.251-1.016 1.464-1.333 2.425-1.041.619.207 1.204.684 1.558 1.445 1.653-1.07 1.65-1.063 2.803-1.799-.422-.655-.648-.957-.924-1.237C22.613 1.25 21.258.678 19.092.72l-1.128.146c-1.081.273-2.112.841-2.716 1.602-1.813 2.057-1.296 5.657.91 7.14 2.174 1.63 5.366 2.002 5.774 3.527.397 1.868-1.372 2.472-3.13 2.257-1.297-.27-2.018-.928-2.797-2.126-1.434.83-1.434.83-2.909 1.678.35.765.717 1.111 1.303 1.773 2.775 2.814 9.717 2.676 10.963-1.583.05-.146.385-1.122.116-2.626zM11.134.946H7.55l-.014 9.262c0 1.97.101 3.775-.219 4.328-.524 1.089-1.882.954-2.501.743-.63-.31-.95-.75-1.321-1.372-.102-.179-.179-.317-.204-.328L.379 15.364c.484.994 1.198 1.857 2.112 2.417 1.365.82 3.2 1.07 5.118.63 1.25-.364 2.327-1.117 2.89-2.264.817-1.504.642-3.324.634-5.337.019-3.285 0-6.568 0-9.863z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgJavascript
