import './styles.css';
interface Props {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  testID?: string;
}

const Button = ({ label, onClick, disabled, testID }: Props) => (
  <div
    className={disabled ? 'btn disabled' : 'btn'}
    data-testid={testID}
    onClick={() => {
      if (!disabled && onClick) {
        onClick();
      }
    }}
  >
    {label}
  </div>
);

export default Button;
