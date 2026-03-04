import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from 'framer-motion';
import {  
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Shield, 
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const savedFormData = sessionStorage.getItem('quoteFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => {
      const newFormData = { ...prev, [field]: value };
      sessionStorage.setItem('quoteFormData', JSON.stringify(newFormData));
      return newFormData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate brief loading for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const whatsAppNumber = "212661259104";
    const formattedMessage = `
*Demande de Devis - ${formData.fullName}*

*Nom complet:* ${formData.fullName}
*Email:* ${formData.email}
*Téléphone:* ${formData.phone}

*Message:*
${formData.message}
    `;

    const encodedMessage = encodeURIComponent(formattedMessage.trim());
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitting(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: ''
    });
    sessionStorage.removeItem('quoteFormData');
  };

  const inputClasses = "h-14 bg-gray-50/50 border-gray-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl text-base transition-all duration-300 placeholder:text-gray-400";
  
  const labelClasses = "text-gray-700 font-semibold text-sm uppercase tracking-wide flex items-center gap-2 mb-2";

  return (
    <section id="QuoteForm" className="py-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-amber-200/5 to-blue-200/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/25 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Devis Gratuit & Sans Engagement
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Démarrons votre projet{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              ensemble
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Racontez-nous votre vision. Notre équipe d'experts vous répondra 
            avec une proposition sur mesure sous 24 heures.
          </p>
        </motion.div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-900/5 overflow-hidden border border-gray-100">
            {/* Progress Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 px-8 py-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-gray-900" />
                    </div>
                    Nouvelle demande de devis
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm">
                    Étape 1 sur 1 • Remplissage du formulaire
                  </p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-amber-400">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm font-medium">2 min</span>
                </div>
              </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Full Name */}
                <motion.div 
                  className="space-y-2"
                  animate={{ scale: focusedField === 'fullName' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="fullName" className={labelClasses}>
                    <User className="w-4 h-4 text-amber-500" />
                    Nom complet
                  </Label>
                  <div className="relative">
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Jean Dupont"
                      value={formData.fullName}
                      onChange={(e) => handleChange('fullName', e.target.value)}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses}
                    />
                    <AnimatePresence>
                      {formData.fullName && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div 
                  className="space-y-2"
                  animate={{ scale: focusedField === 'email' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="email" className={labelClasses}>
                    <Mail className="w-4 h-4 text-amber-500" />
                    Adresse email
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="jean.dupont@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses}
                    />
                    <AnimatePresence>
                      {formData.email && formData.email.includes('@') && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          className="absolute right-4 top-1/2 -translate-y-1/2"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* Phone - Full Width on Mobile, Half on Desktop */}
                <motion.div 
                  className="space-y-2 md:col-span-2"
                  animate={{ scale: focusedField === 'phone' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="phone" className={labelClasses}>
                    <Phone className="w-4 h-4 text-amber-500" />
                    Numéro de téléphone
                  </Label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 border-r border-gray-300 pr-3">
                      <span className="text-gray-500 font-medium">+212</span>
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="0606060606"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`${inputClasses} pl-20`}
                    />
                  </div>
                </motion.div>

                {/* Message - Full Width */}
                <motion.div 
                  className="space-y-2 md:col-span-2"
                  animate={{ scale: focusedField === 'message' ? 1.02 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Label htmlFor="message" className={labelClasses}>
                    <MessageSquare className="w-4 h-4 text-amber-500" />
                    Décrivez votre projet
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Parlez-nous de vos besoins : type de projet, surface concernée, matériaux préférés, délais souhaités, budget approximatif..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="min-h-[160px] bg-gray-50/50 border-gray-200 focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 rounded-xl text-base transition-all duration-300 resize-none placeholder:text-gray-400 leading-relaxed"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-2">
                    <span>Plus de détails = devis plus précis</span>
                    <span>{formData.message.length} caractères</span>
                  </div>
                </motion.div>
              </div>

              {/* Submit Section */}
              <div className="mt-10 pt-8 border-t border-gray-100">
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold h-16 text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="w-5 h-5" />
                        </motion.div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>

                {/* Trust Indicators */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span>Données 100% sécurisées</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>Réponse garantie sous 24h</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              { 
                icon: CheckCircle2, 
                title: "Devis personnalisé", 
                desc: "Adapté à vos besoins spécifiques" 
              },
              { 
                icon: Shield, 
                title: "Sans engagement", 
                desc: "Aucune obligation d'achat" 
              },
              { 
                icon: Clock, 
                title: "Service rapide", 
                desc: "Intervention sous 48h si urgence" 
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center mx-auto mb-3">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteForm;