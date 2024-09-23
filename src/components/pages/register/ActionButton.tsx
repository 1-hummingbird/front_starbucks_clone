import { Button } from '../../ui/button';

interface ActionButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const ActionButton = ({
  label,
  onClick,
  isDisabled = false,
}: ActionButtonProps) => (
  <Button
    className="custom-button mt-6"
    type="button"
    onClick={onClick}
    disabled={isDisabled}
  >
    {label}
  </Button>
);

export default ActionButton;
