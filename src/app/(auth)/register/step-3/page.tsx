import { RegisterFormType, RegisterValues } from '@/types/auth';

import StepIndicator from '@/components/pages/register/StepIndicator';
import StepThreeForm from '@/components/pages/register/StepThreeForm';

const formTypes: RegisterFormType<RegisterValues>[] = [
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
    placeholder: '전화번호 (-) 제외',
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
      <StepThreeForm formTypes={formTypes} availableType={'checkPhone'} />
    </main>
  );
};

export default page;
