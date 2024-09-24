import RegisterForm from '@/components/pages/register/RegisterForm';
import { RegisterFormType, RegisterValues } from '@/types/auth';
import StepIndicator from '@/components/pages/register/StepIndicator';
import StepThreeForm from '@/components/pages/register/StepThreeForm';
import StepTwoForm from '@/components/pages/register/StepTwoForm';
import { routes } from '@/config/routes';

const formType: RegisterFormType<RegisterValues>[] = [
  {
    id: 1,
    name: 'loginID',
    type: 'text',
    placeholder: '아이디',
    inputMode: 'text',
  },
  {
    id: 2,
    name: 'password',
    type: 'password',
    placeholder: '비밀번호',
    inputMode: 'text',
  },
  {
    id: 3,
    name: 'passwordConfirm',
    type: 'password',
    placeholder: '비밀번호 확인',
    inputMode: 'text',
  },
];

const page = () => {
  return (
    <main>
      <StepIndicator currentStep={2} totalSteps={3} />
      {/* <RegisterForm
        formType={formType}
        route={routes.signup_step3}
        hasNext={true}
      /> */}
      {/* <StepTwoForm
        formType={formType}
        route={routes.signup_step3}
        hasNext={true}
      /> */}
      <StepThreeForm
        formTypes={formType}
        route={routes.signup_step3}
        hasNext={true}
        availableType={'checkLoginIDs'}
      />
    </main>
  );
};

export default page;
