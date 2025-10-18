import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">AllZone.uz</h1>
                <p className="text-xs text-gray-500">Uzbekistan Directory</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-2">
              <Link href="/listings">
                <Button variant="ghost" size="sm">Listings</Button>
              </Link>
              <Link href="/categories">
                <Button variant="ghost" size="sm">Categories</Button>
              </Link>
              <Link href="https://github.com/SanjarAbduraimov/allzone.uz-frontend" target="_blank">
                <Button variant="primary" size="sm">GitHub</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="primary" className="mb-6">
              🇺🇿 Uzbekistan Business Directory
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover the Best
              <span className="text-blue-600"> Businesses</span>
              <br />in Uzbekistan
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              From Tashkent to Samarkand - Find verified services, restaurants, shops, and more
            </p>

            {/* Search Bar */}
            <Card className="p-4 max-w-3xl mx-auto shadow-xl">
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Location"
                  className="px-6 py-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-64"
                />
                <Button size="lg">Search</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-3">Browse by Category</h3>
            <p className="text-gray-600">Explore thousands of businesses</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: '💼', name: 'Services', slug: 'services' },
              { icon: '🛍️', name: 'Trade', slug: 'trade' },
              { icon: '📚', name: 'Education', slug: 'education' },
              { icon: '🏥', name: 'Health', slug: 'health' },
              { icon: '🏡', name: 'Housing', slug: 'housing' },
              { icon: '🍽️', name: 'Food', slug: 'food' },
            ].map((category) => (
              <Link key={category.slug} href={`/listings?category=${category.slug}`}>
                <Card className="p-6 text-center hover:shadow-lg hover:border-blue-200 transition-all cursor-pointer">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h4 className="font-semibold text-gray-900">{category.name}</h4>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-gray-900">Featured Listings</h3>
            <Link href="/listings">
              <Button variant="outline">View all →</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="primary">IT Services</Badge>
                    <div className="flex items-center text-yellow-500">
                      <span className="text-sm">⭐ 4.8</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Business Name {i}</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Professional services for your business
                  </p>
                  <div className="text-sm text-gray-500">
                    📍 Tashkent, Uzbekistan
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-6">List Your Business Today</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of businesses on AllZone.uz
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://github.com/SanjarAbduraimov/allzone.uz-frontend" target="_blank">
              <Button variant="secondary" size="lg">View on GitHub</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h4 className="text-xl font-bold mb-2">AllZone.uz</h4>
            <p className="text-gray-400 text-sm">
              Uzbekistan Business Directory Platform
            </p>
          </div>
          <div className="text-sm text-gray-400">
            <p>&copy; 2024 AllZone.uz. Built with Next.js 15 + Untitled UI</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
