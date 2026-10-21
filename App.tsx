import { useState, useEffect } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { LoginScreen } from "./components/LoginScreen";
import { SignupScreen } from "./components/SignupScreen";
import { HomeScreen } from "./components/HomeScreen";
import { ProcessingScreen } from "./components/ProcessingScreen";
import { SolutionScreen } from "./components/SolutionScreen";
import { HistoryScreen } from "./components/HistoryScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { BottomNav } from "./components/BottomNav";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<string>("splash");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    // Auto-navigate from splash to login after 3 seconds
    if (currentScreen === "splash") {
      const timer = setTimeout(() => {
        setCurrentScreen("login");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  useEffect(() => {
    // Show nav for main app screens
    const navScreens = ["home", "history", "profile", "solution"];
    setShowNav(navScreens.includes(currentScreen));
  }, [currentScreen]);

  const handleGenerate = () => {
    setCurrentScreen("processing");
    setTimeout(() => {
      setCurrentScreen("solution");
    }, 3000);
  };

  return (
    <div className="size-full relative">
      {currentScreen === "splash" && (
        <SplashScreen onComplete={() => setCurrentScreen("login")} />
      )}

      {currentScreen === "login" && (
        <LoginScreen
          onLogin={() => setCurrentScreen("home")}
          onSwitchToSignup={() => setCurrentScreen("signup")}
        />
      )}

      {currentScreen === "signup" && (
        <SignupScreen
          onSignup={() => setCurrentScreen("home")}
          onSwitchToLogin={() => setCurrentScreen("login")}
        />
      )}

      {currentScreen === "home" && <HomeScreen onGenerate={handleGenerate} />}

      {currentScreen === "processing" && <ProcessingScreen />}

      {currentScreen === "solution" && (
        <SolutionScreen onBack={() => setCurrentScreen("home")} />
      )}

      {currentScreen === "history" && (
        <HistoryScreen onBack={() => setCurrentScreen("home")} />
      )}

      {currentScreen === "profile" && (
        <ProfileScreen onBack={() => setCurrentScreen("home")} />
      )}

      {showNav && (
        <BottomNav
          active={currentScreen}
          onChange={(screen) => {
            if (screen === "ai") {
              handleGenerate();
            } else {
              setCurrentScreen(screen);
            }
          }}
        />
      )}
    </div>
  );
}