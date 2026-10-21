import { motion } from "motion/react";
import {
  Camera,
  Mic,
  Laptop,
  Smartphone,
  Settings,
  Gamepad2,
  Home,
  Wifi,
  Sparkles,
} from "lucide-react";

export function HomeScreen({ onGenerate }: { onGenerate: () => void }) {
  const categories = [
    { icon: Laptop, label: "Computer Issues", gradient: "from-[#0EA5A4] to-[#14B8A6]" },
    { icon: Smartphone, label: "Mobile Devices", gradient: "from-[#6366F1] to-[#8B5CF6]" },
    { icon: Settings, label: "Hardware Errors", gradient: "from-[#F59E0B] to-[#F97316]" },
    { icon: Gamepad2, label: "Gaming Consoles", gradient: "from-[#22C55E] to-[#4ADE80]" },
    { icon: Home, label: "Home Appliances", gradient: "from-[#EC4899] to-[#F472B6]" },
    { icon: Wifi, label: "Network Issues", gradient: "from-[#3B82F6] to-[#60A5FA]" },
  ];

  return (
    <div
      className="min-h-screen pb-24"
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 100%)",
      }}
    >
      {/* Header */}
      <div className="p-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[#0F172A] mb-2">Hi, Alex 👋</h1>
          <p className="text-[#64748B]">How can I help you today?</p>
        </motion.div>

        {/* Main input card */}
        <motion.div
          className="mt-8 rounded-3xl p-6 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0EA5A4 0%, #6366F1 50%, #8B5CF6 100%)",
            boxShadow: "0 12px 40px rgba(14, 165, 164, 0.3)",
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-white" fill="white" />
              <span className="text-white">AI Assistant</span>
            </div>
            <textarea
              placeholder="Describe or scan your problem..."
              className="w-full bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white placeholder-white/70 outline-none resize-none"
              rows={3}
            />
            <div className="flex gap-3 mt-4">
              <motion.button
                className="flex-1 bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center gap-2 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Camera className="w-5 h-5" />
                <span>Scan</span>
              </motion.button>
              <motion.button
                className="flex-1 bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-center gap-2 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mic className="w-5 h-5" />
                <span>Voice</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="mt-8">
          <h3 className="text-[#0F172A] mb-4">Common Issues</h3>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.label}
                className="rounded-2xl p-5 text-left"
                style={{
                  background: "white",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${category.gradient}`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-[#0F172A]">{category.label}</p>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Generate button */}
        <motion.button
          className="w-full mt-8 rounded-2xl py-4 px-6 text-white flex items-center justify-center gap-2 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #22C55E 0%, #4ADE80 100%)",
            boxShadow: "0 8px 24px rgba(34, 197, 94, 0.3)",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onGenerate}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Sparkles className="w-5 h-5" fill="white" />
          <span>Generate Solution</span>
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.button>
      </div>
    </div>
  );
}
