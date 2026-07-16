import { motion } from "framer-motion";

interface ToggleSwitchProps {
    checked: boolean;
    onChange: () => void;
}

export default function ToggleSwitch({
    checked,
    onChange,
}: ToggleSwitchProps) {
    return (
        <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            onClick={onChange}
            className={[
                "relative flex h-8 w-14 items-center rounded-full transition-all duration-300",
                checked
                    ? "bg-violet-600"
                    : "bg-zinc-700",
            ].join(" ")}
        >
            <motion.div
                layout
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                }}
                className={[
                    "absolute h-6 w-6 rounded-full bg-white shadow-lg",
                    checked ? "left-7" : "left-1",
                ].join(" ")}
            />
        </motion.button>
    );
}