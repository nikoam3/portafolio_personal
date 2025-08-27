import { useState } from 'react';
import { motion } from 'framer-motion';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Acerca de Mí', href: '#about' },
        { name: 'Proyectos', href: '#projects' },
        { name: 'Certificados', href: '#certifications' },
        { name: 'Contacto', href: '#contact' },
    ];

    // Variantes para la animación del menú móvil
    const menuVariants = {
        open: {
            opacity: 1,
            height: 'auto',
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
        closed: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3, ease: 'easeInOut' },
        },
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-90 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo o Nombre */}
                <div className="text-2xl font-bold text-white">Desarrollador Full Stack</div>

                {/* Menú para pantallas grandes */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-blue-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Botón hamburguesa para móviles */}
                <button
                    className="md:hidden text-white focus:outline-none mr-5"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                    </svg>
                </button>
            </div>

            {/* Menú desplegable para móviles */}
            <motion.div
                className="md:hidden bg-gray-900 bg-opacity-95 overflow-hidden"
                initial="closed"
                animate={isOpen ? 'open' : 'closed'}
                variants={menuVariants}
            >
                <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white hover:text-blue-500 transition-colors text-lg"
                            //onClick={() => setIsOpen(false)} // Cierra el menú al hacer clic
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
}

export default Navbar;