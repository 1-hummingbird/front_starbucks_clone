import React, { useState } from "react";
import { useRouter } from 'next/router';

function DeliverySubAdress() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    addressNickname: '',
    name: '',
    address: '',
    phone: '',
    memo: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.BASE_API_URL}/shipping/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to add delivery address');
      }
      router.push('/delivery');
    } catch (error) {
      console.error('Error adding delivery address:', error);
    }
  };

  return (
    <div className="container">
      <div>
        <p className="m-1.5 p-3.5 text-5xl">배송지 정보</p>
      </div>

      <div className="m-1.5 p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group w-full">
            <label htmlFor="addressNickname">주소 별칭</label>
            <br />
            <input
              type="text"
              id="addressNickname"
              name="addressNickname"
              className="border-2 border-solid w-full"
              required
              onChange={handleChange}
              value={formData.addressNickname}
            />
          </div>

          <div className="form-group w-full mt-4">
            <label htmlFor="name">받는 분</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              className="border-2 border-solid w-full"
              required
              onChange={handleChange}
              value={formData.name}
            />
          </div>

          <div className="form-group w-full mt-4">
            <label htmlFor="address">주소</label>
            <br />
            <input
              type="text"
              id="address"
              name="address"
              className="border-2 border-solid w-full"
              required
              onChange={handleChange}
              value={formData.address}
            />
          </div>

          <div className="form-group w-full mt-4">
            <label htmlFor="phone">연락처</label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border-2 border-solid w-full"
              required
              onChange={handleChange}
              value={formData.phone}
            />
          </div>

          <div className="form-group w-full mt-4">
            <label htmlFor="memo">배송 메모</label>
            <br />
            <textarea
              id="memo"
              name="memo"
              className="border-2 border-solid w-full"
              placeholder="배송메모를 남겨주세요."
              onChange={handleChange}
              value={formData.memo}
            />
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full rounded-full bg-[#02A862] py-4 text-center text-white">
              추가하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeliverySubAdress;
