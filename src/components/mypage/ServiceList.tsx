import React from "react";
import Image from "next/image";
import Link from "next/link";
import SignOut from "../SignOut";
import { KeyRound } from "lucide-react";
import { Button } from "../ui/button";

function ServiceList() {
  return (
    <div className="bg-gray-200">
      <h2 className="p-5 text-lg font-bold">서비스</h2>
      <ul className="space-y-4 px-3">
        {" "}
        <li className="flex items-center justify-between">
          {" "}
          <div className="flex items-center space-x-2">
            {" "}
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=16408&format=png&color=000000"
              alt="주문내역"
            />
            <span>주문내역</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href={"/review"}>
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/?size=100&id=12597&format=png&color=000000"
                alt="리뷰관리"
              />
            </Link>
            <span>리뷰 관리</span>
          </div>
          <Link href={"/review"}>
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
              alt="화살표"
            />
          </Link>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=15895&format=png&color=000000"
              alt="선물함"
            />
            <span>선물함</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=24472&format=png&color=000000"
              alt="쿠폰"
            />
            <span>쿠폰</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href={"/delivery"}>
              <Image
                width={32}
                height={32}
                src="https://img.icons8.com/?size=100&id=14598&format=png&color=000000"
                alt="배송지"
              />
            </Link>
            <span>배송지 관리</span>
          </div>
          <Link href={"/delivery"}>
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
              alt="화살표"
            />
          </Link>
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=16008&format=png&color=000000"
              alt="알림"
            />
            <span>입고 알림내역</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="mt-4 font-bold">약관 및 정책</li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              width={32}
              height={32}
              src="https://img.icons8.com/?size=100&id=X91T6MIy7d9E&format=png&color=000000"
              alt="이용동의"
            />
            <span>배송지 정보 수집 및 이용 동의</span>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
        <li className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <KeyRound size={28} />
            <p className="">카카오 로그인</p>
          </div>
          <Image
            width={32}
            height={32}
            src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
            alt="화살표"
          />
        </li>
      </ul>
      <div className="mt-2 flex w-full justify-between p-3">
        <SignOut />
        <Image
          width={32}
          height={32}
          src="https://img.icons8.com/?size=100&id=15812&format=png&color=000000"
          alt="화살표"
        />
      </div>
    </div>
  );
}

export default ServiceList;
