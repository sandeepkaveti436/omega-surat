"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import {
  appointmentSchema,
  AppointmentFormValues,
} from "@/schemas/appointment.schema";
import { createAppointment } from "@/lib/api/appointment";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function RequestForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      department: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createAppointment,
    onSuccess: () => {
      toast.success("Appointment booked successfully");
      reset();
    },
    onError: () => {
      toast.error("Failed to book appointment");
    },
  });

  const onSubmit = (data: AppointmentFormValues) => {
    mutation.mutate(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full border rounded-md px-4 py-3 text-sm"
        />
        <input
          {...register("contact")}
          placeholder="Contact"
          className="w-full border rounded-md px-4 py-3 text-sm"
        />
      </div>

      {/* Errors */}
      <p className="text-xs text-red-500">{errors.name?.message}</p>
      <p className="text-xs text-red-500">{errors.contact?.message}</p>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          {...register("email")}
          placeholder="Email ID"
          className="w-full border rounded-md px-4 py-3 text-sm"
        />

        <div className="relative">
          <select
            {...register("department")}
            className="w-full border rounded-md px-4 py-3 text-sm text-gray-500 "
          >
            <option value="">Select Departments</option>
            <option value="Oncology">Oncology</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology">Neurology</option>
          </select>
        </div>
      </div>

      <p className="text-xs text-red-500">{errors.department?.message}</p>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Preferred Date
          </label>
          <input
            type="date"
            {...register("date")}
            className="w-full border rounded-md px-4 py-3 text-sm"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-gray-600">
            Preferred Time
          </label>
          <input
            type="time"
            {...register("time")}
            className="w-full border rounded-md px-4 py-3 text-sm"
          />
        </div>
      </div>

      {/* Textarea */}
      <textarea
        {...register("message")}
        placeholder="Your Message"
        rows={4}
        className="w-full border rounded-md px-4 py-3 text-sm resize-none"
      />

      {/* Button */}
      <button
        type="submit"
        disabled={mutation.isPending}
        className="
    group
    w-full
    flex items-center justify-center gap-2
    bg-[#E86C1F] text-white font-semibold
    py-3 rounded-md
  "
      >
        <span>{mutation.isPending ? "Submitting..." : "Make Appointment"}</span>

        <ArrowUpRight
          size={20}
          className="transition-transform duration-300 ease-out
               group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>
    </form>
  );
}
