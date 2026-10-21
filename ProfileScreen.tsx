import { motion } from "motion/react";
import {
  User,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Home as HomeIcon,
  Bell,
  Shield,
  Palette,
} from "lucide-react";

export function ProfileScreen({ onBack }: { onBack: () => void }) {
  const menuItems = [
    { icon: User, label: "Edit Profile", color: "#0EA5A4" },
    { icon: Bell, label: "Notifications", color: "#6366F1" },
    { icon: Palette, label: "Appearance", color: "#F59E0B" },
    { icon: Shield, label: "Privacy & Security", color: "#22C55E" },
    { icon: Settings, label: "Preferences", color: "#8B5CF6" },
    { icon: HelpCircle, label: "Help & Support", color: "#3B82F6" },
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
          className="flex items-center gap-3 mb-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <button onClick={onBack}>
            <HomeIcon className="w-6 h-6 text-[#64748B]" />
          </button>
          <h1 className="text-[#0F172A]">Profile</h1>
        </motion.div>

        {/* Profile card */}
        <motion.div
          className="rounded-3xl p-6 mb-8 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0EA5A4 0%, #6366F1 50%, #8B5CF6 100%)",
            boxShadow: "0 12px 40px rgba(14, 165, 164, 0.3)",
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Animated background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.5) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative flex items-center gap-4">
            {/* Avatar with gradient ring */}
            <div className="relative">
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{
                  background: "linear-gradient(135deg, #FFF 0%, rgba(255,255,255,0.5) 100%)",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <div
                className="relative w-20 h-20 rounded-full flex items-center justify-center bg-white"
                style={{
                  boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                }}
              >
                <span className="text-4xl">👤</span>
              </div>
            </div>

            {/* User info */}
            <div className="flex-1">
              <h2 className="text-white mb-1">Alex Johnson</h2>
              <p className="text-white/80">alex.johnson@email.com</p>
              <div className="flex gap-2 mt-3">
                <span
                  className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white"
                  style={{ fontSize: "0.75rem" }}
                >
                  Premium
                </span>
                <span
                  className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white"
                  style={{ fontSize: "0.75rem" }}
                >
                  125 Solved
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Solved", value: "125", gradient: "from-[#0EA5A4] to-[#14B8A6]" },
            { label: "Success", value: "98%", gradient: "from-[#22C55E] to-[#4ADE80]" },
            { label: "Streak", value: "15d", gradient: "from-[#F59E0B] to-[#F97316]" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl p-4 text-center"
              style={{
                background: "white",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div
                className={`text-2xl mb-1 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                style={{ fontWeight: 600 }}
              >
                {stat.value}
              </div>
              <div className="text-[#64748B]" style={{ fontSize: "0.875rem" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Settings menu */}
        <div
          className="rounded-3xl overflow-hidden mb-6"
          style={{
            background: "white",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
          }}
        >
          {menuItems.map((item, index) => (
            <motion.button
              key={item.label}
              className="w-full flex items-center gap-4 p-5 border-b border-[#F1F5F9] last:border-b-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.05 }}
              whileHover={{ backgroundColor: "#F8FAFC", x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-5 h-5" style={{ color: item.color }} />
              </div>
              <span className="flex-1 text-left text-[#0F172A]">{item.label}</span>
              <ChevronRight className="w-5 h-5 text-[#64748B]" />
            </motion.button>
          ))}
        </div>

        {/* Logout button */}
        <motion.button
          className="w-full rounded-2xl py-4 px-6 flex items-center justify-center gap-2"
          style={{
            background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
            boxShadow: "0 8px 24px rgba(239, 68, 68, 0.3)",
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className="w-5 h-5 text-white" />
          <span className="text-white">Logout</span>
        </motion.button>
      </div>
    </div>
  );
}
