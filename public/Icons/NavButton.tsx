"use client ";

export function NavButton() {
  return (
    <div>
      <button
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="50"
          viewBox="0 0 24 24"
          fill="#000000"
        >
          <path
            fill="#000000"
            d="M3.563 4.063a.5.5 0 0 1 0-1l16.874-.001a.5.5 0 0 1 0 1l-16.874.001Zm0 8.438a.5.5 0 0 1 0-1l16.874-.002a.5.5 0 0 1 0 1l-16.874.002Zm0 8.438a.5.5 0 0 1 0-1l16.874-.002a.5.5 0 0 1 0 1l-16.874.002Z"
          />
        </svg>
      </button>
    </div>
  );
}
