import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from 'framer-motion';

const QuoteForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsAppNumber = "212777461177";
    const formattedMessage = `
*Demande de Devis*

*Full Name:* ${fullName}
*Email:* ${email}
*Phone Number:* ${phone}
*Message:*
${message}
    `;

    const encodedMessage = encodeURIComponent(formattedMessage.trim());
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="devis" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Demander un Devis
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Prêt à démarrer votre projet ? Remplissez le formulaire ci-dessous et nous vous contacterons dans les plus brefs délais.
          </p>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6">
            <div>
              <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Votre nom complet"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-700">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Votre adresse email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-gray-700">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Votre numéro de téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="mt-2"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-700">Message</Label>
              <Textarea
                id="message"
                placeholder="Décrivez votre projet ou votre question"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="mt-2 min-h-[120px]"
              />
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button 
              type="submit" 
              size="lg"
              className="w-full bg-yellow-500 text-black hover:bg-yellow-600 transition-colors duration-300 ease-in-out transform hover:scale-105"
            >
              Envoyer via WhatsApp
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default QuoteForm;