import { motion } from "motion/react";
import { Mail, Lock, ArrowRight } from "lucide-react";
import { useState } from "react";

export function LoginScreen({
  onLogin,
  onSwitchToSignup,
}: {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}) {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

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
            background: "linear-gradient(135deg, #0EA5A4 0%, #14B8A6 100%)",
            boxShadow: "0 8px 24px rgba(14, 165, 164, 0.3)",
          }}
        >
          <span style={{ fontSize: "2rem" }}>🤖</span>
        </div>
      </motion.div>

      {/* Glassmorphism card */}
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
        <h2 className="text-[#0F172A] mb-2">Welcome Back</h2>
        <p className="text-[#64748B] mb-8">Sign in to continue solving problems</p>

        {/* Email input */}
        <div className="mb-6">
          <label className="block text-[#0F172A] mb-2">Email</label>
          <motion.div
            className="relative rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: "#F8FAFC",
              border: emailFocused
                ? "2px solid transparent"
                : "2px solid transparent",
              backgroundImage: emailFocused
                ? "linear-gradient(white, white), linear-gradient(135deg, #0EA5A4, #14B8A6)"
                : "none",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
            animate={{
              boxShadow: emailFocused
                ? "0 0 24px rgba(14, 165, 164, 0.3)"
                : "0 0 0 rgba(14, 165, 164, 0)",
            }}
          >
            <div className="flex items-center p-4">
              <Mail className="w-5 h-5 text-[#64748B] mr-3" />
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent outline-none text-[#0F172A]"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
            </div>
          </motion.div>
        </div>

        {/* Password input */}
        <div className="mb-6">
          <label className="block text-[#0F172A] mb-2">Password</label>
          <motion.div
            className="relative rounded-2xl overflow-hidden transition-all duration-300"
            style={{
              background: "#F8FAFC",
              border: passwordFocused
                ? "2px solid transparent"
                : "2px solid transparent",
              backgroundImage: passwordFocused
                ? "linear-gradient(white, white), linear-gradient(135deg, #6366F1, #8B5CF6)"
                : "none",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
            animate={{
              boxShadow: passwordFocused
                ? "0 0 24px rgba(99, 102, 241, 0.3)"
                : "0 0 0 rgba(99, 102, 241, 0)",
            }}
          >
            <div className="flex items-center p-4">
              <Lock className="w-5 h-5 text-[#64748B] mr-3" />
              <input
                type="password"
                placeholder="••••••••"
                className="flex-1 bg-transparent outline-none text-[#0F172A]"
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              />
            </div>
          </motion.div>
        </div>

        {/* Forgot password */}
        <button className="text-[#0EA5A4] mb-8 hover:underline">
          Forgot Password?
        </button>

        {/* Login button */}
        <motion.button
          className="w-full rounded-2xl py-4 px-6 text-white flex items-center justify-center gap-2 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0EA5A4 0%, #14B8A6 100%)",
            boxShadow: "0 8px 24px rgba(14, 165, 164, 0.3)",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onLogin}
        >
          <span>Sign In</span>
          <ArrowRight className="w-5 h-5" />
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.button>

        {/* Sign up link */}
        <p className="text-center mt-6 text-[#64748B]">
          Don't have an account?{" "}
          <button
            onClick={onSwitchToSignup}
            className="text-[#6366F1] hover:underline"
          >
            Sign Up
          </button>
        </p>
      </motion.div>
    </div>
  );
}
