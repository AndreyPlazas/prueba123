export const metadata = {
  title: 'Catálogo de Cehcilucos - Open PRO', // Título de la página
  description: 'Explora nuestro catálogo de cehcilucos únicos y sorprendentes.', // Descripción de la página
}

import Image from 'next/image' // Importa el componente Image de Next.js para manejar las imágenes
import Link from 'next/link' // Importa el componente Link de Next.js

// Datos simulados para los cehcilucos
const cehcilucos = [
  { id: 1, name: 'Cehciluco 1', description: 'Descripción breve del cehciluco 1', image: '/images/cehciluco1.jpg' },
  { id: 2, name: 'Cehciluco 2', description: 'Descripción breve del cehciluco 2', image: '/images/cehciluco2.jpg' },
  { id: 3, name: 'Cehciluco 3', description: 'Descripción breve del cehciluco 3', image: '/images/cehciluco3.jpg' },
  // Añadir más cehcilucos hasta llegar a 20...
];

export default function CatalogPage() { // Función que define el componente CatalogPage
  return (
    <section className="relative"> {/* Sección principal con posición relativa */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6"> {/* Contenedor con ancho máximo y centrado automático */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20"> {/* Espaciado superior e inferior */}
          
          {/* Encabezado de la página */}
          <div className="max-w-2xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Catálogo de Cehcilucos</h1> {/* Título */}
            <p className="text-gray-400">Explora nuestra colección de cehcilucos únicos.</p> {/* Descripción */}
          </div>

          {/* Grid de cehcilucos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Grid con responsive para 1, 2 o 4 columnas */}
            {cehcilucos.map((cehciluco) => (
              <div key={cehciluco.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"> {/* Contenedor del cehciluco */}
                <Image 
                  src={cehciluco.image} 
                  alt={cehciluco.name} 
                  width={500} 
                  height={300} 
                  className="w-full h-48 object-cover" 
                /> {/* Imagen del cehciluco */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{cehciluco.name}</h3> {/* Nombre del cehciluco */}
                  <p className="text-gray-400">{cehciluco.description}</p> {/* Descripción del cehciluco */}
                </div>
                <div className="p-4">
                  <Link href={`/catalogo/${cehciluco.id}`} className="text-purple-600 hover:text-purple-400">Ver más</Link> {/* Enlace a más detalles */}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
