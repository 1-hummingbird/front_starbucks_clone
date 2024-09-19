import SignInForm from "@/components/form/SignInForm";
import Logo from "@/components/icons/Logo";

const Page = () => {
  return (
    <main>
      <section className="mx-4 mt-28 flex items-center justify-center">
        <Logo />
      </section>
      <SignInForm />
    </main>
  );
};

export default Page;
