const Icon = ({ href, iconName, size = 22 }) => (
  <a href={href}>
    <svg width={size} height={size} viewBox="0 0 1024 1024">
      {iconName.map(icon => <path d={icon} />)}
    </svg>
  </a>
);

export default Icon;
