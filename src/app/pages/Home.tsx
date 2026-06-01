import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { GradientButton } from '../components/GradientButton';
import heroImage from '../../imports/image-1.png';
import gallery1 from '../../imports/gallery-1.jpg';
import gallery2 from '../../imports/gallery-2.jpg';
import gallery3 from '../../imports/gallery-3.jpg';
import gallery4 from '../../imports/gallery-4.jpg';
import gallery5 from '../../imports/gallery-5.jpg';
import gallery6 from '../../imports/gallery-6.jpg';

export function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - Split Layout */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid md:grid-cols-2">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative overflow-hidden"
          >
            <img
              src={heroImage}
              alt="A to Z Studio"
              className="w-full h-full object-cover"
              style={{
                transform: `scale(${1 + scrollY * 0.0002})`,
                transition: 'transform 0.1s ease-out',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
          </motion.div>

          {/* Right Side - Text */}
          <div className="relative flex items-center justify-center bg-white px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              >
                <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] mb-6">
                  A TO Z
                </h1>
                <div className="w-24 h-[1px] bg-foreground mx-auto mb-6"></div>
                <p className="text-xl md:text-2xl tracking-[0.3em] text-muted-foreground">
                  STUDIO
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="mt-12 text-muted-foreground max-w-md mx-auto leading-relaxed"
              >
                Your complete beauty destination. Experience luxury and elegance from A to Z.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="mt-12"
              >
                <GradientButton to="/contacts">
                  BOOK APPOINTMENT
                </GradientButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Scroll Animation */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl tracking-wider mb-8">WELCOME</h2>
            <div className="w-16 h-[1px] bg-foreground mx-auto mb-8"></div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At A to Z Studio, we believe in providing exceptional beauty services from A to Z.
              Our team of expert stylists, colorists, and beauty professionals are dedicated to
              helping you look and feel your best.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are committed to environmental responsibility and use eco-friendly products
              whenever possible, ensuring beauty that's good for you and the planet.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl tracking-wider mb-4">OUR SERVICES</h2>
            <div className="w-16 h-[1px] bg-foreground mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link
                to="/women"
                className="block group bg-card border border-border rounded-2xl p-12 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl tracking-wider mb-4 group-hover:translate-x-2 transition-transform">
                  WOMEN'S SERVICES
                </h3>
                <p className="text-muted-foreground">
                  Hair Styling • Makeup • Manicure & Pedicure • Spa • Cosmetology
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                to="/men"
                className="block group bg-card border border-border rounded-2xl p-12 hover:shadow-lg transition-all"
              >
                <h3 className="text-2xl tracking-wider mb-4 group-hover:translate-x-2 transition-transform">
                  MEN'S SERVICES
                </h3>
                <p className="text-muted-foreground">
                  Hair Styling • Manicure & Pedicure • Spa • Cosmetology
                </p>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl tracking-wider mb-4">GALLERY</h2>
            <div className="w-16 h-[1px] bg-foreground mx-auto mb-6"></div>
            <p className="text-muted-foreground">Follow us @atozstudio</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              gallery1,
              gallery2,
              gallery3,
              gallery4,
              gallery5,
              gallery6,
            ].map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-64 overflow-hidden rounded-2xl group"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
