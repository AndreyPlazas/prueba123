import Link from 'next/link' // Importa el componente Link de Next.js para la navegación
import MobileMenu from './mobile-menu' // Importa el componente MobileMenu para el menú móvil

export default function Header() { // Define la función que representa el componente Header
  return (
    <header className="absolute w-full z-30"> {/* Encabezado con posición absoluta, ancho completo y z-index alto */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6"> {/* Contenedor central con ancho máximo y centrado automático */}
        <div className="flex items-center justify-between h-20"> {/* Contenedor flex para alinear elementos horizontalmente */}
          
          {/* Branding del sitio */}
          <div className="shrink-0 mr-4"> {/* Contenedor que no se encoge y con margen a la derecha */}
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip"> {/* Enlace al inicio */}
              <svg className="w-8 h-8 fill-current text-green-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> {/* SVG del logo */}
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" /> {/* Ruta del SVG */}
              </svg>
            </Link>
            <div className="text-green-600 font-semibold mt-1">SAPO</div> {/* Nombre de la empresa debajo del logo */}
          </div>

          {/* Navegación de escritorio */}
          <nav className="hidden md:flex md:grow justify-between"> {/* Navegación oculta en dispositivos móviles, visible en escritorio */}
            <ul className="flex space-x-4"> {/* Lista de navegación con flex y centrado */}
              <li>
                <Link href="#hero" className="font-medium text-gray-600 hover:text-gray-900 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Home {/* Enlace a la sección Hero */}
                </Link>
              </li>
              <li>
                <Link href="#features" className="font-medium text-gray-600 hover:text-gray-900 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Características {/* Enlace a la sección Features */}
                </Link>
              </li>
              <li>
                <Link href="#zigzag" className="font-medium text-gray-600 hover:text-gray-900 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Acerca de Nosotros {/* Enlace a la sección Zigzag */}
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="font-medium text-green-600 hover:text-gray-900 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Catálogo {/* Enlace al catálogo */}
                </Link>
              </li>
            </ul>
            {/* Enlaces de iniciar sesión y registro */}
            <ul className="flex space-x-4"> {/* Lista de navegación con flex y alineación a la derecha */}
              <li>
                <Link href="/signin" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Iniciar Sesión {/* Enlace a la página de iniciar sesión */}
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Registrarse {/* Enlace a la página de registro */}
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu /> {/* Componente del menú móvil */}

        </div>
      </div>
    </header>
  )
}
