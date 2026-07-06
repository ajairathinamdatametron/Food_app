import React from "react";
import { ProfileProvider } from "./src/Screens/ProfileScreen";
import AppNavigator from "./src/Components/navigation/Appnavigation";

export default function App() {
  return (
    <ProfileProvider>
      <AppNavigator />
    </ProfileProvider>
  );
}