import Link from 'next/link';
import React from 'react';
import { SignInLinkType } from './SignInLinkList';

function SignInLink({ signLink }: { signLink: SignInLinkType }) {
  return (
    <Link className="p-3 text-slate-800 hover:underline" href={signLink.url}>
      <p
        className={`${signLink.text !== '회원가입' && 'border-r-[1px]'} border-gray-300 px-5`}
      >
        {signLink.text}
      </p>
    </Link>
  );
}

export default SignInLink;
