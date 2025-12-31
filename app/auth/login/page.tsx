"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields!");
      return;
    }
    // Handle registration logic here
    console.log("logging in user:", formData);
    toast.success("Logged in successfully!");
  };
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <section className="max-w-lg w-full space-y-6 p-3">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Login Page
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="h-12 pl-10 bg-card text-base border-border/50 focus:border-primary"
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="h-12 pl-10 bg-card text-base border-border/50 focus:border-primary"
          />

          <div className=" w-full flex justify-end">
            {" "}
            <Button
              type="submit"
              className="h-12 bg-accent text-accent-foreground hover:bg-accent/90 px-8"
            >
              Log In
            </Button>
          </div>
        </form>
      </section>
    </div>
  );
}
