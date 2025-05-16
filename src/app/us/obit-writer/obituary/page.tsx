"use client";

import ObitWriterHeader from "@/components/ObitWriterHeader";
import ObitWriterForm from "@/components/ObitWriterForm";

export default function ObitWriter() {
  return (
    <div>
      <ObitWriterHeader />

      <main className="mx-auto w-full max-w-2xl px-4 py-10 md:py-16">
        <header className="mb-8 space-y-2">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Obit Writer
          </p>
          <h1 className="text-2xl font-semibold leading-tight md:text-3xl">
            Tell us about your loved one
          </h1>
        </header>

        <ObitWriterForm />
      </main>
    </div>
  );
}
