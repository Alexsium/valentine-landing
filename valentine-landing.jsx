import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart, Gift, Star, Sparkles, Check, ChevronDown, X } from 'lucide-react';

export default function ValentineLanding() {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('classic');
  const [cartOpen, setCartOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const product = {
    name: 'Романтичний Набір "Вічна Любов"',
    tagline: 'Ідеальний подарунок для вашої половинки',
    price: 1499,
    oldPrice: 2199,
    rating: 4.9,
    reviews: 847,
    images: [
      'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&q=80',
      'https://images.unsplash.com/photo-1515779689357-8b2b205287d3?w=800&q=80',
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80'
    ],
    variants: [
      { id: 'classic', name: 'Класичний', color: '#FF1744', icon: '❤️' },
      { id: 'deluxe', name: 'Делюкс', color: '#D81B60', icon: '💝', priceAdd: 300 },
      { id: 'premium', name: 'Преміум', color: '#880E4F', icon: '💎', priceAdd: 600 }
    ],
    features: [
      'Подарункова упаковка з персоналізацією',
      'Листівка з вашим посланням',
      'Безкоштовна доставка по Україні',
      'Ексклюзивні вироби ручної роботи',
      'Гарантія якості та свіжості',
      'Доставка до 14 лютого гарантована'
    ],
    includes: [
      { name: 'Букет з 25 троянд', emoji: '🌹' },
      { name: 'Бельгійський шоколад', emoji: '🍫' },
      { name: 'Ароматична свічка', emoji: '🕯️' },
      { name: 'М\'яка іграшка', emoji: '🧸' },
      { name: 'Персональна листівка', emoji: '💌' }
    ]
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % product.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentPrice = () => {
    const variant = product.variants.find(v => v.id === selectedVariant);
    return product.price + (variant?.priceAdd || 0);
  };

  const addToCart = () => {
    setShowSuccess(true);
    setCartOpen(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Floating hearts animation
  const FloatingHearts = () => (
    <div className="floating-hearts">
      {[...Array(15)].map((_, i) => (
        <div 
          key={i} 
          className="heart-particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lora:wght@400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Lora', serif;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .script-text {
          font-family: 'Crimson Text', serif;
          font-style: italic;
          font-weight: 600;
        }

        /* Floating hearts background */
        .floating-hearts {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
          overflow: hidden;
        }

        .heart-particle {
          position: absolute;
          font-size: 20px;
          opacity: 0;
          animation: floatHeart linear infinite;
        }

        @keyframes floatHeart {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Decorative patterns */
        .pattern-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(255, 182, 193, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(255, 105, 180, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(255, 20, 147, 0.1) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        /* Animations */
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .delay-1 { animation-delay: 0.2s; transform: translateY(30px); }
        .delay-2 { animation-delay: 0.4s; transform: translateY(30px); }
        .delay-3 { animation-delay: 0.6s; transform: translateY(30px); }
        .delay-4 { animation-delay: 0.8s; transform: translateY(30px); }
        .delay-5 { animation-delay: 1s; transform: translateY(30px); }

        .pulse-heart {
          animation: pulseHeart 1.5s ease-in-out infinite;
        }

        @keyframes pulseHeart {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 100%
          );
          animation: shine 3s infinite;
        }

        @keyframes shine {
          0% { left: -100%; }
          50%, 100% { left: 100%; }
        }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px) rotate(-1deg);
          box-shadow: 0 20px 40px rgba(255, 20, 147, 0.3);
        }

        .image-gallery {
          position: relative;
          overflow: hidden;
        }

        .image-slide {
          transition: opacity 1s ease-in-out;
        }

        .romantic-border {
          position: relative;
        }

        .romantic-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg, #FF1744, #F50057, #C51162, #FF1744);
          background-size: 300% 300%;
          border-radius: inherit;
          z-index: -1;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .success-popup {
          animation: successPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        @keyframes successPop {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #ffe4e6;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #FF1744, #C51162);
          border-radius: 4px;
        }
      `}</style>

      <FloatingHearts />
      <div className="pattern-overlay"></div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-rose-200 sticky top-0">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-rose-600 fill-rose-600 pulse-heart" />
            <span className="text-2xl font-bold text-rose-900 hero-title">Valentine's Shop</span>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hidden md:block text-rose-700 script-text text-lg">
              Залишилось {Math.floor(Math.random() * 50 + 30)} наборів
            </span>
            <button 
              onClick={() => setCartOpen(true)}
              className="relative p-3 bg-rose-100 hover:bg-rose-200 rounded-full transition-all"
            >
              <ShoppingCart className="w-6 h-6 text-rose-600" />
              {quantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {quantity}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20">
        
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Images */}
          <div className="fade-in-up delay-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl image-gallery romantic-border bg-white p-2">
              {product.images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={product.name}
                  className={`w-full h-[500px] object-cover rounded-2xl image-slide ${
                    idx === currentImage ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                />
              ))}
              
              {/* Image indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {product.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentImage 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>

              {/* Discount badge */}
              <div className="absolute top-6 right-6 bg-rose-600 text-white px-4 py-2 rounded-full font-bold text-lg shine-effect">
                -32% 💝
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 mt-4">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                    idx === currentImage 
                      ? 'border-rose-500 scale-110' 
                      : 'border-rose-200 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div className="fade-in-up delay-2">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Спеціальна пропозиція до 14 лютого
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-rose-950 mb-4 hero-title leading-tight">
                {product.name}
              </h1>
              
              <p className="text-xl text-rose-700 script-text mb-6">
                {product.tagline}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-rose-900 font-semibold">{product.rating}</span>
                <span className="text-rose-600">({product.reviews} відгуків)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-rose-600">{getCurrentPrice()} ₴</span>
                <span className="text-2xl text-rose-400 line-through">{product.oldPrice} ₴</span>
              </div>
            </div>

            {/* Variants */}
            <div className="fade-in-up delay-3">
              <h3 className="text-lg font-semibold text-rose-900 mb-4">Оберіть варіант:</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`relative p-4 rounded-2xl border-2 transition-all ${
                      selectedVariant === variant.id
                        ? 'border-rose-500 bg-rose-50 scale-105'
                        : 'border-rose-200 bg-white hover:border-rose-300'
                    }`}
                  >
                    <div className="text-3xl mb-2">{variant.icon}</div>
                    <div className="font-semibold text-rose-900">{variant.name}</div>
                    {variant.priceAdd && (
                      <div className="text-sm text-rose-600">+{variant.priceAdd} ₴</div>
                    )}
                    {selectedVariant === variant.id && (
                      <Check className="absolute top-2 right-2 w-5 h-5 text-rose-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="fade-in-up delay-4">
              <h3 className="text-lg font-semibold text-rose-900 mb-4">Кількість:</h3>
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center font-bold text-rose-900 transition-all"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-rose-900 w-12 text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 bg-rose-100 hover:bg-rose-200 rounded-full flex items-center justify-center font-bold text-rose-900 transition-all"
                >
                  +
                </button>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in-up delay-5 space-y-4">
              <button 
                onClick={addToCart}
                className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-5 rounded-full text-lg font-bold hover:from-rose-700 hover:to-pink-700 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 shine-effect"
              >
                <Heart className="w-6 h-6 fill-white" />
                Додати в кошик
              </button>
              
              <button className="w-full bg-white text-rose-900 py-5 rounded-full text-lg font-semibold border-2 border-rose-300 hover:border-rose-500 transition-all flex items-center justify-center gap-3">
                <Gift className="w-6 h-6" />
                Купити зараз
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-rose-200">
              {[
                { icon: '🚚', text: 'Безкоштовна доставка' },
                { icon: '✨', text: 'Гарантія якості' },
                { icon: '💝', text: 'Подарункова упаковка' }
              ].map((badge, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-xs text-rose-700">{badge.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What's Included */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-rose-950 mb-12 hero-title">
            Що входить в набір ❤️
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {product.includes.map((item, idx) => (
              <div 
                key={idx}
                className="card-hover bg-white rounded-2xl p-6 text-center shadow-lg border-2 border-rose-100"
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-semibold text-rose-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center text-rose-950 mb-12 hero-title">
            Чому обирають нас 💕
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <p className="text-rose-900 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8" />
            <h3 className="text-3xl font-bold hero-title">Встигніть замовити!</h3>
            <Sparkles className="w-8 h-8" />
          </div>
          <p className="text-xl mb-4">
            Гарантована доставка до Дня Закоханих при замовленні сьогодні
          </p>
          <p className="text-rose-100">
            Обмежена кількість наборів. Не втрачайте шанс здивувати свою половинку! 💝
          </p>
        </div>
      </main>

      {/* Cart Modal */}
      {cartOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setCartOpen(false)}
          ></div>
          
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-3xl shadow-2xl z-50 p-8">
            <button 
              onClick={() => setCartOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-rose-100 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-rose-900" />
            </button>

            {showSuccess && (
              <div className="success-popup bg-green-100 border-2 border-green-500 rounded-2xl p-4 mb-6 flex items-center gap-3">
                <Check className="w-6 h-6 text-green-600" />
                <span className="text-green-900 font-semibold">Додано в кошик!</span>
              </div>
            )}

            <h2 className="text-3xl font-bold text-rose-950 mb-6 hero-title">Ваш кошик 💝</h2>
            
            <div className="bg-rose-50 rounded-2xl p-6 mb-6">
              <div className="flex gap-4 mb-4">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-rose-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-rose-600 mb-2">
                    Варіант: {product.variants.find(v => v.id === selectedVariant)?.name}
                  </p>
                  <p className="text-rose-900 font-bold">{getCurrentPrice()} ₴</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-rose-200">
                <span className="text-rose-700">Кількість:</span>
                <span className="font-bold text-rose-900">{quantity}</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-rose-900">Разом:</span>
                <span className="text-3xl font-bold text-rose-600">{getCurrentPrice() * quantity} ₴</span>
              </div>
              <p className="text-sm text-rose-600">Безкоштовна доставка включена</p>
            </div>

            <button className="w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-4 rounded-full text-lg font-bold hover:from-rose-700 hover:to-pink-700 transition-all shadow-xl flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 fill-white" />
              Оформити замовлення
            </button>
          </div>
        </>
      )}

      {/* Footer */}
      <footer className="relative z-10 bg-rose-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Heart className="w-12 h-12 mx-auto mb-4 fill-rose-500 text-rose-500 pulse-heart" />
          <h3 className="text-2xl font-bold mb-2 hero-title">Valentine's Shop</h3>
          <p className="text-rose-300 mb-6 script-text">Дарімо любов разом 💕</p>
          <div className="flex justify-center gap-6 text-sm text-rose-400">
            <a href="#" className="hover:text-white transition-colors">Доставка</a>
            <a href="#" className="hover:text-white transition-colors">Оплата</a>
            <a href="#" className="hover:text-white transition-colors">Контакти</a>
          </div>
          <p className="text-rose-500 text-sm mt-6">© 2026 Valentine's Shop. З любов'ю для вас ❤️</p>
        </div>
      </footer>
    </div>
  );
}
