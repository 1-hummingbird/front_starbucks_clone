import DeliveryButton from "./DeliveryButton";
import DeliveryTest from "./DeliveryTest";

function DeliveryManagement() {
  return (
    <>
      <h2 className="p-3 text-2xl font-bold">배송지 관리</h2>
      <DeliveryTest />
      <div>
        <DeliveryButton />
      </div>
    </>
  );
}

export default DeliveryManagement;
