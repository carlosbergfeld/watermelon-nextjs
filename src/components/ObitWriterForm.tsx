import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import ObitWriterFormIntroStep from "./ObitWriterFormIntroStep";

export type FormData = {
  intro: string;
};

export default function ObitWriterForm() {
  const form = useForm<FormData>({
    defaultValues: { intro: "" },
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
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

        <ObitWriterFormIntroStep />
      </form>
    </Form>
  );
}
