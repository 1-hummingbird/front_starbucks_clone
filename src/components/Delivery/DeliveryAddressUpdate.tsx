"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { updateDeliveryAddress } from "@/action/deliveryAction";
import { UpdateDeliveryAddressRequest } from "@/types/updateDeliveryAddressRequest";
import { DeliveryDto } from "@/types/deliveryDto";

export default function DeliveryAddressUpdate() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [formData, setFormData] = useState<UpdateDeliveryAddressRequest | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const dtoParam = searchParams.get('dto');
		if (dtoParam) {
			try {
				const deliveryDto: DeliveryDto = JSON.parse(decodeURIComponent(dtoParam));
				setFormData({
					shippingAddressID: deliveryDto.id,
					addressNickname: deliveryDto.addressNickname,
					name: deliveryDto.name,
					address: deliveryDto.address,
					phone: deliveryDto.phone,
					memo: deliveryDto.memo,
				});
			} catch (error) {
				console.error('Error parsing delivery data:', error);
				// Handle error (e.g., show error message, redirect)
			}
		}
		setIsLoading(false);
	}, [searchParams]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (formData) {
			const { name, value } = e.target;
			setFormData(prev => ({
				...prev!,
				[name]: value,
			}));
		}
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (formData) {
			try {
				await updateDeliveryAddress(formData);
				router.push('/delivery');
			} catch (error) {
				console.error('Failed to update delivery address:', error);
				alert('배송지 수정 실패. 다시 시도해주세요.');
			}
		}
	};

	if (isLoading) {
		return <div>로딩중...</div>;
	}

	if (!formData) {
		return <div>배송지 데이터를 찾을 수 없습니다.</div>;
	}

	return (
		<div className="container">
			<div>
				<p className="m-1.5 p-3.5 text-5xl">배송지 수정</p>
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
							value={formData.addressNickname}
							onChange={handleChange}
							className="border-2 border-solid w-full"
							required
						/>
					</div>

					<div className="form-group w-full mt-4">
						<label htmlFor="name">받는 분</label>
						<br />
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							className="border-2 border-solid w-full"
							required
						/>
					</div>

					<div className="form-group w-full mt-4">
						<label htmlFor="address">주소</label>
						<br />
						<input
							type="text"
							id="address"
							name="address"
							value={formData.address}
							onChange={handleChange}
							className="border-2 border-solid w-full"
							required
						/>
					</div>

					<div className="form-group w-full mt-4">
						<label htmlFor="phone">연락처</label>
						<br />
						<input
							type="tel"
							id="phone"
							name="phone"
							value={formData.phone}
							onChange={handleChange}
							className="border-2 border-solid w-full"
							required
						/>
					</div>

					<div className="form-group w-full mt-4">
						<label htmlFor="memo">배송 메모</label>
						<br />
						<textarea
							id="memo"
							name="memo"
							value={formData.memo}
							onChange={handleChange}
							className="border-2 border-solid w-full"
							placeholder="배송메모를 남겨주세요."
						/>
					</div>

					<button type="submit" className="mt-4 p-2 bg-blue-500 text-white">수정하기</button>
				</form>
			</div>
		</div>
	);
}