import CategoryHero from '@/components/CategoryHero';
import CategoryMission from '@/components/CategoryMission';
import CategoryClients from '@/components/CategoryClients';
import ServicePage from '@/components/ServicePage';
import AchievementsSection from '@/components/AchievementsSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const LogisticsHome = () => {
  const clients = [
  { name: 'Welspun Group', logo: '/src/assets/logisticsClients/Welspun-World.jpg' },
  { name: 'APL Logistics', logo: '/src/assets/logisticsClients/apl.png' },
  { name: 'Carlsberg Group', logo: '/src/assets/logisticsClients/carlsberg.png' },
  { name: 'Allana Consumer Products', logo: '/src/assets/logisticsClients/Allana.jpg' },
  { name: 'Indofil Industries Limited', logo: '/src/assets/logisticsClients/Indofil.jpg' },
  { name: 'Mahindra Summit', logo: '/src/assets/logisticsClients/mahindra.jpg' },
  { name: 'Finerchem', logo: '/src/assets/logisticsClients/finorchem.png' },
  { name: 'Rasna', logo: '/src/assets/logisticsClients/rasna.jpg' },
  { name: 'Truefrost', logo: '/src/assets/logisticsClients/trufrost.jpg' },
  { name: 'Revival Engineers', logo: '/src/assets/logisticsClients/revival.jpg' },
  { name: 'Indiabulls Enterprises', logo: '/src/assets/logisticsClients/IndiaBulls.png' },
  { name: 'SML', logo: '/src/assets/logisticsClients/sml.jpg' },
  { name: 'Sumitomo Chemical', logo: '/src/assets/logisticsClients/sumitomo.png' },
  { name: 'Johnson', logo: '/src/assets/logisticsClients/johnson.jpg' },
  { name: 'Mahanand', logo: '/src/assets/logisticsClients/mahanand.jpg' },
  { name: 'Pittie', logo: '/src/assets/logisticsClients/Pittie.png' },
  { name: 'Seabird Int.', logo: '/src/assets/logisticsClients/seabird.png' }
];

  const features = [
    'Pan India Network',
    '24x7 Dedicated Support',
    'Customized Freight Solutions',
    'All-weather Vehicles',
    'Just-in-Time Transit Scheduling',
    'Supply Chain Optimization',
    'SIM & GPS Based Tracking',
    'Real-Time Reporting & E-POD',
    'Cost-Effective Logistics',
    'MIS and Customer Ledger Reports'
  ];

  const subtitle="Integrated Transport & Logistics Solutions Across India"
  const title="Economic Logistics"
  const description="Headquartered in Navi Mumbai, we offer Pan India logistics services with passion and commitment. Through empowered teams and innovative multilevel transport models, we ensure timely, safe, and reliable freight movement."
  const mission="To be the most dependable and environmentally conscious logistics provider in India. Our goal is to offer cost-effective, technology-driven transportation solutions while ensuring safe, timely delivery and exceptional customer satisfaction."
  const bgGradient="from-red-600 to-red-800"
  const textColor="text-red-50"
  const servicesLink = "#services";

  const accentColor = bgGradient.includes('red')
    ? 'text-red-600'
    : bgGradient.includes('blue')
    ? 'text-blue-600'
    : 'text-green-600';

    const services = [
  {
    title: 'Road Transport – FTL/PTL',
    description: 'Pan India Full Truck Load and Part Truck Load transportation with reliable and flexible options.',
    features: [
      'Door-to-door transport across India',
      'Real-time GPS tracking',
      'Custom freight scheduling',
      'All-weather fleet',
      'Transit movement reporting'
    ],
    icon: '🚛',
    image: 'https://images.unsplash.com/photo-1602101024303-2158f8a96f5d?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Warehousing Solutions',
    description: 'End-to-end warehouse design, management, and distribution operations.',
    features: [
      'Strategically located warehouses',
      'Inventory control systems',
      'Order fulfillment & cross-docking',
      'Integrated IT systems',
      'Real-time visibility of inventory'
    ],
    icon: '🏬',
    image: 'https://images.unsplash.com/photo-1588776814546-ec7e1fcbf8a5?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Last Mile Delivery',
    description: 'Reliable last-mile delivery solutions across urban and rural regions.',
    features: [
      'Timely final-mile execution',
      'Proof of delivery and tracking',
      'Returns handling',
      'Flexible delivery windows',
      'Customer service support'
    ],
    icon: '🚚',
    image: 'https://images.unsplash.com/photo-1606813902221-1f9fc8b73bff?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Sea Freight & Global Logistics',
    description: 'Export/import logistics, LCL/FCL, and specialized international routes.',
    features: [
      'Global LCL/FCL & break bulk',
      'Service to Africa & Moscow (via Odessa)',
      'Port coverage across India',
      'DDP/DDU & round-trip tank movements',
      '24/7 cargo tracking & monitoring'
    ],
    icon: '🚢',
    image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437c2?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Tracking & Backend Support',
    description: 'Technology-enabled visibility, reporting, and customer backend tools.',
    features: [
      'SIM-based and GPS tracking',
      'E-POD generation',
      'Custom MIS reports',
      'Customer ledger & outstanding reports',
      'Live vehicle monitoring'
    ],
    icon: '📡',
    image: 'https://images.unsplash.com/photo-1554224155-8d1d633d6b48?w=600&h=400&fit=crop&crop=center'
  },
  {
    title: 'Consulting Services',
    description: 'Expert guidance in supply chain, transportation strategy, and process improvement.',
    features: [
      'Cost reduction analysis',
      'Logistics strategy development',
      'Network design optimization',
      'Process audits and SOP building',
      'Change management and training'
    ],
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop&crop=center'
  }
];

  return (
    <div className="min-h-screen pt-16">
      {/* Parallax Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Parallax Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2024/07/25/14/54/truck-8921536_1280.jpg)',
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        />
        
        {/* Red Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/90 to-red-800/90" />
        
        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center text-red-50/80 hover:text-red-50 mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Economic Group
            </Link>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-50 mb-4 sm:mb-6 px-2">
              {title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-red-50/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              {subtitle}
            </p>
            <p className="text-base sm:text-lg text-red-50/80 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
              {description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            >
              <a href={servicesLink}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 w-full sm:w-auto"
                >
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-3 bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CategoryMission
        mission={mission}
        features={features}
        accentColor={accentColor}
      />
      
      <div id="services" className="scroll-mt-20">
        <ServicePage
          bgGradient="from-red-600 to-red-800"
          textColor="text-red-50"
          services={services}
        />
      </div>
      <div className='mt-10'>
        <AchievementsSection />
      </div>

      <CategoryClients clients={clients} />
    </div>
  );
};

export default LogisticsHome;