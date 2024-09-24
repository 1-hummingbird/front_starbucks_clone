import TermsAgreement from '@/components/pages/register/TermsAgreement';
import { RegisterFormType } from '@/types/auth';

const formType: RegisterFormType[] = [
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
