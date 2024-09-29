import StepIndicator from '@/components/pages/register/StepIndicator';
import StepOneForm from '@/components/pages/register/StepOneForm';

const page = () => {
  return (
    <main>
      <StepIndicator currentStep={1} totalSteps={3} />
      <StepOneForm />
    </main>
  );
};

export default page;
