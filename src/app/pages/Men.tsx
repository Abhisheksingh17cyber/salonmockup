import { motion } from 'motion/react';
import { Link } from 'react-router';
import { GradientButton } from '../components/GradientButton';
import men1 from '../../imports/men-1.jpg';
import men2 from '../../imports/men-2.jpg';
import gallery6 from '../../imports/gallery-6.jpg';
import men3 from '../../imports/men-3.jpg';

export function Men() {
  const services = [
    {
      name: 'Hair Styling',
      description: 'Modern haircuts, beard trimming, styling, and grooming services',
      image: men1,
    },
    {
      name: 'Manicure & Pedicure',
      description: 'Professional nail care and grooming for the modern man',
      image: men2,
    },
    {
      name: 'Spa Treatments',
      description: 'Relaxing facials, massages, and wellness treatments',
      image: gallery6,
    },
    {
      name: 'Cosmetology',
      description: 'Advanced skincare and anti-aging treatments',
      image: men3,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl tracking-wider mb-6">MEN'S SERVICES</h1>
          <div className="w-16 h-[1px] bg-foreground mx-auto mb-8"></div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Elevate your grooming routine with our premium men's services.
            From classic cuts to modern styling, we provide everything the modern gentleman needs.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-96 overflow-hidden rounded-2xl group">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-3xl tracking-wider mb-4">{service.name}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <GradientButton to="/contacts">
                    BOOK NOW
                  </GradientButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12 bg-primary text-primary-foreground">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl tracking-wider mb-6">EXPERIENCE EXCELLENCE</h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">
            Join the ranks of well-groomed gentlemen who trust A to Z Studio
          </p>
          <GradientButton to="/contacts">
            CONTACT US
          </GradientButton>
        </motion.div>
      </section>
    </div>
  );
}
