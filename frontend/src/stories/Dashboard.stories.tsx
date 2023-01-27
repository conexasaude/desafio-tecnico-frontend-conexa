import { Meta } from "@storybook/react";
import { useAuth } from "../context/auth";
import { Dashboard } from "../pages/Dashboard";

export default {
  title: "Dashboard",
  component: Dashboard,
} as Meta;

export const Default = ({ email, password }) => {
  useAuth().login({ email, password });
  return (
    <div className="bg-secondary">
      <Dashboard />
    </div>
  );
};
Default.args = { email: "gandalf@mail.com", password: "123456" };
