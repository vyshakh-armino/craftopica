<script setup>
import { ref, computed } from 'vue'
import { products, categories, priceRanges } from './data/products.js'
import ProductCard from './components/ProductCard.vue'

const selectedCategory = ref('All')
const selectedPriceRange = ref(priceRanges[0])
const searchQuery = ref('')
const mobileMenuOpen = ref(false)

const filteredProducts = computed(() => {
  return products.filter(product => {
    const matchesCategory = selectedCategory.value === 'All' || product.category === selectedCategory.value
    const matchesPrice = product.price >= selectedPriceRange.value.min && product.price <= selectedPriceRange.value.max
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchesCategory && matchesPrice && matchesSearch
  })
})
</script>

<template>
  <div class="min-h-screen bg-neutral-50">
    <!-- Header -->
    <header class="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div class="container mx-auto px-4">
        <!-- Top Bar -->
        <div class="flex items-center justify-between py-4">
          <!-- Logo and Brand -->
          <div class="flex items-center space-x-3">
            <div class="h-12 w-12 bg-primary-100 rounded-full p-2 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Craftopica Logo"
                class="h-full w-full object-contain"
                @error="(e) => e.target.style.display = 'none'"
              />
            </div>
            <div>
              <h1 class="text-2xl font-display font-bold text-neutral-900">Craftopica</h1>
              <p class="text-xs text-primary-600 font-body">Handcrafted with Love</p>
            </div>
          </div>

          <!-- Desktop Navigation -->
          <nav class="hidden lg:flex items-center space-x-8">
            <a href="#" class="text-sm font-medium text-neutral-700 hover:text-primary-700 transition">Home</a>
            <a href="#products" class="text-sm font-medium text-neutral-700 hover:text-primary-700 transition">Shop</a>
            <a href="#about" class="text-sm font-medium text-neutral-700 hover:text-primary-700 transition">About</a>
            <a href="#contact" class="text-sm font-medium text-neutral-700 hover:text-primary-700 transition">Contact</a>
          </nav>

          <!-- Contact Button -->
          <div class="hidden md:flex items-center space-x-4">
            <a href="https://wa.me/917736241616" target="_blank" class="flex items-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2 text-neutral-700">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="mobileMenuOpen" class="lg:hidden py-4 border-t border-neutral-200">
          <nav class="flex flex-col space-y-3">
            <a href="#" class="text-sm font-medium text-neutral-700 hover:text-primary-700 transition">Home</a>
            <a href="#products" class="text-sm font-medium text-neutral-700 hover:text-primary-700 transition">Shop</a>
            <a href="#about" class="text-sm font-medium text-neutral-700 hover:text-primary-700 transition">About</a>
            <a href="#contact" class="text-sm font-medium text-neutral-700 hover:text-primary-700 transition">Contact</a>
            <a href="https://wa.me/917736241616" target="_blank" class="inline-flex items-center justify-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-full text-sm font-medium transition">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Discover Unique Handcrafted Treasures
          </h2>
          <p class="text-lg text-neutral-600 mb-8">
            Explore our curated collection of artisan gifts, gourmet hampers, and specialty food items
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button @click="selectedCategory = 'Handcrafted Gifts'" class="px-6 py-3 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition font-medium">
              Shop Gifts
            </button>
            <button @click="selectedCategory = 'Hampers'" class="px-6 py-3 bg-white text-primary-700 border-2 border-primary-700 rounded-full hover:bg-primary-50 transition font-medium">
              View Hampers
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main id="products" class="container mx-auto px-4 py-12">
      <!-- Compact Filters Bar -->
      <div class="bg-white rounded-xl shadow-sm border border-neutral-200 p-4 mb-10">
        <div class="flex flex-wrap items-center gap-3">
          <!-- Search -->
          <div class="flex-1 min-w-[200px]">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search products..."
                class="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition text-sm"
              />
              <svg class="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
              </svg>
            </div>
          </div>

          <!-- Category Filter -->
          <div class="w-auto min-w-[160px]">
            <select
              v-model="selectedCategory"
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white text-sm"
            >
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Price Range Filter -->
          <div class="w-auto min-w-[140px]">
            <select
              v-model="selectedPriceRange"
              class="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition bg-white text-sm"
            >
              <option v-for="range in priceRanges" :key="range.label" :value="range">
                {{ range.label }}
              </option>
            </select>
          </div>

          <!-- Results Count & Clear -->
          <div class="flex items-center gap-3 ml-auto">
            <span class="text-sm text-neutral-600 whitespace-nowrap">
              <span class="font-semibold text-neutral-900">{{ filteredProducts.length }}</span> / {{ products.length }}
            </span>
            <button
              v-if="selectedCategory !== 'All' || selectedPriceRange !== priceRanges[0] || searchQuery !== ''"
              @click="selectedCategory = 'All'; selectedPriceRange = priceRanges[0]; searchQuery = ''"
              class="text-sm text-primary-700 hover:text-primary-800 font-medium whitespace-nowrap"
            >
              Clear
            </button>
          </div>
        </div>
      </div>

      <!-- Products Grid -->
      <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- No Results -->
      <div v-else class="text-center py-20 bg-white rounded-2xl border border-neutral-200">
        <svg class="w-20 h-20 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <h3 class="text-xl font-display font-semibold text-neutral-900 mb-2">No products found</h3>
        <p class="text-neutral-600 mb-6">Try adjusting your filters or search query</p>
        <button @click="selectedCategory = 'All'; selectedPriceRange = priceRanges[0]; searchQuery = ''" class="px-6 py-2.5 bg-primary-700 text-white rounded-full hover:bg-primary-800 transition font-medium">
          Clear All Filters
        </button>
      </div>
    </main>

    <!-- About Section -->
    <section id="about" class="bg-white py-16 border-t border-neutral-200">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-display font-bold text-neutral-900 mb-4">About Craftopica</h2>
          <p class="text-lg text-neutral-600 mb-8">
            We curate the finest handcrafted gifts, gourmet hampers, and specialty food items from talented artisans.
            Each product is carefully selected to bring joy and quality to your celebrations.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-neutral-900 mb-2">Quality Assured</h3>
              <p class="text-sm text-neutral-600">Handpicked products from trusted artisans</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-neutral-900 mb-2">Fast Delivery</h3>
              <p class="text-sm text-neutral-600">Quick and reliable shipping</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <h3 class="font-display font-semibold text-neutral-900 mb-2">Made with Love</h3>
              <p class="text-sm text-neutral-600">Each item crafted with care and passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contact" class="bg-neutral-900 text-white">
      <div class="container mx-auto px-4 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div class="md:col-span-2">
            <h3 class="text-2xl font-display font-bold mb-3">Craftopica</h3>
            <p class="text-neutral-400 mb-4 max-w-md">Your destination for handcrafted gifts, hampers, and artisan food items. Bringing joy through quality craftsmanship.</p>
            <a href="https://wa.me/917736241616" target="_blank" class="inline-flex items-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Order on WhatsApp</span>
            </a>
          </div>
          <div>
            <h4 class="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-neutral-400 hover:text-white transition text-sm">Home</a></li>
              <li><a href="#products" class="text-neutral-400 hover:text-white transition text-sm">Shop</a></li>
              <li><a href="#about" class="text-neutral-400 hover:text-white transition text-sm">About</a></li>
              <li><a href="#contact" class="text-neutral-400 hover:text-white transition text-sm">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-display font-semibold text-lg mb-4">Categories</h4>
            <ul class="space-y-2">
              <li><button @click="selectedCategory = 'Handcrafted Gifts'" class="text-neutral-400 hover:text-white transition text-sm text-left">Handcrafted Gifts</button></li>
              <li><button @click="selectedCategory = 'Hampers'" class="text-neutral-400 hover:text-white transition text-sm text-left">Hampers</button></li>
              <li><button @click="selectedCategory = 'Food Items'" class="text-neutral-400 hover:text-white transition text-sm text-left">Food Items</button></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-neutral-400 text-sm">&copy; 2024 Craftopica. All rights reserved.</p>
          <p class="text-neutral-400 text-sm mt-2 md:mt-0">Phone: <a href="tel:+917736241616" class="hover:text-white transition">+91 7736241616</a></p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
</style>
