import { Link } from "@remix-run/react";

const Logo = () => {
  return (
    <div className="inline-flex items-center gap-4">
      <Link
        to="/"
        className="inline-flex items-center gap-1 text-primary"
      >
        &lt;
        <div>
          <strong>
            YeON
          </strong>
          .dev
        </div>
        &gt;
      </Link>
    </div>
  );
};
export default Logo;