import { Link as RouterLink, Outlet } from "react-router-dom";

// components
// import Logo from "../components/Logo";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function LogoOnlyLayout({ onlyChildren }) {
  return (
    <>
      {!onlyChildren && (
        <div>
          <RouterLink to="/">
            <img src="/logo.png" alt="logo" />
          </RouterLink>
        </div>
      )}
      <Outlet />
    </>
  );
}
