import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termicons | Icons',
  description: 'Browse our collection of 24,500+ icons for modern interface designs',
};

export default function IconsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">Icon Library</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore our comprehensive collection of 24,500+ icons designed for modern interfaces
          </p>
        </div>

        <div className="text-center py-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-12 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
            <p className="text-white/70 mb-6">
              Our icon library is currently under development. Stay tuned for the full collection!
            </p>
            <button className="px-6 py-3 bg-[#0055FF] rounded-2xl text-base font-bold">
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

