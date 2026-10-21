import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function ProcessingScreen() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%)",
      }}
    >
      {/* Animated AI orb */}
      <div className="relative">
        {/* Outer glow rings */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px solid transparent",
              borderImage: "linear-gradient(135deg, #0EA5A4, #6366F1, #8B5CF6, #22C55E) 1",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Central orb */}
        <motion.div
          className="relative w-40 h-40 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #0EA5A4 0%, #6366F1 50%, #8B5CF6 100%)",
            boxShadow: "0 20px 60px rgba(14, 165, 164, 0.4)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {/* Inner glow */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Robot icon */}
          <span className="text-6xl relative z-10">🤖</span>

          {/* Sparkles */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                x: [0, Math.cos((i * Math.PI) / 2) * 80],
                y: [0, Math.sin((i * Math.PI) / 2) * 80],
                opacity: [1, 0],
                scale: [1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeOut",
              }}
            >
              <Sparkles className="w-4 h-4 text-white" fill="white" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Text */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-[#0F172A] mb-2">Analyzing Problem</h2>
        <p className="text-[#64748B]">Generating your solution...</p>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="mt-8 w-64 h-1 rounded-full overflow-hidden"
        style={{ background: "rgba(14, 165, 164, 0.2)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            background: "linear-gradient(90deg, #0EA5A4, #6366F1, #8B5CF6)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Processing steps */}
      <motion.div
        className="mt-12 space-y-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {["Analyzing image", "Identifying issue", "Finding solution"].map((step, i) => (
          <motion.div
            key={step}
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.3 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full"
              style={{
                background: "linear-gradient(135deg, #0EA5A4, #14B8A6)",
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
            <span className="text-[#64748B]">{step}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
