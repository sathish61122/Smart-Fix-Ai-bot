import { motion } from "motion/react";
import { Home, Clock, User, Sparkles } from "lucide-react";

export function BottomNav({
  active,
  onChange,
}: {
  active: string;
  onChange: (screen: string) => void;
}) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "history", icon: Clock, label: "History" },
    { id: "ai", icon: Sparkles, label: "AI", isSpecial: true },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 pb-6 px-6"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div
        className="rounded-3xl p-4"
        style={{
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 -4px 24px rgba(0, 0, 0, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const isActive = active === item.id;

            if (item.isSpecial) {
              return (
                <motion.button
                  key={item.id}
                  className="relative flex flex-col items-center gap-1"
                  onClick={() => onChange(item.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <motion.div
                    className="w-14 h-14 rounded-full flex items-center justify-center -mt-8"
                    style={{
                      background: "linear-gradient(135deg, #0EA5A4 0%, #6366F1 50%, #8B5CF6 100%)",
                      boxShadow: "0 8px 24px rgba(14, 165, 164, 0.4)",
                    }}
                    animate={
                      isActive
                        ? {
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              "0 8px 24px rgba(14, 165, 164, 0.4)",
                              "0 12px 32px rgba(14, 165, 164, 0.6)",
                              "0 8px 24px rgba(14, 165, 164, 0.4)",
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <item.icon className="w-6 h-6 text-white" fill="white" />
                  </motion.div>
                </motion.button>
              );
            }

            return (
              <motion.button
                key={item.id}
                className="flex flex-col items-center gap-1 px-4 py-2"
                onClick={() => onChange(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <item.icon
                    className="w-6 h-6 transition-colors"
                    style={{
                      color: isActive ? "#0EA5A4" : "#64748B",
                    }}
                    fill={isActive ? "#0EA5A4" : "none"}
                  />
                  {isActive && (
                    <motion.div
                      className="absolute -inset-2 rounded-full"
                      style={{
                        background: "rgba(14, 165, 164, 0.1)",
                      }}
                      layoutId="activeIndicator"
                    />
                  )}
                </div>
                <span
                  className="transition-colors"
                  style={{
                    color: isActive ? "#0EA5A4" : "#64748B",
                    fontSize: "0.75rem",
                  }}
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
