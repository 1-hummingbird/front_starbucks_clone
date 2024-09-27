import StepIndicator from '@/components/pages/register/StepIndicator';
import RegisterForm from '@/components/pages/register/RegisterForm';
import { routes } from '@/config/routes';
import { RegisterFormType } from '@/types/auth';

const formType: RegisterFormType[] = [
  {
    id: 1,
    name: 'email',
    type: 'email',
    placeholder: '이메일',
    inputMode: 'email',
  },
];

const page = () => {
  return (
    <main>
      <StepIndicator currentStep={1} totalSteps={3} />
      <RegisterForm
        formType={formType}
        route={routes.signup_step2}
        hasNext={true}
        isFirst={true}
      />
    </main>
  );
};

export default page;
