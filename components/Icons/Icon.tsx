import { IconProps, iconSizeVariants } from "../Icons/Iconconfig"; // keeping config separate is clean!

export function MenuIcon({ size = "md", bg = "black" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={iconSizeVariants[size]} // Tailwind size classes
      viewBox="0 0 24 24"
      fill={bg}
    >
      <path d="M3.563 4.063a.5.5 0 0 1 0-1l16.874-.001a.5.5 0 0 1 0 1l-16.874.001Zm0 8.438a.5.5 0 0 1 0-1l16.874-.002a.5.5 0 0 1 0 1l-16.874.002Zm0 8.438a.5.5 0 0 1 0-1l16.874-.002a.5.5 0 0 1 0 1l-16.874.002Z" />
    </svg>
  );
}
