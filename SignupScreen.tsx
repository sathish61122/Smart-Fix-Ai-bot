import { motion } from "motion/react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export function SignupScreen({
  onSignup,
  onSwitchToLogin,
}: {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}) {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-6"
      style={{
        background: "linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 50%, #F8FAFC 100%)",
      }}
    >
      {/* Logo */}
      <motion.div
        className="mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
          }}
        >
          <span style={{ fontSize: "2rem" }}>🤖</span>
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        className="w-full max-w-md rounded-3xl p-8"
        style={{
          background: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-[#0F172A] mb-2">Create Account</h2>
        <p className="text-[#64748B] mb-8">Join FixAI and start solving</p>

        {/* Name input */}
        <div className="mb-6">
          <label className="block text-[#0F172A] mb-2">Full Name</label>
          <div
            className="flex items-center rounded-2xl p-4"
            style={{ background: "#F8FAFC" }}
          >
            <User className="w-5 h-5 text-[#64748B] mr-3" />
            <input
              type="text"
              placeholder="John Doe"
              className="flex-1 bg-transparent outline-none text-[#0F172A]"
            />
          </div>
        </div>

        {/* Email input */}
        <div className="mb-6">
          <label className="block text-[#0F172A] mb-2">Email</label>
          <div
            className="flex items-center rounded-2xl p-4"
            style={{ background: "#F8FAFC" }}
          >
            <Mail className="w-5 h-5 text-[#64748B] mr-3" />
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none text-[#0F172A]"
            />
          </div>
        </div>

        {/* Password input */}
        <div className="mb-8">
          <label className="block text-[#0F172A] mb-2">Password</label>
          <div
            className="flex items-center rounded-2xl p-4"
            style={{ background: "#F8FAFC" }}
          >
            <Lock className="w-5 h-5 text-[#64748B] mr-3" />
            <input
              type="password"
              placeholder="••••••••"
              className="flex-1 bg-transparent outline-none text-[#0F172A]"
            />
          </div>
        </div>

        {/* Sign up button */}
        <motion.button
          className="w-full rounded-2xl py-4 px-6 text-white flex items-center justify-center gap-2"
          style={{
            background: "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
            boxShadow: "0 8px 24px rgba(99, 102, 241, 0.3)",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onSignup}
        >
          <span>Create Account</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Login link */}
        <p className="text-center mt-6 text-[#64748B]">
          Already have an account?{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-[#0EA5A4] hover:underline"
          >
            Sign In
          </button>
        </p>
      </motion.div>
    </div>
  );
}
