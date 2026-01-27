"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 lg:px-24 bg-darkest"
    >
      <div className="mx-auto max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading uppercase tracking-tight text-lightest">
              Let&apos;s Connect
            </h2>
            <p className="text-lg text-lightest/90 leading-relaxed mt-4 max-w-2xl mx-auto">
              Interested in collaborating or just want to say hello?
              I&apos;m always open to discussing new projects and creative ideas.
            </p>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <a
              href="mailto:alyssakpratt@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-accent2 px-6 py-3 font-semibold text-darkest hover:brightness-110 transition-all duration-200 w-full sm:w-auto justify-center"
              aria-label="Send email"
            >
              <Mail size={20} />
              Get In Touch
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border-2 border-alert px-6 py-3 font-semibold text-lightest hover:bg-alert/10 transition-colors duration-200 w-full sm:w-auto justify-center"
              aria-label="Download resume"
            >
              <ExternalLink size={20} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6 justify-center pt-8"
          >
            <a
              href="https://github.com/Aprattcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightest/70 hover:text-accent2 transition-colors duration-200"
              aria-label="GitHub profile"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/alyssakpratt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lightest/70 hover:text-accent2 transition-colors duration-200"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={28} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
