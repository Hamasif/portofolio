import { motion } from "framer-motion";
import { contacts } from "../../data/contact";
import ContactCard from "../ui/ContactCard";
import SectionBackground from "../ui/SectionBackground";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      <SectionBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-5xl font-bold text-white">
            Contact <span className="text-[#00F5C3]">Me</span>
          </h2>

          <p className="mt-5 text-zinc-400">
            Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="
            rounded-[30px]
            border
            border-zinc-800
            bg-zinc-900/60
            p-8
            backdrop-blur-xl
            "
          >

            <h3 className="mb-8 text-2xl font-bold text-white">
              Contact Information
            </h3>

            <div className="space-y-5">

              {contacts.map((item) => (
                <ContactCard
                  key={item.title}
                  {...item}
                />
              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="
            rounded-[30px]
            border
            border-zinc-800
            bg-zinc-900/60
            p-8
            backdrop-blur-xl
            "
          >

            <h3 className="mb-8 text-2xl font-bold text-white">
              Send Message
            </h3>

            <div className="grid gap-6">

              <input
                placeholder="Your Name"
                className="
                rounded-xl
                border
                border-zinc-700
                bg-zinc-950
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-[#00F5C3]
                "
              />

              <input
                placeholder="Your Email"
                className="
                rounded-xl
                border
                border-zinc-700
                bg-zinc-950
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-[#00F5C3]
                "
              />

              <input
                placeholder="Subject"
                className="
                rounded-xl
                border
                border-zinc-700
                bg-zinc-950
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-[#00F5C3]
                "
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                className="
                resize-none
                rounded-xl
                border
                border-zinc-700
                bg-zinc-950
                px-5
                py-4
                text-white
                outline-none
                transition
                focus:border-[#00F5C3]
                "
              />

              <button
                type="submit"
                className="
                rounded-xl
                bg-[#00F5C3]
                py-4
                font-semibold
                text-black
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_40px_rgba(0,245,195,.4)]
                "
              >
                Send Message
              </button>

            </div>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;