"use client"

import LayoutWrapper from "@/components/layout-wrapper"
import ScrollReveal from "@/components/scroll-reveal"
import { Heart, Zap, Users, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState(50)

  const donationOptions = [
    { amount: 25, impact: "Provide malaria prevention kit for one child" },
    { amount: 50, impact: "Sponsor nutritious meals for a child for one month" },
    { amount: 100, impact: "Support digital literacy training for 5 children" },
    { amount: 250, impact: "Fund prenatal care for one expecting mother" },
    { amount: 500, impact: "Establish a health monitoring station" },
    { amount: 1000, impact: "Support one child's full annual care program" },
  ]

  return (
    <LayoutWrapper>
      <div className="min-h-screen pt-12 pb-24 md:pb-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <ScrollReveal animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                  Make a Difference Today
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Your generosity directly impacts the lives of vulnerable children. Every donation helps us provide
                  healthcare, nutrition, education, and hope.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal animation="fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Choose Your Impact</h2>
              </ScrollReveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
                {donationOptions.map((option) => (
                  <ScrollReveal key={option.amount} animation="scale-in" delay={0}>
                    <button
                      onClick={() => setSelectedAmount(option.amount)}
                      className={`w-full p-6 rounded-xl border-2 transition-all ${
                        selectedAmount === option.amount
                          ? "border-primary bg-primary/5 shadow-lg"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <p className="text-3xl font-bold text-primary mb-2">${option.amount}</p>
                      <p className="text-sm text-muted-foreground">{option.impact}</p>
                    </button>
                  </ScrollReveal>
                ))}
              </div>

              {/* Donation Form */}
              <ScrollReveal animation="fade-in-up">
                <div className="bg-card rounded-xl p-8 border border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Donation Details</h3>

                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Donation Amount</label>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">$</span>
                        <input
                          type="number"
                          value={selectedAmount}
                          onChange={(e) => setSelectedAmount(Number(e.target.value))}
                          className="flex-1 px-4 py-3 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-3">Donation Type</label>
                      <div className="space-y-3">
                        {["One-time", "Monthly", "Quarterly", "Annually"].map((type) => (
                          <label key={type} className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="type" defaultChecked={type === "One-time"} className="w-4 h-4" />
                            <span className="text-foreground">{type} Donation</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <input type="checkbox" id="receipt" className="w-4 h-4" defaultChecked />
                      <label htmlFor="receipt" className="text-sm text-foreground">
                        Send me a donation receipt
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all shadow-lg"
                    >
                      Donate ${selectedAmount}
                    </button>

                    <div className="mt-8 pt-6 border-t border-border">
                      <p className="text-sm font-semibold text-foreground mb-4 text-center">Choose Payment Method</p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <a
                          href={`https://buy.stripe.com/donate?amount=${selectedAmount * 100}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors text-center"
                        >
                          Stripe
                        </a>
                        <a
                          href={`https://www.paypal.com/donate?hosted_button_id=YOUR_BUTTON_ID`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-blue-500 text-white rounded-lg text-xs font-semibold hover:bg-blue-600 transition-colors text-center"
                        >
                          PayPal
                        </a>
                        <a
                          href={`https://checkout.flutterwave.com/pay/${selectedAmount}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-purple-600 text-white rounded-lg text-xs font-semibold hover:bg-purple-700 transition-colors text-center"
                        >
                          Flutterwave
                        </a>
                        <a
                          href="https://www.globalgiving.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-green-600 text-white rounded-lg text-xs font-semibold hover:bg-green-700 transition-colors text-center"
                        >
                          GlobalGiving
                        </a>
                        <a
                          href="https://www.gofundme.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-cyan-600 text-white rounded-lg text-xs font-semibold hover:bg-cyan-700 transition-colors text-center"
                        >
                          GoFundMe
                        </a>
                        <a
                          href="https://www.givebutter.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 bg-orange-600 text-white rounded-lg text-xs font-semibold hover:bg-orange-700 transition-colors text-center"
                        >
                          GiveButter
                        </a>
                      </div>
                      <p className="text-xs text-muted-foreground text-center mt-4">
                        Multiple secure payment options available. Choose your preferred payment gateway above.
                      </p>
                    </div>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-muted/30 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Heart, label: "Lives Saved", value: "2000+" },
                { icon: TrendingUp, label: "Growth Rate", value: "150%" },
                { icon: Users, label: "Volunteers", value: "150+" },
                { icon: Zap, label: "Programs", value: "12+" },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <ScrollReveal key={index} animation="scale-in" delay={index * 50}>
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-2xl font-bold text-primary mb-2">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <ScrollReveal animation="fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
            </ScrollReveal>

            <div className="space-y-4">
              {[
                {
                  q: "Is my donation tax-deductible?",
                  a: "Yes! CareLife Foundation is a registered nonprofit organization. You will receive a donation receipt for tax purposes.",
                },
                {
                  q: "How are donations used?",
                  a: "90% of donations directly support our programs. The remaining 10% covers administration and operational costs to ensure sustainable impact.",
                },
                {
                  q: "Can I cancel my recurring donation?",
                  a: "Absolutely. You can cancel anytime through your account settings or by contacting our support team.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept credit cards, debit cards, bank transfers, and digital payment platforms for your convenience.",
                },
              ].map((faq, index) => (
                <ScrollReveal key={index} animation="fade-in-up" delay={index * 50}>
                  <details className="group bg-card rounded-lg border border-border p-6 cursor-pointer hover:border-primary/50 transition-colors">
                    <summary className="flex items-center justify-between font-semibold text-foreground">
                      {faq.q}
                      <span className="transition-transform group-open:rotate-180">↓</span>
                    </summary>
                    <p className="mt-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    </LayoutWrapper>
  )
}
