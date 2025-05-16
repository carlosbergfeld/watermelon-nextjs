import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import ObitWriterFormIntroStep from "./ObitWriterFormIntroStep";
import ObitWriterFormDetailsStep from "./ObitWriterFormDetailsStep";
import { useState } from "react";

export type FormData = {
  intro: string;
  lastName: string;
};

const steps = ["intro", "details"];

export default function ObitWriterForm() {
  const [step, setStep] = useState("intro");
  const form = useForm<FormData>({
    defaultValues: { intro: "", lastName: "" },
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
    if (step === "intro") setStep("details");
  }

  return (
    <Form {...form}>
      <form
        aria-labelledby="loved-one-form-title"
        className="space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <label htmlFor="obituary" className="sr-only">
          Obituary text
        </label>

        {step === "intro" && <ObitWriterFormIntroStep />}
        {step === "details" && <ObitWriterFormDetailsStep />}
      </form>
    </Form>
  );
}
