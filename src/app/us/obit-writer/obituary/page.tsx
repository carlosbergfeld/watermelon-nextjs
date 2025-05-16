"use client";

import ObitWriterHeader from "@/components/ObitWriterHeader";
import ObitWriterForm from "@/components/ObitWriterForm";

export default function ObitWriter() {
  return (
    <div>
      <ObitWriterHeader />

      <main className="mx-auto w-full max-w-2xl px-4 py-10 md:py-16">
        <header>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Obit Writer
          </p>
        </header>

        <ObitWriterForm />
      </main>
    </div>
  );
}
