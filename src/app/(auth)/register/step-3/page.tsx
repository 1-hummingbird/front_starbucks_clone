import StepIndicator from '@/components/pages/register/StepIndicator';
import RegisterForm from '@/components/pages/register/RegisterForm';
import { RegisterFormType } from '@/types/auth';

const formType: RegisterFormType[] = [
  {
    id: 1,
    name: 'name',
    type: 'text',
    placeholder: '이름',
    inputMode: 'text',
  },
  {
    id: 2,
    name: 'nickname',
    type: 'text',
    placeholder: '닉네임',
    inputMode: 'text',
  },
  {
    id: 3,
    name: 'phone',
    type: 'text',
    placeholder: '전화번호',
    inputMode: 'tel',
  },
  {
    id: 4,
    name: 'birthdate',
    type: 'text',
    placeholder: '생년월일 8자리',
    inputMode: 'numeric',
  },
];

const page = () => {
  return (
    <main>
      <StepIndicator currentStep={3} totalSteps={3} />
      <RegisterForm formType={formType} hasNext={false} />
    </main>
  );
};

export default page;
