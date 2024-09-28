import Logo from '@/components/icons/Logo';

const SignInHeader = () => {
  return (
    <div className="mb-2 flex flex-col items-start font-bold">
      <Logo size={60} />
      <h2 className="mb-3 mt-6 text-[1.4rem] leading-tight">
        안녕하세요.
        <br /> 스타벅스입니다.
      </h2>
      <p className="mb-2 text-sm text-gray-400">
        회원 서비스 이용을 위해 로그인 해주세요.
      </p>
    </div>
  );
};

export default SignInHeader;
