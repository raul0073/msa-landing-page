
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactSchema } from "./contactSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
function ContactForm() {
    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
          name: "",
          email: "",
          phone: "",
          message: "",
        },
      })
      function onSubmit(values: z.infer<typeof contactSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }




      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[90%] mt-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <Input
					placeholder="your name"
					className="rounded-2xl text-primary border-white/15"
                    {...field}
				/>
                  </FormControl>
                     <FormMessage className="pl-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <Input
					placeholder="your email"
					className="rounded-2xl  text-primary border-white/15"
                    {...field}
				/>
                  </FormControl>
                     <FormMessage className="pl-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <Input
					placeholder="your phone"
					className="rounded-2xl  text-primary border-white/15"
                    {...field}
				/>
                  </FormControl>
                     <FormMessage className="pl-2" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                  <Textarea
					placeholder="Hey there! I was very impressed with your work..."
					className="rounded-2xl  text-primary border-white/15"
                    {...field}
				/>
                  </FormControl>
                  <FormMessage className="pl-2" />
                </FormItem>
              )}
            />
           <div className="w-full flex justify-end items-center pt-4">
           <Button type="submit" className="rounded-full px-6">Submit</Button>
           </div>
          </form>
        </Form>
      )
    }
	


export default ContactForm;
