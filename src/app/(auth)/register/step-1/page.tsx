import EmailInput from '@/components/pages/register/EmailInput';
import RegisterForm from '@/components/pages/register/RegisterForm';
import { RegisterFormType } from '@/types/auth';
import StepIndicator from '@/components/pages/register/StepIndicator';
import { routes } from '@/config/routes';

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
      <EmailInput />
      {/* <RegisterForm
        formType={formType}
        route={routes.signup_step2}
        hasNext={true}
      /> */}
    </main>
  );
};

export default page;
