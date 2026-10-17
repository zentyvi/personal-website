interface AvatarProps {
  className: string;
}

function GithubAvatar({ className }: AvatarProps) {
  return (
    <img
      src="https://avatars.githubusercontent.com/u/218645578?v=4"
      alt="Github avatar"
      className={`github-avatar ${className}`}
    />
  );
}

export default GithubAvatar;
