import { motion } from "motion/react";
import {
  CheckCircle2,
  Play,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  AlertCircle,
  Home as HomeIcon,
} from "lucide-react";

export function SolutionScreen({ onBack }: { onBack: () => void }) {
  const steps = [
    {
      title: "Turn off your device",
      description: "Press and hold the power button for 3 seconds",
      icon: "🔌",
    },
    {
      title: "Remove the battery",
      description: "Carefully remove the battery from the device",
      icon: "🔋",
    },
    {
      title: "Wait 30 seconds",
      description: "Let the device discharge completely",
      icon: "⏱️",
    },
    {
      title: "Reinsert battery",
      description: "Place the battery back into the device",
      icon: "✅",
    },
    {
      title: "Power on",
      description: "Press the power button to restart",
      icon: "⚡",
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
            <h1 className="text-[#0F172A]">Solution Found</h1>
            <p className="text-[#64748B]">Follow these steps carefully</p>
          </div>
        </motion.div>

        {/* Success banner */}
        <motion.div
          className="rounded-3xl p-5 mb-6"
          style={{
            background: "linear-gradient(135deg, #22C55E 0%, #4ADE80 100%)",
            boxShadow: "0 8px 24px rgba(34, 197, 94, 0.3)",
          }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 text-white">
            <CheckCircle2 className="w-8 h-8" />
            <div>
              <h3>Battery Not Charging Issue</h3>
              <p className="text-white/90">Solution confidence: 95%</p>
            </div>
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-4 mb-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-5"
              style={{
                background: "white",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(14, 165, 164, 0.1)",
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02, x: 4 }}
            >
              <div className="flex gap-4">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #0EA5A4 0%, #14B8A6 100%)",
                  }}
                >
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#64748B]">Step {index + 1}</span>
                  </div>
                  <h4 className="text-[#0F172A] mb-1">{step.title}</h4>
                  <p className="text-[#64748B]">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video card */}
        <motion.div
          className="rounded-3xl overflow-hidden mb-6"
          style={{
            background: "white",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div
            className="relative h-48 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            }}
          >
            <motion.button
              className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Play className="w-8 h-8 text-[#6366F1] ml-1" fill="currentColor" />
            </motion.button>
            <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
              2:45
            </div>
          </div>
          <div className="p-5">
            <h3 className="text-[#0F172A] mb-2">Watch Guided Fix</h3>
            <p className="text-[#64748B]">
              Step-by-step video tutorial for this solution
            </p>
          </div>
        </motion.div>

        {/* Safety note */}
        <motion.div
          className="rounded-2xl p-4 mb-6"
          style={{
            background: "linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)",
            border: "1px solid #F59E0B",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="flex gap-3">
            <AlertCircle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-[#92400E] mb-1">Safety Note</h4>
              <p className="text-[#92400E]">
                Always disconnect from power before removing the battery. Handle
                with care.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Feedback section */}
        <motion.div
          className="rounded-3xl p-6"
          style={{
            background: "white",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.06)",
          }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <h3 className="text-[#0F172A] mb-4">Was this helpful?</h3>
          <div className="flex gap-3 mb-4">
            <motion.button
              className="flex-1 rounded-2xl py-3 px-4 flex items-center justify-center gap-2"
              style={{
                background: "linear-gradient(135deg, #22C55E 0%, #4ADE80 100%)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThumbsUp className="w-5 h-5 text-white" />
              <span className="text-white">Helpful</span>
            </motion.button>
            <motion.button
              className="flex-1 rounded-2xl py-3 px-4 flex items-center justify-center gap-2 bg-[#F8FAFC]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ThumbsDown className="w-5 h-5 text-[#64748B]" />
              <span className="text-[#64748B]">Not Helpful</span>
            </motion.button>
          </div>
          <motion.button
            className="w-full rounded-2xl py-3 px-4 flex items-center justify-center gap-2"
            style={{
              background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span className="text-white">Ask Follow-up Question</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
