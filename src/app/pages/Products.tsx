import { motion } from 'motion/react';
import { GradientButton } from '../components/GradientButton';
import product1 from '../../imports/product-1.jpg';
import product2 from '../../imports/product-2.jpg';
import product3 from '../../imports/product-3.jpg';
import product4 from '../../imports/product-4.jpg';

export function Products() {
  const productCategories = [
    {
      name: 'Hair Care',
      items: ['Shampoo & Conditioner', 'Hair Masks', 'Styling Products', 'Color Protection'],
      image: product1,
    },
    {
      name: 'Skin Care',
      items: ['Cleansers', 'Serums', 'Moisturizers', 'SPF Protection'],
      image: product2,
    },
    {
      name: 'Nail Care',
      items: ['Nail Polish', 'Treatments', 'Tools', 'Accessories'],
      image: product3,
    },
    {
      name: 'Wellness',
      items: ['Essential Oils', 'Aromatherapy', 'Supplements', 'Relaxation'],
      image: product4,
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
          <h1 className="text-5xl md:text-6xl tracking-wider mb-6">PRODUCTS</h1>
          <div className="w-16 h-[1px] bg-foreground mx-auto mb-8"></div>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Discover our curated selection of premium beauty products.
            We carry only the finest brands that align with our commitment to quality and sustainability.
          </p>
        </motion.div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-16 px-6 lg:px-12 border-b border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl tracking-wider mb-6">OUR COMMITMENT</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our responsibility to the environment extends beyond the world of beauty.
            All products are carefully selected to ensure they meet our high standards for
            sustainability, cruelty-free production, and environmental consciousness.
          </p>
        </motion.div>
      </section>

      {/* Product Categories */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-80 overflow-hidden rounded-2xl mb-6">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-6 left-6 text-white text-3xl tracking-wider">
                    {category.name}
                  </h3>
                </div>
                <ul className="space-y-2 px-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-foreground mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl tracking-wider mb-6">GIFT CARDS</h2>
          <div className="w-16 h-[1px] bg-foreground mx-auto mb-8"></div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Give the gift of beauty and wellness. Our gift cards are perfect for any occasion
            and can be used for all services and products at A to Z Studio.
          </p>
          <GradientButton>
            PURCHASE GIFT CARD
          </GradientButton>
        </motion.div>
      </section>
    </div>
  );
}
