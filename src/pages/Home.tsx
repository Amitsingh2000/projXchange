import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Code, Database, Globe, Smartphone, Star, ArrowRight, Play, CheckCircle, Users, Award, TrendingUp, Clock, Shield, Zap } from 'lucide-react';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { name: 'Java', icon: Code, color: 'bg-gradient-to-br from-orange-500 to-red-500', count: 45, growth: '+12%' },
    { name: 'Python', icon: Database, color: 'bg-gradient-to-br from-blue-500 to-indigo-600', count: 38, growth: '+8%' },
    { name: 'PHP', icon: Globe, color: 'bg-gradient-to-br from-purple-500 to-pink-500', count: 32, growth: '+15%' },
    { name: 'React', icon: Code, color: 'bg-gradient-to-br from-cyan-500 to-blue-500', count: 28, growth: '+20%' },
    { name: 'Node.js', icon: Database, color: 'bg-gradient-to-br from-green-500 to-emerald-500', count: 25, growth: '+18%' },
    { name: 'Mobile', icon: Smartphone, color: 'bg-gradient-to-br from-pink-500 to-rose-500', count: 22, growth: '+10%' },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'E-commerce Web App',
      category: 'React',
      price: '$29',
      originalPrice: '$49',
      rating: 4.9,
      reviews: 127,
      thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: {
        name: 'John Doe',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
        level: 'Top Rated',
        rating: 4.9
      },
      tags: ['React', 'Node.js', 'MongoDB'],
      deliveryTime: '2 days',
      sales: 89
    },
    {
      id: 2,
      title: 'Hospital Management System',
      category: 'Java',
      price: '$45',
      originalPrice: '$65',
      rating: 4.8,
      reviews: 94,
      thumbnail: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: {
        name: 'Sarah Wilson',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
        level: 'Level 2',
        rating: 4.8
      },
      tags: ['Java', 'Spring', 'MySQL'],
      deliveryTime: '3 days',
      sales: 67
    },
    {
      id: 3,
      title: 'Social Media Dashboard',
      category: 'Python',
      price: '$35',
      originalPrice: '$55',
      rating: 4.7,
      reviews: 156,
      thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      seller: {
        name: 'Mike Johnson',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
        level: 'Top Rated',
        rating: 4.9
      },
      tags: ['Python', 'Django', 'PostgreSQL'],
      deliveryTime: '1 day',
      sales: 134
    }
  ];

  const testimonials = [
    {
      name: 'Emily Chen',
      role: 'Computer Science Student',
      university: 'MIT',
      text: 'StudyStack saved me weeks of development time. The projects are incredibly well-documented and the sellers are super responsive!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
      project: 'React E-commerce App'
    },
    {
      name: 'Alex Rodriguez',
      role: 'Software Engineering Student',
      university: 'Stanford',
      text: 'The quality of projects here is outstanding. I learned so much from the code structure and implementation patterns.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100',
      project: 'Java Spring Boot API'
    },
    {
      name: 'Maria Garcia',
      role: 'Data Science Student',
      university: 'UC Berkeley',
      text: 'Perfect for students on a budget. The projects are affordable and come with excellent documentation and support.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100',
      project: 'Python ML Dashboard'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Students', icon: Users },
    { number: '500+', label: 'Quality Projects', icon: Award },
    { number: '98%', label: 'Success Rate', icon: TrendingUp },
    { number: '24/7', label: 'Support', icon: Clock }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Your money is protected with our secure payment system'
    },
    {
      icon: Zap,
      title: 'Instant Download',
      description: 'Get your project files immediately after purchase'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'All projects are reviewed and tested before listing'
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to projects page with search term
    window.location.href = `/projects?search=${encodeURIComponent(searchTerm)}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative mx-4 sm:mx-8 lg:mx-20 mt-5 bg-cover bg-center rounded-3xl overflow-hidden text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                Trusted by 10,000+ students worldwide
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Find Perfect
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Academic Projects
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
                Discover high-quality student projects, learn from expert code, and accelerate your academic journey with our curated marketplace.
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="mb-10">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for projects, tech stacks, or keywords..."
                    className="block w-full pl-14 pr-36 py-4 text-base sm:text-lg border-0 rounded-2xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20 shadow-2xl"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Side Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Browse Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/upload"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Sell Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Explore by Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find projects built with your favorite technologies and frameworks
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/projects?category=${category.name.toLowerCase()}`}
                className="group relative bg-white rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <category.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{category.name}</h3>
                <p className="text-gray-600 mb-2">{category.count} projects</p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {category.growth}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked projects from our top-rated sellers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="relative">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg">
                      {project.seller.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-5 h-5 text-gray-700" />
                    </button>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {project.category}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-semibold text-gray-700">{project.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({project.reviews})</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center mb-4">
                    <img
                      src={project.seller.avatar}
                      alt={project.seller.name}
                      className="w-8 h-8 rounded-full object-cover mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{project.seller.name}</div>
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        <span className="text-xs text-gray-600">{project.seller.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{project.price}</span>
                      <span className="text-lg text-gray-500 line-through">{project.originalPrice}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{project.sales} sales</div>
                      <div className="text-sm text-green-600 font-medium">{project.deliveryTime} delivery</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose StudyStack?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need for a successful academic project experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Students Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied students who have accelerated their learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-blue-600 font-medium">{testimonial.university}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-500">Project: <span className="font-medium text-gray-700">{testimonial.project}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Join thousands of students who have already transformed their academic experience with StudyStack
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Browse Projects
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-blue-200 text-sm">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="text-blue-200 text-sm">Money Back Guarantee</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-blue-200 text-sm">Quality Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">10k+</div>
              <div className="text-blue-200 text-sm">Happy Students</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;