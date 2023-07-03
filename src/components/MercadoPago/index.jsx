import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const MercadoPago = ({ preferenceId }) => {
  initMercadoPago("APP_USR-a99631df-53c3-4eac-852c-000109ad1550");

  return <>{preferenceId && <Wallet initialization={{ preferenceId }} />}</>;
};

export default MercadoPago;
