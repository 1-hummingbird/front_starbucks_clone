import SignInForm from "@/components/form/SignForm";
import Logo from "@/components/icons/Logo";

const Page = () => {
  return (
    <main>
      <section className="mt-10 mx-4">
        <Logo />
        <div className="mt-6">
          <h1 className="text-2xl font-bold font-nanum">안녕하세요.</h1>
          <h1 className="text-2xl font-bold font-nanum">스타벅스입니다.</h1>
          <p className="mt-2 font-nanum">
            회원 서비스 이용을 위해 로그인 해주세요.
          </p>
        </div>
      </section>
      <SignInForm />
    </main>
  );
};

export default Page;
