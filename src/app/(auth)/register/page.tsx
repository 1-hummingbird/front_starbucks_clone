import { RegisterFormType, RegisterValues } from '@/types/auth';

import TermsAgreement from '@/components/pages/register/TermsAgreement';

const formType: RegisterFormType<RegisterValues>[] = [
  {
    id: 1,
    name: 'agree',
    type: 'checkbox',
  },
];

const page = () => {
  return (
    <main className="mt-12 flex justify-center">
      <TermsAgreement />
    </main>
  );
};

export default page;
