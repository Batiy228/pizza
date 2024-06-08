import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    style={{ marginRight: "65px" }}
    speed={2}
    width={460}
    height={465}
    viewBox="0 0 460 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    // {...props}
  >
    {/* <rect x="563" y="544" rx="3" ry="3" width="88" height="6" />
    <rect x="564" y="542" rx="3" ry="3" width="52" height="6" />
    <rect x="500" y="539" rx="3" ry="3" width="410" height="6" />
    <rect x="512" y="538" rx="3" ry="3" width="380" height="6" />
    <rect x="512" y="554" rx="3" ry="3" width="178" height="6" />
    <circle cx="587" cy="544" r="20" />
    <circle cx="716" cy="582" r="235" />
    <circle cx="664" cy="599" r="89" />
    <circle cx="583" cy="544" r="25" />
    <circle cx="612" cy="556" r="34" />
    <circle cx="622" cy="586" r="44" />
    <circle cx="604" cy="547" r="44" />
    <circle cx="561" cy="479" r="80" />
    <rect x="434" y="533" rx="0" ry="0" width="181" height="123" /> */}
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="278" rx="10" ry="10" width="280" height="30" />
    <rect x="0" y="323" rx="10" ry="10" width="280" height="80" />
    <rect x="133" y="420" rx="10" ry="10" width="147" height="40" />
    <rect x="0" y="427" rx="10" ry="10" width="90" height="25" />
  </ContentLoader>
);

export default Skeleton;
