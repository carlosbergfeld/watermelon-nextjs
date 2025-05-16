import { useFormContext } from "react-hook-form";
import { type FormData } from "@/components/ObitWriterForm";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ObitWriterFormIntroStep() {
  const {
    control,
    formState: { isValid },
  } = useFormContext<FormData>();

  return (
    <div>
      <h1 className="text-2xl font-semibold leading-tight md:text-3xl pt-2">
        Tell us about your loved one
      </h1>

      <Card className="rounded-lg border-3 border-[#cbaa73] shadow-none gap-0 pb-0 mt-8">
        <CardContent className="flex flex-col p-0">
          <FormField
            control={control}
            name="intro"
            rules={{
              required: true,
            }}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Paste the obituary here, as well as any additional memories or thoughts you want to include."
                    className="min-h-[16rem] resize-none border-none p-4 focus-visible:ring-0"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </CardContent>
        <CardFooter className="justify-center md:justify-end bg-background bg-[rgb(235,228,212)] rounded-b-lg py-6">
          <div className="flex justify-center w-full md:w-auto">
            <Button
              type="submit"
              disabled={!isValid}
              className="w-full max-w-sm justify-center"
            >
              Continue
              <div className="h-4 w-4">
                <svg height="100%" viewBox="0 0 24 24" width="20px">
                  <g fill="none" fillRule="evenodd">
                    <rect width="24" height="24"></rect>
                    <path
                      d="M9.52229299,19.2675159 C9.35244161,19.0976645 9.26751592,18.8747346 9.26751592,18.5987261 C9.26751592,18.3227176 9.35244161,18.0997877 9.52229299,17.9299363 L16.7197452,10.7324841 L0.955414013,10.7324841 C0.67940552,10.7324841 0.451167728,10.6422505 0.270700637,10.4617834 C0.0902335456,10.2813163 0,10.0530786 0,9.77707006 C0,9.50106157 0.0902335456,9.27282378 0.270700637,9.09235669 C0.451167728,8.9118896 0.67940552,8.82165605 0.955414013,8.82165605 L16.7197452,8.82165605 L9.52229299,1.62420382 C9.35244161,1.45435244 9.26751592,1.22611465 9.26751592,0.939490446 C9.26751592,0.652866242 9.35244161,0.42462845 9.52229299,0.25477707 C9.69214437,0.08492569 9.91507431,-1.13143748e-15 10.1910828,-1.13143748e-15 C10.4670913,-1.13143748e-15 10.6900212,0.08492569 10.8598726,0.25477707 L19.7133758,9.10828025 C19.8195329,9.21443737 19.8938429,9.32059448 19.9363057,9.42675159 C19.9787686,9.5329087 20,9.64968153 20,9.77707006 C20,9.88322718 19.9787686,9.99469214 19.9363057,10.111465 C19.8938429,10.2282378 19.8195329,10.3397028 19.7133758,10.4458599 L10.8598726,19.2993631 C10.6900212,19.4692144 10.4670913,19.5488323 10.1910828,19.5382166 C9.91507431,19.5276008 9.69214437,19.4373673 9.52229299,19.2675159 L9.52229299,19.2675159 Z"
                      fill="#7F898E"
                      transform="translate(2.2 2.2)"
                    ></path>
                  </g>
                </svg>
              </div>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
