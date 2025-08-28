import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';

function Home() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");
    const parallaxRef = useRef(null);
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 1000], [0.6, 0.2]); // Cambia opacidad según scroll
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData)
            .then(() => {
                setStatus("Mensaje enviado!");
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error al enviar el mensaje:", error);
                setStatus("Error al enviar el mensaje.");
                setIsLoading(false);
            });
    };

    const projects = [
        {
            title: "Proyecto Integrador Professional Developer",
            description: "Un proyecto full stack que integra frontend y backend.",
            image: "/img/mr.instruments.png",
            tech: ["React", "Java", "MySql", "Spring Boot", "Spring Boot Security", "Spring Boot Mail", "Docker", "JWT"],
            github: "https://github.com/nikoam3/Proyecto_Integrador/tree/main",
            demo: "https://proyecto-integrador-d5ud-git-main-nikoam3s-projects.vercel.app/"
        },
        {
            title: "Proyecto Integrador Analista de Sistemas",
            description: "Un proyecto full stack que integra frontend y backend.",
            tech: ["HTML", "Bootstrap", "Javascript", "MongoDB", "Docker", "Express.js", "JWT", "bcryptjs"],
            image: "/img/awii.png",
            github: "https://github.com/nikoam3/Aplicaciones_Web_II",
            demo: "https://aplicaciones-web-ii-kohl.vercel.app/"
        },
        {
            title: "Reloj Pomodoro",
            description: "Implementa un temporizador Pomodoro con sesiones de 25 minutos y pausas de 5 minutos, con controles para ajustar duraciones, iniciar/pausar, y reiniciar.",
            tech: ["React", "Bootstrap"],
            image: "/img/pomo.png",
            github: "https://github.com/nikoam3/FreeCodeCamp_Fullstack/tree/main/FrontEnd/Pomodoro%20Clock",
            demo: "https://free-code-camp-fullstack-w8xo.vercel.app/"
        },
        {
            title: "Calculadora",
            description: "Implementa una calculadora que permite realizar operaciones matemáticas (+, -, *, /) con números enteros y decimales, respetando el orden de precedencia.",
            tech: ["React", "Bootstrap", "Axios"],
            image: "/img/calcu.png",
            github: "https://github.com/nikoam3/FreeCodeCamp_Fullstack/tree/main/FrontEnd/Calculator",
            demo: "https://free-code-camp-fullstack-dbap.vercel.app/"
        },
        {
            title: "Juego de Memoria",
            description: "Reproduce una secuencia aleatoria de botones de colores con sonidos, permite al usuario repetirla, añade pasos al completarla correctamente, notifica errores",
            tech: ["React", "Bootstrap"],
            image: "/img/luz.png",
            github: "https://github.com/nikoam3/FreeCodeCamp_Fullstack/tree/main/FrontEnd/Memory%20Light%20Game",
            demo: "https://free-code-camp-fullstack-5u5e.vercel.app/"
        },
        {
            title: "Información de Archivo",
            description: "Microservicio para freeCodeCamp que analiza archivos subidos, devolviendo su nombre, tipo y tamaño en bytes.",
            tech: ["Node.js", "Express", "CORS", "Multer"],
            image: "/img/file.png",
            github: "https://github.com/nikoam3/FreeCodeCamp_Fullstack/tree/main/Desarrollo%20Backend%20y%20API/File%20Metadata",
            demo: "https://miraculous-ambition-production-f68f.up.railway.app/"
        },
        {
            title: "Buscador en Wikipedia",
            description: "Utiliza la API de MediaWiki para buscar entradas de Wikipedia y mostrar una entrada aleatoria.",
            tech: ["React", "Bootstrap", "Axios"],
            image: "/img/wiki.png",
            github: "https://github.com/nikoam3/FreeCodeCamp_Fullstack/tree/main/FrontEnd/Wikipedia",
            demo: "https://free-code-camp-fullstack-9tbd.vercel.app/"
        },
        {
            title: "Juego 3 en Raya",
            description: "Permite jugar al tres en raya contra una computadora o bien, con un compañero, elegir entre X u O, y reiniciar automáticamente al finalizar.",
            tech: ["React", "Bootstrap"],
            image: "/img/raya.png",
            github: "https://github.com/nikoam3/FreeCodeCamp_Fullstack/tree/main/FrontEnd/Ta%20Te%20Ti",
            demo: "https://free-code-camp-fullstack-7p6h.vercel.app/"
        }
    ];

    const certs = [
        { name: "Professional Developer", institution: "Digital Hose", date: "2023", link: "https://mega.nz/file/kgFSFKDD#M8CEiVQIFKQM2exQp1bRN_hvCHoi7QymnEK9t4Zmyjw" },
        { name: "Legacy Front End", institution: "Free Code Camp", date: "2025", link: "https://mega.nz/file/d8EjURab#YJoZkwYTrxq0ZDlgnTZOMd-FRokgu3q7mOewlhkpwzc" },
        { name: "Back End Development and APIs", institution: "Free Code Camp", date: "2025", link: "https://mega.nz/file/5o0EiCZI#KWigKBwZzqSrgap3rUdarLXBtXB04g_B8UQlHmlh9Ng" },
        { name: "Legacy JavaScript Algorithms and Data Structures", institution: "Free Code Camp", date: "2025", link: "https://mega.nz/file/00MAVBpY#yUFrSIp3ELwaK6GTurlSPM2G_nvqZowff_O1xVB4Vbg" },
        { name: "Responsive Web Design", institution: "Free Code Camp", date: "2025", link: "https://mega.nz/file/AtM1nK5D#DWoM4UqUH_lyPa0UKbx5eJkBmuaw1WejECvdwEoLUsY" },
        { name: "Interconexión con API con MatbaRofex desde Python", institution: "Matba Rofex School", date: "2021", link: "https://mega.nz/file/Vs0m2JoR#0KERFAGtY-TWhN3LnSZMrqKV7IN_ReI7F7NqnECcHhg" }

    ];

    const skills = ["React", "Java", "Spring Boot", "MongoDB",
        "HTML", "JavaScript", "Spring Security", "MySQL",
        "Tailwind CSS", "Python", "Git", "Docker",
        "Bootstrap", "Express.js", "Node.js", "JWT"];

    return (
        <div>
            <motion.div
                className="parallax-bg"
                style={{ opacity }} // Anima la opacidad según el scroll
                ref={parallaxRef}
            />
            <div className="content-wrapper pt-16">
                <motion.section
                    id="home"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="min-h-screen flex items-center justify-center text-white"
                >
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-4">Hola, soy Nicolás Agustín Amaya</h1>
                        <p className="text-xl mb-6">Desarrollador Junior apasionado por crear soluciones web modernas</p>
                        <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Ver Proyectos</a>
                    </div>
                </motion.section>

                <motion.section
                    id="about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4 text-white"
                >
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-center">Acerca de Mí</h2>
                        <p className="text-lg mb-6">Soy un desarrollador junior con experiencia en React, Java, JavaScript, Python, MongoDB, entre otras tecnologías. Me apasiona el aprendizaje constante y construir proyectos que resuelvan problemas reales.</p>
                        <h3 className="text-2xl font-semibold mb-4">Habilidades</h3>
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {skills.map(skill => (
                                <motion.li
                                    key={skill}
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-gray-700 p-2 rounded text-center"
                                >
                                    {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.section>

                <motion.section
                    id="projects"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4 text-white"
                >
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-center">Proyectos</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projects.map((project, index) => (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-gray-700 p-6 rounded-lg shadow-lg"
                                    >
                                        <img
                                            src={project.image}
                                            alt={`Screenshot de ${project.title}`}
                                            className="w-full h-48 object-cover rounded-t-lg mb-4"
                                        />
                                        <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                        <p className="mb-4">{project.description}</p>
                                        <p className="mb-4"><strong>Tecnologías:</strong> {project.tech.join(", ")}</p>
                                        <div className="flex space-x-4">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Demo</a>
                                        </div>
                                    </motion.div>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Certifications Section */}
                <motion.section
                    id="certifications"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4 text-white"
                >
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-center">Certificados</h2>
                        <div className="space-y-4">
                            {certs.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-gray-700 p-4 rounded-lg"
                                >
                                    <h3 className="text-xl font-semibold">{cert.name}</h3>
                                    <p>{cert.institution} - {cert.date}</p>
                                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ver Certificado</a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Contact Section */}
                <motion.section
                    id="contact"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="py-20 px-4 text-white"
                >
                    <div className="container mx-auto">
                        <h2 className="text-4xl font-bold mb-8 text-center">Contacto</h2>
                        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                            <div>
                                <label className="block mb-1">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 rounded"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1">Mensaje</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-2 bg-gray-700 rounded"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" disabled={isLoading}
                            >
                                {isLoading ? "Enviando..." : "Enviar"}
                            </button>
                            {status && <p className="text-center">{status}</p>}
                        </form>
                    </div>
                </motion.section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white p-4 text-center">
                    <p>&copy; 2025 Nicolás Agustín Amaya. Hecho con React y Tailwind CSS.</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://github.com/nikoam3" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                        <a href="https://www.linkedin.com/in/nicolás-agustín-amaya-161a34165" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Home;