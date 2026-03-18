"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RevealText from "../ui/RevealText";

const SCRIPTURES = [
  { ref: "Philippians 4:6-7", text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus." },
  { ref: "Matthew 7:7", text: "Ask, and it shall be given you; seek, and ye shall find; knock, and it shall be opened unto you." },
  { ref: "Jeremiah 29:11", text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end." },
  { ref: "Isaiah 41:10", text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee." },
  { ref: "Psalm 34:17", text: "The righteous cry, and the LORD heareth, and delivereth them out of all their troubles." },
  { ref: "Romans 8:28", text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose." },
];

export default function PraySection() {
  const [request, setRequest] = useState("");
  const [name, setName]       = useState("");
  const [phase, setPhase]     = useState<"idle" | "loading" | "done">("idle");
  const [response, setResponse] = useState<{ message: string; scripture: typeof SCRIPTURES[0] } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!request.trim()) return;
    setPhase("loading");

    // Simulate a brief AI "thinking" moment, then return a scripture + encouragement
    await new Promise((r) => setTimeout(r, 1800));

    // Pick a scripture based on keywords in the prayer
    let scripture = SCRIPTURES[Math.floor(Math.random() * SCRIPTURES.length)];
    const lower = request.toLowerCase();
    if (lower.includes("heal") || lower.includes("sick") || lower.includes("health")) scripture = SCRIPTURES[3];
    else if (lower.includes("job") || lower.includes("work") || lower.includes("finance") || lower.includes("money")) scripture = SCRIPTURES[2];
    else if (lower.includes("fear") || lower.includes("anxious") || lower.includes("worry")) scripture = SCRIPTURES[0];
    else if (lower.includes("family") || lower.includes("marriage") || lower.includes("child")) scripture = SCRIPTURES[5];
    else if (lower.includes("purpose") || lower.includes("direction") || lower.includes("confused")) scripture = SCRIPTURES[1];

    setResponse({
      message: `${name ? name + ", your" : "Your"} prayer has been received. Stand on the Word of God — He who promised is faithful. The Lord hears you and His hand is not too short to save.`,
      scripture,
    });
    setPhase("done");
  };

  const reset = () => { setPhase("idle"); setRequest(""); setName(""); setResponse(null); };

  return (
    <section className="bg-mahogany py-28 lg:py-36 grain-overlay overflow-hidden">
      <div className="section-wrap">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-eyebrow justify-center mb-5">
            <span className="text-amber text-xs tracking-[0.22em] uppercase font-medium font-sans">
              Prayer
            </span>
          </p>

          <RevealText
            as="h2"
            className="font-display text-4xl lg:text-5xl font-bold text-parchment leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pray With Rev. Idowu
          </RevealText>

          <div className="w-12 h-px bg-amber mx-auto my-6" />

          <p className="text-parchment/50 font-sans font-light text-base leading-relaxed mb-12">
            Share your prayer request. Receive a Word from Scripture to stand on.
          </p>

          <AnimatePresence mode="wait">
            {phase !== "done" ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 text-left"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.16em] uppercase text-taupe font-sans font-medium">
                    Your Name (optional)
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Tunde"
                    className="bg-espresso/60 border border-amber/10 focus:border-amber/40 px-4 py-3 text-sm text-parchment font-sans font-light placeholder:text-parchment/20 outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.16em] uppercase text-taupe font-sans font-medium">
                    Your Prayer Request *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    placeholder="Share what is on your heart..."
                    className="bg-espresso/60 border border-amber/10 focus:border-amber/40 px-4 py-3 text-sm text-parchment font-sans font-light placeholder:text-parchment/20 outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={phase === "loading"}
                  className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-wait"
                >
                  {phase === "loading" ? (
                    <span className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full border-2 border-mahogany/30 border-t-mahogany animate-spin"
                      />
                      Preparing a Word for you...
                    </span>
                  ) : (
                    "Submit Prayer Request →"
                  )}
                </button>

                <p className="text-[10px] text-parchment/20 font-sans text-center mt-1">
                  Your prayer is seen and heard. God bless you.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="response"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-left"
              >
                {/* Message */}
                <div className="border-l-2 border-amber pl-6 mb-8">
                  <p className="text-parchment/80 font-sans font-light leading-relaxed text-base">
                    {response?.message}
                  </p>
                </div>

                {/* Scripture */}
                <div className="bg-espresso/50 border border-amber/10 p-6 lg:p-8 mb-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-amber font-sans mb-4">
                    A Word for You
                  </p>
                  <blockquote
                    className="text-parchment/80 text-lg leading-relaxed italic mb-4"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    &ldquo;{response?.scripture.text}&rdquo;
                  </blockquote>
                  <p className="text-amber/60 text-sm font-sans tracking-wide">
                    &mdash; {response?.scripture.ref}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={reset} className="btn-outline flex-1 justify-center text-parchment border-parchment/20 hover:border-amber hover:text-amber">
                    Submit Another Request
                  </button>
                  <a
                    href="#contact"
                    onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                    className="btn-primary flex-1 justify-center"
                  >
                    Connect with Rev. Idowu
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
