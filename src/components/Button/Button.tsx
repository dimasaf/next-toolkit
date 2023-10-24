import "./button.css";

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  return (
    <button
      onClick={onClick}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      type={type}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
