'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

const InquiryConcierge = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => setStep((s) => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const occasionTypes = ['Wedding', 'Gala', 'Corporate', 'Private'];

  return (
    <section id="concierge" className="section-padding bg-primary text-accent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-accent/60 text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold"
          >
            Personalized Service
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl mb-6"
          >
            Begin Your <br />
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="italic font-normal text-white"
            >
              Journey
            </motion.span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent/50 font-sans font-light max-w-xl mx-auto"
          >
            Allow our dedicated concierge to assist you in crafting an experience tailored to your exact vision.
          </motion.p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-16 border border-accent/10 relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
            <motion.div 
              className="h-full bg-gradient-to-r from-accent via-accent/80 to-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute top-8 right-8 flex gap-2"
          >
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                className={`w-2 h-2 rounded-full ${step >= num ? 'bg-accent' : 'bg-white/20'}`}
                animate={{ scale: step === num ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input label="Full Name" placeholder="Your name" />
                  <Input label="Email Address" type="email" placeholder="email@example.com" />
                </div>
                <div className="space-y-4">
                  <p className="text-[10px] tracking-widest uppercase font-bold opacity-60">Occasion Type</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {occasionTypes.map((type, index) => (
                    <motion.button 
                      key={type} 
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="border border-accent/20 py-4 text-[10px] uppercase tracking-widest hover:bg-accent hover:text-primary transition-all font-bold rounded-lg shadow-md hover:shadow-accent/20"
                    >
                      {type}
                    </motion.button>
                  ))}
                </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input label="Expected Date" type="date" />
                  <Input label="Guest Count" type="number" placeholder="0" />
                </div>
                <Input label="Preferred Venue" as="select">
                  <option className="bg-primary">Jadeite Hall</option>
                  <option className="bg-primary">Moonstone Hall</option>
                </Input>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8 text-center"
              >
                <div className="py-12">
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-3xl mb-4 italic text-white"
                  >
                    Confirm Excellence
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-accent/60 font-sans font-light max-w-sm mx-auto mb-8"
                  >
                    Your request will be prioritized and assigned to a dedicated Concierge Manager immediately.
                  </motion.p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="accent" size="lg" className="px-12 py-4 shadow-2xl hover:shadow-accent/50 transition-all duration-300">Finalize Inquiry</Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-between mt-12 pt-8 border-t border-accent/10">
            <motion.button 
              onClick={prevStep}
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`text-[10px] tracking-widest uppercase font-bold transition-all duration-300 ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-60 hover:opacity-100'}`}
            >
              ← Back
            </motion.button>
            {step < totalSteps && (
              <motion.button 
                onClick={nextStep}
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="text-[10px] tracking-widest uppercase font-bold hover:text-white transition-all duration-300"
              >
                Next Step →
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryConcierge;
