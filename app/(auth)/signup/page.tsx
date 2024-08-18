export const metadata = {
  title: 'Registrarse - Open PRO', // Título de la página
  description: 'Descripción de la página', // Descripción de la página
}

import Link from 'next/link' // Importación del componente Link de Next.js

export default function SignUp() { // Función que define el componente SignUp
  return (
    <section className="relative"> {/* Sección principal con posición relativa */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6"> {/* Contenedor con ancho máximo y centrado automático */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20"> {/* Espaciado superior e inferior */}

          {/* Encabezado de la página */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Bienvenido. Existimos para hacer el emprendimiento más fácil.</h1> {/* Título */}
          </div>

          {/* Formulario */}
          <div className="max-w-sm mx-auto"> {/* Contenedor del formulario con ancho máximo */}
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Regístrate con tu correo electrónico</div> {/* Texto de separación */}
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
            <form> {/* Inicio del formulario */}
              <div className="flex flex-wrap -mx-3 mb-4"> {/* Contenedor flex para los campos del formulario */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Nombre Completo <span className="text-red-600">*</span></label> {/* Etiqueta del campo de nombre completo */}
                  <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="Nombre y apellido" required /> {/* Campo de entrada de nombre completo */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4"> {/* Contenedor flex para los campos del formulario */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Nombre de la Empresa <span className="text-red-600">*</span></label> {/* Etiqueta del campo de nombre de la empresa */}
                  <input id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Tu empresa o nombre de la app" required /> {/* Campo de entrada de nombre de la empresa */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4"> {/* Contenedor flex para los campos del formulario */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Correo Electrónico <span className="text-red-600">*</span></label> {/* Etiqueta del campo de correo electrónico */}
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="tucorreo@tuempresa.com" required /> {/* Campo de entrada de correo electrónico */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4"> {/* Contenedor flex para los campos del formulario */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Contraseña <span className="text-red-600">*</span></label> {/* Etiqueta del campo de contraseña */}
                  <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Contraseña (al menos 10 caracteres)" required /> {/* Campo de entrada de contraseña */}
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                Acepto ser contactado por Open PRO sobre esta oferta según la <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Política de Privacidad</Link> de Open PRO. {/* Términos y condiciones */}
              </div>
              <div className="flex flex-wrap -mx-3 mt-6"> {/* Contenedor flex para el botón de envío */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Registrarse</button> {/* Botón de envío */}
                </div>
              </div>
            </form> {/* Fin del formulario */}
            <div className="text-gray-400 text-center mt-6">
              ¿Ya usas Open PRO? <Link href="/signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Iniciar Sesión</Link> {/* Enlace para iniciar sesión */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
