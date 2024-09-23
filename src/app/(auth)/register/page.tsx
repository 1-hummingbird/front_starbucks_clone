import RegisterForm from '@/components/pages/register/RegisterForm';
import TermsAgreement from '@/components/pages/register/TermsAgreement';
import { routes } from '@/config/routes';
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
    <main className="mt-16 flex justify-center">
      <TermsAgreement />
    </main>
  );
};

export default page;
