import ContactForm from "@/components/contact-form";

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl pt-6">
      <h1 className="text-gradient mb-4 text-4xl font-bold tracking-tight">
        Let&apos;s get in touch
      </h1>
      <p>
        Have any question or idea, or just wanna talk a little bit? Reach out!
      </p>

      <ContactForm />
    </div>
  );
}
