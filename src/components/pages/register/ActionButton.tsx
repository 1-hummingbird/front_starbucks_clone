import { Button } from '../../ui/button';

interface NextStepButtonProps {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
}

const NextStepButton = ({
  label,
  onClick,
  isDisabled = false,
}: NextStepButtonProps) => (
  <Button
    className="custom-button mt-6"
    type="button"
    onClick={onClick}
    disabled={isDisabled}
  >
    {label}
  </Button>
);

export default NextStepButton;
