import { motion } from 'motion/react';
import { Link } from 'react-router';
import { GradientButton } from '../components/GradientButton';
import gallery1 from '../../imports/gallery-1.jpg';
import gallery2 from '../../imports/gallery-2.jpg';
import gallery3 from '../../imports/gallery-3.jpg';
import gallery4 from '../../imports/gallery-4.jpg';
import gallery5 from '../../imports/gallery-5.jpg';

export function Women() {
  const services = [
    {
      name: 'Hair Styling',
      description: 'Professional cuts, color, highlights, balayage, and hair treatments',
      image: gallery2,
    },
    {
      name: 'Makeup',
      description: 'Professional makeup for weddings, events, and special occasions',
      image: gallery1,
    },
    {
      name: 'Manicure & Pedicure',
      description: 'Nail care, gel polish, nail art, and luxury treatments',
      image: gallery3,
    },
    {
      name: 'Spa Treatments',
      description: 'Facials, massages, body treatments, and relaxation therapy',
      image: gallery4,
    },
    {
      name: 'Cosmetology',
      description: 'Advanced skincare, anti-aging treatments, and beauty consulting',
      image: gallery5,
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
          <h1 className="text-5xl md:text-6xl tracking-wider mb-6">WOMEN'S SERVICES</h1>
          <div className="w-16 h-[1px] bg-foreground mx-auto mb-8"></div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Discover our comprehensive range of beauty services designed exclusively for women.
            From hair styling to spa treatments, we offer everything you need to look and feel your best.
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
          <h2 className="text-4xl tracking-wider mb-6">READY TO TRANSFORM?</h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">
            Book your appointment today and experience the luxury of A to Z Studio
          </p>
          <GradientButton to="/contacts">
            CONTACT US
          </GradientButton>
        </motion.div>
      </section>
    </div>
  );
}
