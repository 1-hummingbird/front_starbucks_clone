import DeliveryHeader from "@/components/Delivery/DeliveryHeader";
import { DeliveryDto } from "@/types/deliveryDto";

interface DeliveryAddressUpdateProps {
  dto: DeliveryDto;
}

const DeliveryAddressUpdate: React.FC<DeliveryAddressUpdateProps> = ({ dto }) => {
  return (
    <>
      <DeliveryHeader />
      <DeliveryAddressUpdate dto={dto} />
    </>
  );
};

function page({ searchParams }: { searchParams: { deliveryDto: DeliveryDto } }) {
  const dto = searchParams.deliveryDto;
  return (
    <>
      <DeliveryHeader />
      <DeliveryAddressUpdate dto={dto} />
    </>
  );
}

export default page;
