"use client";

import { useForm } from "react-hook-form";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact form:", data);
    reset();
  };

  return (
    <section id="contact" className="bg-marg-bgSoft py-14 sm:py-16">
      <Container className="grid gap-10 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <p className="text-3xl border-b border-b-primary inline-block font-serif  text-primary">Have a question?</p>

          <h3 className="text-3xl font-sans font-light text-black">
            <span className="font-bold">Write to us</span> and <br />
            our <span className="font-bold">team</span> will <br />
            respond promptly.
          </h3>

          <div className="space-y-4 text-lg font-sans font-light text-black">

            {/* LOCATION */}
            <div className="flex items-start gap-3">
              <span className="mt-0.5 text-primary">
                <FiMapPin size={20} />
              </span>

              <Link
                href="https://www.google.com/maps/place/Shenstone+Park,+Harrington+Road,+Chetpet,+Chennai"
                target="_blank"
                className="hover:text-primary transition-colors"
              >
                Shenstone Park, No. 7 Harrington Road, <br />
                Chetpet (Lady Andal Gate 4) <br />
                Chennai - 600031
              </Link>
            </div>

            {/* PHONE NUMBERS */}
            <div className="flex items-center gap-3">
              <span className="text-primary">
                <FiPhone size={20} />
              </span>

              <div className="flex flex-col leading-tight">
                <Link
                  href="tel:+919500081900"
                  className="hover:text-primary transition"
                >
                  +91 95000 81900
                </Link>
                <Link
                  href="tel:+917358438454"
                  className="hover:text-primary transition"
                >
                  +91 73584 38454
                </Link>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <span className="text-primary">
                <FiMail size={20} />
              </span>

              <Link
                href="mailto:contact@ohMaRgazhi.in"
                className="hover:text-primary transition"
              >
                contact@ohMaRgazhi.in
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

          {/* Name */}
          <div className="space-y-1 text-xl">
            <label className="block font-semibold text-marg-bg font-serif">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full border-b border-marg-border bg-transparent px-0 py-2 text-lg text-marg-bg font-sans font-light outline-none placeholder:text-marg-text/60 focus:border-secondary"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Mobile */}
          <div className="space-y-1 text-xl">
            <label className="block font-semibold text-marg-bg font-serif">Mobile Number</label>
            <input
              type="tel"
              placeholder="Enter Your Mobile Number"
              className="w-full border-b border-marg-border bg-transparent px-0 py-2 text-lg text-marg-bg font-sans font-light outline-none placeholder:text-marg-text/60 focus:border-secondary"
              {...register("mobile", {
                required: "Mobile number is required",
                minLength: { value: 10, message: "Enter a valid number" },
              })}
            />
            {errors.mobile && <p className="text-xs text-red-500">{errors.mobile.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-1 text-xl">
            <label className="block font-semibold text-marg-bg font-serif">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full border-b border-marg-border bg-transparent px-0 py-2 text-lg text-marg-bg font-sans font-light outline-none placeholder:text-marg-text/60 focus:border-secondary"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Message */}
          <div className="space-y-1 text-xl">
            <label className="block font-semibold text-marg-bg font-serif">Message</label>
            <textarea
              rows={3}
              placeholder="Enter Your Message"
              className="w-full border-b border-marg-border bg-transparent px-0 py-2 text-lg text-marg-bg font-sans font-light outline-none placeholder:text-marg-text/60 focus:border-secondary resize-none"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="mt-2 px-10 text-lg disabled:opacity-70">
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Container>
    </section>
  );
}
