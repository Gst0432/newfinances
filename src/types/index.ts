export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  isPremium: boolean;
  premiumExpiryDate?: string;
  autoRenew?: boolean;
  password?: string;
  phone?: string;
  createdAt: string;
  isActive: boolean;
  companyInfo?: {
    name: string;
    address: string;
    phone: string;
    email: string;
    logo?: string;
  };
}

export interface Transaction {
  id: string;
  type: 'premium' | 'sale';
  amount: number;
  date: string;
  description?: string;
  saleType?: 'product' | 'service';
  buyerDetails?: {
    name: string;
    email: string;
    phone?: string;
  };
  paymentMethod?: string;
  status?: string;
  itemId?: string;
  sellerId?: string;
  buyerId?: string;
}

export interface Product {
  id: string;
  name: string;
  purchasePrice: number;
  sellingPrice: number;
  sellerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  expiryDate: string;
  sellerId: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SalesGoal {
  id: string;
  sellerId: string;
  target: number;
  current: number;
  startDate: string;
  endDate: string;
  type: 'monthly' | 'yearly';
}

export interface AdRevenue {
  lastMonth: number;
  impressions: number;
  clicks: number;
  ctr: number;
}

export interface Expense {
  id: string;
  sellerId: string;
  amount: number;
  description: string;
  category: string;
  date: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: number;
  features: string[];
  sellerId?: string;
}

export interface AdSenseRevenue {
  id: string;
  date: string;
  amount: number;
  impressions: number;
  clicks: number;
}

export interface Store {
  // User state
  user: User | null;
  setUser: (user: User | null) => void;
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: string, updates: Partial<User>) => void;

  // Products state
  products: Product[];
  addProduct: (product: Product) => void;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  // Services state
  services: Service[];
  addService: (service: Service) => void;
  updateService: (id: string, updates: Partial<Service>) => void;
  deleteService: (id: string) => void;

  // Transactions state
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;

  // Sales goals state
  salesGoals: SalesGoal[];
  addSalesGoal: (goal: SalesGoal) => void;

  // Expenses state
  expenses: Expense[];
  addExpense: (expense: Expense) => void;

  // Digital Products state
  digitalProductTables: Array<{
    id: string;
    name: string;
    sellerId: string;
    products: Array<{
      id: string;
      name: string;
      description: string;
      link: string;
    }>;
  }>;
  addDigitalProductTable: (table: { id: string; name: string; sellerId: string; products: any[] }) => void;
  deleteDigitalProductTable: (id: string) => void;
  addDigitalProduct: (tableId: string, product: { name: string; description: string; link: string }) => void;
  updateDigitalProduct: (tableId: string, productId: string, updates: { name: string; description: string; link: string }) => void;
  deleteDigitalProduct: (tableId: string, productId: string) => void;

  // Ads state
  showAds: boolean;
  setShowAds: (show: boolean) => void;
  adRevenue: AdRevenue;

  // Payment state
  merchantId: string;
  setMerchantId: (id: string) => void;

  // Subscription state
  subscriptions: {
    active: number;
  };

  // Subscription sales state
  subscriptionSales: Array<{
    id: string;
    serviceName: string;
    duration: number;
    amount: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    purchaseDate: string;
    expiryDate: string;
    status: 'active' | 'expired';
    sellerId: string;
  }>;
  addSubscriptionSale: (sale: any) => void;

  // Notifications state
  notifications: Array<{
    id: string;
    title: string;
    message: string;
    isRead: boolean;
    createdAt: string;
  }>;
  markNotificationAsRead: (id: string) => void;
  deleteNotification: (id: string) => void;
}