import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex justify-end h-20 items-center px-6 bg-gray-900 border-t border-gray-800 mt-6 space-x-6">
      <Link href="#">
        <a className="text-sm text-gray-600">Privacidade</a>
      </Link>

      <Link href="#">
        <a className="text-sm text-gray-600">Termos de serviços</a>
      </Link>

      <Link href="#">
        <a className="text-sm text-gray-600">Preferencias de Cookies</a>
      </Link>
    </footer>
  )
}