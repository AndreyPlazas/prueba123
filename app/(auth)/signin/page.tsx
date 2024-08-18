export const metadata = {
  title: 'Iniciar Sesión - Open PRO', // Título de la página
  description: 'Descripción de la página', // Descripción de la página
}

import Link from 'next/link' // Importación del componente Link de Next.js

export default function SignIn() { // Función que define el componente SignIn
  return (
    <section className="relative"> {/* Sección principal con posición relativa */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6"> {/* Contenedor con ancho máximo y centrado automático */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20"> {/* Espaciado superior e inferior */}
          
          {/* Encabezado de la página */}
          <div className="max-w-2xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Bienvenido.Inicia con tu cuenta sapoo</h1> {/* Título */}
          </div>

          {/* Formulario */}
          <div className="max-w-sm mx-auto"> {/* Contenedor del formulario con ancho máximo */}
            <form> {/* Inicio del formulario */}
              <div className="flex flex-wrap -mx-3 mb-4"> {/* Contenedor flex para los campos del formulario */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Correo Electrónico</label> {/* Etiqueta del campo de correo */}
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="tucorreo@tuempresa.com" required /> {/* Campo de entrada de correo */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4"> {/* Contenedor flex para los campos del formulario */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Contraseña</label> {/* Etiqueta del campo de contraseña */}
                  <input id="password" type="password" className="form-input w-full text-gray-300" placeholder="Contraseña (al menos 10 caracteres)" required /> {/* Campo de entrada de contraseña */}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4"> {/* Contenedor flex para los campos del formulario */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <div className="flex justify-between"> {/* Contenedor flex para justificar el contenido */}
                    <label className="flex items-center"> {/* Etiqueta con elementos flexibles */}
                      <input type="checkbox" className="form-checkbox" /> {/* Checkbox */}
                      <span className="text-gray-400 ml-2">Mantenerme conectado</span> {/* Texto al lado del checkbox */}
                    </label>
                    <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">¿Olvidaste tu contraseña?</Link> {/* Enlace para restablecer la contraseña */}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6"> {/* Contenedor flex para el botón de envío */}
                <div className="w-full px-3"> {/* Ancho completo y espaciado horizontal */}
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Iniciar Sesión</button> {/* Botón de envío */}
                </div>
              </div>
            </form> {/* Fin del formulario */}
            <div className="text-gray-400 text-center mt-6">
              ¿No tienes una cuenta? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Regístrate</Link> {/* Enlace para registrarse */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
