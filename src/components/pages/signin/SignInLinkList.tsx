import SignInLink from './SignInLink';

export type SignInLinkType = {
  url: string;
  text: string;
};

const signInLinkData: SignInLinkType[] = [
  {
    url: '/find-id',
    text: '아이디 찾기',
  },
  {
    url: '/find-pw',
    text: '비밀번호 찾기',
  },
  {
    url: '/register',
    text: '회원가입',
  },
];

const SignInLinkList = () => {
  return (
    <ul className="mb-14 mt-4 flex flex-row items-center justify-center text-sm">
      {signInLinkData.map((link, index) => (
        <li key={index}>
          <SignInLink signLink={link} />
        </li>
      ))}
    </ul>
  );
};

export default SignInLinkList;
