import { Layout } from "~/components/layout";
import { useState } from "react";
import { FormField } from "~/components/form-field";
export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const [action, setAction] = useState("login");

  // export const action = async ()=> {
    
  // }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFormData({
      ...formData,
      [field]: event.target.value,
    });
  };
  return (
    <Layout>
      <h2 className="text-yellow-300 font-extrabold text-5xl">
        <button
          onClick={() => setAction(action == "login" ? "register" : "login")}
          className="absolute top-8 right-8 rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
        >
          {action === "login" ? "Sign Up" : "Sign In"}
        </button>
        <div className="h-full justify-center items-center flex flex-col gap-y-4">
          <h2 className="text-5xl font-extrabold text-yellow-300">
            Welcome to Kudos!
          </h2>
          <p className="font-semibold text-slate-300">
            {action === "login"
              ? "Log In To Give Some Praise!"
              : "Sign up to get started"}
          </p>
          <form method="post" className="rounded-2xl bg-gray-200 p-6 w-96">
            <FormField
              htmlFor="email"
              label="Email"
              onChange={(e) => handleInputChange(e, "email")}
              value={formData.email}
            />
            <FormField
              htmlFor="password"
              label="Password"
              onChange={(e) => handleInputChange(e, "email")}
              value={formData.password}
            />
            {action === "register" && (
              <>
                <FormField
                  htmlFor="firstName"
                  label="First Name"
                  onChange={(e) => handleInputChange(e, "firstName")}
                  value={formData.firstName}
                />
                <FormField
                  htmlFor="lastName"
                  label="Last Name"
                  onChange={(e) => handleInputChange(e, "lastName")}
                  value={formData.lastName}
                />
              </>
            )}
            <div className="w-full text-center">
              <input
                name="_action"
                type="submit"
                className="rounded-xl mt-2 bg-yellow-300 px-3 py-2 text-blue-600 font-semibold transition duration-300 ease-in-out hover:bg-yellow-400 hover:-translate-y-1"
                value={action === "login" ? "login" : "sign up"}
              />
            </div>
          </form>
        </div>
      </h2>
    </Layout>
  );
}
