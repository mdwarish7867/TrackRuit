// Home.jsx (Improved Version)
import React from 'react';
import '../index.css'; // Ensure you have your styles imported
import { Link } from 'react-router-dom';
import { 
  FaChartLine, FaBell, FaSearch, FaRobot, FaSync, 
  FaUserFriends, FaRocket 
} from 'react-icons/fa';
import { 
  MdDashboard, MdInsights, MdTrendingUp, MdOutlineWorkspacePremium 
} from 'react-icons/md';

const features = [
  {
    icon: <MdDashboard className="text-4xl text-primary" />,
    title: "Centralized Dashboard",
    description: "Track all your applications in one place with smart filters."
  },
  {
    icon: <FaBell className="text-4xl text-accent" />,
    title: "Smart Notifications",
    description: "Stay updated on interviews, deadlines, and follow-ups."
  },
  {
    icon: <FaSearch className="text-4xl text-secondary" />,
    title: "Job Discovery",
    description: "Discover jobs using our intelligent recommendation engine."
  },
  {
    icon: <FaRobot className="text-4xl text-success" />,
    title: "AI Feedback",
    description: "Get real-time insights to optimize your job applications."
  },
  {
    icon: <FaSync className="text-4xl text-warning" />,
    title: "Status Sync",
    description: "Application data synced across all your devices instantly."
  },
  {
    icon: <FaUserFriends className="text-4xl text-primary-light" />,
    title: "Community Insights",
    description: "Explore industry trends through anonymized application data."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Google",
    content: "TrackRuit made job tracking effortless. Got 3 offers in 2 months!",
    delay: "0.2s"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Microsoft",
    content: "The AI tips doubled my interview rate. Game-changer.",
    delay: "0.4s"
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Apple",
    content: "From 0 callbacks to 5 interviews in 3 weeks. Unreal!",
    delay: "0.6s"
  }
];

const stats = [
  { value: '10K+', label: 'Applications Tracked', icon: <MdTrendingUp className="text-3xl" /> },
  { value: '78%', label: 'Interview Rate', icon: <MdInsights className="text-3xl" /> },
  { value: '3.5x', label: 'More Job Offers', icon: <FaChartLine className="text-3xl" /> },
  { value: '24/7', label: 'AI Support', icon: <FaRobot className="text-3xl" /> }
];

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-darker text-light font-main">
      {/* Hero Section */}
      <section className="max-w-6xl px-6 mx-auto text-center py-28 animate-fadeIn">
        <div className="mb-6">
          <span className="inline-block px-5 py-2 text-sm font-semibold text-white rounded-full shadow-md bg-gradient-to-r from-primary to-accent">
            ✨ Featured on TechCrunch & Product Hunt
          </span>
        </div>
        <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl font-heading">
          <span className="block mb-2">Your Ultimate</span>
          <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
            Job Search Companion
          </span>
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-xl text-gray">
          TrackRuit simplifies your job hunt with smart tools and AI insights.
        </p>
        <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row">
          <Link to="/register" className="flex items-center justify-center btn-primary">
            <FaRocket className="mr-2" /> Get Started Free
          </Link>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 mt-16 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-5 text-center glass-card">
              <div className="flex items-center justify-center mb-2 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-light">{stat.value}</div>
              <div className="text-sm text-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-dark">
        <div className="text-center mb-14">
          <h2 className="section-title">Empower Your Job Hunt</h2>
          <p className="text-lg text-gray">Tools that simplify and supercharge your application process</p>
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 text-left glass-card">
              {feature.icon}
              <h3 className="mt-4 mb-2 text-xl font-bold text-light">{feature.title}</h3>
              <p className="text-sm text-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-[#0a0f1f] to-darker">
        <div className="text-center mb-14">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="text-lg text-gray">Real success stories from real job seekers</p>
        </div>
        <div className="grid max-w-6xl grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 glass-card animate-slideIn" style={{ animationDelay: t.delay }}>
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 font-bold text-white rounded-full bg-gradient-to-r from-primary to-accent">
                  {t.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-light">{t.name}</h4>
                  <p className="text-sm text-gray">{t.role} • {t.company}</p>
                </div>
              </div>
              <p className="italic text-gray">"{t.content}"</p>
              <div className="flex mt-4 text-warning">
                {[...Array(5)].map((_, idx) => (
                  <MdOutlineWorkspacePremium key={idx} className="mr-1" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20 text-center">
        <div className="max-w-4xl p-10 mx-auto glass-card">
          <h2 className="section-title">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Start?</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 mb-8 text-lg text-gray">
            Start tracking smarter, applying faster, and landing interviews today!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/register" className="btn-primary">Start Free Trial</Link>
            <Link to="/features" className="btn-secondary">Explore Features</Link>
          </div>
          <p className="mt-6 text-sm text-gray">No credit card needed. Basic plan is free forever.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-[#1e293b] text-center text-sm text-gray">
        <p>© {new Date().getFullYear()} TrackRuit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;