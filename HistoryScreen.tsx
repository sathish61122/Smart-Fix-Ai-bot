import { motion } from "motion/react";
import { Clock, PlayCircle, Home as HomeIcon } from "lucide-react";

export function HistoryScreen({ onBack }: { onBack: () => void }) {
  const history = [
    {
      title: "Battery Not Charging Issue",
      date: "2 hours ago",
      category: "Laptop",
      status: "Solved",
      icon: "💻",
      gradient: "from-[#0EA5A4] to-[#14B8A6]",
    },
    {
      title: "WiFi Connection Problem",
      date: "Yesterday",
      category: "Network",
      status: "In Progress",
      icon: "📡",
      gradient: "from-[#6366F1] to-[#8B5CF6]",
    },
    {
      title: "Screen Flickering",
      date: "2 days ago",
      category: "Mobile",
      status: "Solved",
      icon: "📱",
      gradient: "from-[#F59E0B] to-[#F97316]",
    },
    {
      title: "Printer Not Responding",
      date: "3 days ago",
      category: "Hardware",
      status: "Solved",
      icon: "🖨️",
      gradient: "from-[#22C55E] to-[#4ADE80]",
    },
    {
      title: "Game Crashes on Startup",
      date: "5 days ago",
      category: "Gaming",
      status: "Solved",
      icon: "🎮",
      gradient: "from-[#EC4899] to-[#F472B6]",
    },
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
          className="flex items-center gap-3 mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <button onClick={onBack}>
            <HomeIcon className="w-6 h-6 text-[#64748B]" />
          </button>
          <div>
            <h1 className="text-[#0F172A]">Solution History</h1>
            <p className="text-[#64748B]">Your past problems & solutions</p>
          </div>
        </motion.div>

        {/* History list */}
        <div className="space-y-4">
          {history.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-3xl overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 4 }}
            >
              <div className="flex gap-4 p-5">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.gradient}`}
                >
                  <span className="text-2xl">{item.icon}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-[#0F172A] truncate">{item.title}</h3>
                    {item.status === "Solved" && (
                      <span
                        className="px-3 py-1 rounded-full text-white flex-shrink-0"
                        style={{
                          background: "linear-gradient(135deg, #22C55E, #4ADE80)",
                          fontSize: "0.75rem",
                        }}
                      >
                        Video Ready
                      </span>
                    )}
                  </div>
                  <p className="text-[#64748B] mb-2">{item.category}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-[#64748B]">
                      <Clock className="w-4 h-4" />
                      <span style={{ fontSize: "0.875rem" }}>{item.date}</span>
                    </div>
                    {item.status === "Solved" && (
                      <button className="flex items-center gap-1 text-[#6366F1]">
                        <PlayCircle className="w-4 h-4" />
                        <span style={{ fontSize: "0.875rem" }}>Watch</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Hover effect bar */}
              <motion.div
                className="h-1"
                style={{
                  background: `linear-gradient(90deg, ${item.gradient.replace("from-", "").replace("to-", "")})`,
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
