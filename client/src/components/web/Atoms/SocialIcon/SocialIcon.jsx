const SocialIcon = ({ link, styles, children }) => {
  return (
    <a href={link} style={styles}>
      {children}
    </a>
  );
};

export { SocialIcon };
