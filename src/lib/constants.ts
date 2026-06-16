// Enlaces oficiales de asociación ACA. Todo botón de "Asociate hoy" / "Hacete socio ACA"
// debe abrir uno de estos enlaces externos en una pestaña nueva.

// Enlace general de asociación, usado en todos los CTA del sitio.
export const ACA_JOIN_URL =
  'https://www.aca.org.ar/promociones/asociacion/0724/?id=3335383137353833303C3D3A30353E4D4D592444414942524E4A2145444B403E404035';

// Enlace específico de asociación correspondiente a Díaz Servicios SRL,
// usado en el bloque de promoción de la página /socios-aca.
export const ACA_STATION_JOIN_URL =
  'https://www.aca.org.ar/promociones/asociacion/0724/?id=3335383137353833303C3D3A30353E4D4A4C4D592444414942524E4A2145444B403E404035';

export const WHATSAPP_NUMBER = '5493704247241';

export const WHATSAPP_URL = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Número de WhatsApp para reservas del hotel.
export const HOTEL_WHATSAPP_NUMBER = '5493704247241';
