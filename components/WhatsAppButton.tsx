export default function WhatsAppButton() {
  const numero = "5491161132469";
  const mensaje = "Hola NOVA, quiero solicitar un presupuesto.";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a NOVA por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition-transform duration-200 hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
        className="h-8 w-8"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.58 0 .27 5.31.27 11.83c0 2.08.54 4.11 1.57 5.9L.17 24l6.43-1.64a11.8 11.8 0 0 0 5.5 1.36h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.42-8.41ZM12.1 21.7h-.01a9.84 9.84 0 0 1-5.02-1.37l-.36-.21-3.82.98 1.02-3.72-.23-.38a9.84 9.84 0 1 1 8.42 4.7Zm5.4-7.37c-.29-.15-1.71-.84-1.97-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.16.19-.33.22-.62.07-.29-.15-1.21-.45-2.3-1.43-.85-.76-1.43-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.33.43-.49.15-.16.19-.28.29-.47.1-.19.05-.35-.02-.49-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.49.07-.75.35-.26.29-.98.96-.98 2.35s1 2.73 1.14 2.92c.14.19 1.97 3.01 4.78 4.22.67.29 1.19.46 1.6.59.67.21 1.28.18 1.76.11.54-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
      </svg>
    </a>
  );
}