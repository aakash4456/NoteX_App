import { motion } from "framer-motion";

function NoteXLogo() {
    return (
        <motion.div 
            className="flex items-center text-5xl font-extrabold text-blue-950"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.span
                className="text-blue-950"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            >
                N
            </motion.span>
            <motion.span
                className="text-white bg-blue-950 px-1 rounded-md"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                o
            </motion.span>
            <motion.span
                className="text-blue-950"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                t
            </motion.span>
            <motion.span
                className="text-white bg-blue-950 px-1 rounded-md"
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                e
            </motion.span>
            <motion.span
                className="text-red-700"
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                X
            </motion.span>
        </motion.div>
    );
}

export default NoteXLogo;
