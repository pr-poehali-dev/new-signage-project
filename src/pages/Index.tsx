import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! ✨",
      description: "Мы свяжемся с вами в ближайшее время для бесплатной консультации.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Неоновые вывески',
      description: 'Яркие и стильные вывески для бизнеса любого масштаба'
    },
    {
      icon: 'Home',
      title: 'Домашний декор',
      description: 'Уникальные неоновые композиции для интерьера'
    },
    {
      icon: 'Store',
      title: 'Реклама',
      description: 'Эффективные рекламные конструкции с неоновой подсветкой'
    },
    {
      icon: 'Palette',
      title: 'Индивидуальный дизайн',
      description: 'Разработка уникального дизайна под ваши задачи'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/59d03ef6-05ea-48d5-bb40-febe90b724e8/files/70838a49-1592-4eaf-9cf2-7cd93606254d.jpg',
      title: 'Вывеска студии',
      category: 'Коммерческий проект'
    },
    {
      image: 'https://cdn.poehali.dev/projects/59d03ef6-05ea-48d5-bb40-febe90b724e8/files/046df961-3e7a-49c8-bae1-ef244697fbd3.jpg',
      title: 'Кафе на кирпичной стене',
      category: 'Ресторанный бизнес'
    },
    {
      image: 'https://cdn.poehali.dev/projects/59d03ef6-05ea-48d5-bb40-febe90b724e8/files/d7d243c9-4ef4-41d5-8f60-1adc5707dd16.jpg',
      title: 'Фасадная реклама',
      category: 'Крупный формат'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold neon-glow text-primary animate-fade-in">
              NEON STUDIO
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Создаём неоновые вывески, которые заставляют останавливаться и смотреть
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground neon-box text-lg px-8"
                onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Sparkles" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8"
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Image" size={20} className="mr-2" />
                Наши работы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow text-secondary">
            Наши услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 hover-scale"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow text-accent">
            Портфолио
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                    <p className="text-sm text-primary font-semibold">{project.category}</p>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold neon-glow text-primary">
              О компании
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Мы создаём неоновые вывески и декор с 2018 года. За это время реализовали более 500 проектов 
              для кафе, ресторанов, магазинов и частных интерьеров. Используем только качественные материалы 
              и современные LED-технологии, которые обеспечивают яркость и долговечность на годы.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Проектов</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-secondary">6</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Поддержка</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Гарантия</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow text-secondary">
            Прайс-лист
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {[
              { service: 'Неоновая вывеска (1 метр)', price: 'от 15 000 ₽' },
              { service: 'Домашний декор малого формата', price: 'от 5 000 ₽' },
              { service: 'Фасадная реклама', price: 'от 50 000 ₽' },
              { service: 'Индивидуальный дизайн-проект', price: 'от 3 000 ₽' },
              { service: 'Монтаж и установка', price: 'от 2 000 ₽' }
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6 flex justify-between items-center">
                  <span className="text-lg">{item.service}</span>
                  <span className="text-xl font-bold text-primary">{item.price}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 neon-glow text-accent">
              Бесплатная консультация
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Оставьте заявку, и мы свяжемся с вами в течение 30 минут
            </p>
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Расскажите о вашем проекте"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-background border-border"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground neon-box"
                  >
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 neon-glow text-primary">
            Контакты
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-3">
                <Icon name="Phone" size={32} className="text-primary mx-auto" />
                <h3 className="font-semibold text-lg">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center hover:border-secondary transition-colors">
              <CardContent className="p-6 space-y-3">
                <Icon name="Mail" size={32} className="text-secondary mx-auto" />
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-muted-foreground">info@neonstudio.ru</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center hover:border-accent transition-colors">
              <CardContent className="p-6 space-y-3">
                <Icon name="MapPin" size={32} className="text-accent mx-auto" />
                <h3 className="font-semibold text-lg">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, 1</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>© 2024 NEON STUDIO. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
