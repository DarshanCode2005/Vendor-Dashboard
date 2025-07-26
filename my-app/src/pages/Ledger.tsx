import React, { useState } from 'react';
import { Download, Filter, TrendingUp, DollarSign, Package, Calendar } from 'lucide-react';

const Ledger = () => {
  const [selectedMonth, setSelectedMonth] = useState('2025-01');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const transactions = [
    {
      id: 1,
      date: '2025-01-12',
      item: 'Premium Basmati Rice',
      qty: '25 kg',
      price: '₹85/kg',
      total: '₹2,125',
      supplier: 'Fresh Mart Suppliers',
      category: 'grains',
      groupOrder: true,
      savings: '₹175'
    },
    {
      id: 2,
      date: '2025-01-11',
      item: 'Red Onions',
      qty: '20 kg',
      price: '₹28/kg',
      total: '₹560',
      supplier: 'Vegetable Hub',
      category: 'vegetables',
      groupOrder: true,
      savings: '₹140'
    },
    {
      id: 3,
      date: '2025-01-10',
      item: 'Wheat Flour',
      qty: '50 kg',
      price: '₹30/kg',
      total: '₹1,500',
      supplier: 'Grain Direct',
      category: 'grains',
      groupOrder: false,
      savings: '₹0'
    },
    {
      id: 4,
      date: '2025-01-09',
      item: 'Cooking Oil',
      qty: '10 L',
      price: '₹120/L',
      total: '₹1,200',
      supplier: 'Oil Masters',
      category: 'oil',
      groupOrder: true,
      savings: '₹150'
    },
    {
      id: 5,
      date: '2025-01-08',
      item: 'Tomatoes',
      qty: '15 kg',
      price: '₹22/kg',
      total: '₹330',
      supplier: 'Farm Fresh',
      category: 'vegetables',
      groupOrder: true,
      savings: '₹90'
    }
  ];

  const monthlyStats = {
    totalSpent: '₹15,420',
    totalSavings: '₹2,180',
    orderCount: 23,
    avgSavingsPercent: 14.1
  };

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'vegetables', label: 'Vegetables' },
    { value: 'grains', label: 'Grains & Cereals' },
    { value: 'oil', label: 'Oils & Fats' },
    { value: 'dairy', label: 'Dairy Products' },
    { value: 'spices', label: 'Spices' }
  ];

  const filteredTransactions = transactions.filter(transaction => {
    if (selectedCategory === 'all') return true;
    return transaction.category === selectedCategory;
  });

  const handleExportPDF = () => {
    // PDF export logic would go here
    alert('PDF export functionality would be implemented here');
  };

  return (
    <div className="space-y-6">
      {/* Monthly Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Spent</p>
              <p className="text-2xl font-bold">{monthlyStats.totalSpent}</p>
            </div>
            <DollarSign className="h-8 w-8 text-blue-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Total Saved</p>
              <p className="text-2xl font-bold">{monthlyStats.totalSavings}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Orders Placed</p>
              <p className="text-2xl font-bold">{monthlyStats.orderCount}</p>
            </div>
            <Package className="h-8 w-8 text-orange-200" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Avg Savings</p>
              <p className="text-2xl font-bold">{monthlyStats.avgSavingsPercent}%</p>
            </div>
            <TrendingUp className="h-8 w-8 text-purple-200" />
          </div>
        </div>
      </div>

      {/* Filters and Controls */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Ledger & Receipts</h1>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-gray-400" />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="2025-01">January 2025</option>
                <option value="2024-12">December 2024</option>
                <option value="2024-11">November 2024</option>
              </select>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
            
            <button
              onClick={handleExportPDF}
              className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </button>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Item</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Qty</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Price</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Total</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Supplier</th>
                <th className="text-left py-3 px-4 font-medium text-gray-700">Savings</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">{transaction.item}</span>
                      {transaction.groupOrder && (
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          Group Order
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">{transaction.qty}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{transaction.price}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{transaction.total}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{transaction.supplier}</td>
                  <td className="py-3 px-4">
                    {transaction.savings !== '₹0' ? (
                      <span className="text-sm font-medium text-green-600">{transaction.savings}</span>
                    ) : (
                      <span className="text-sm text-gray-400">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Summary Footer */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Showing {filteredTransactions.length} transactions
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm text-gray-600">Month Total</p>
                <p className="text-lg font-bold text-gray-900">{monthlyStats.totalSpent}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Total Saved vs Solo Buying</p>
                <p className="text-lg font-bold text-green-600">{monthlyStats.totalSavings}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Insight */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-3 rounded-lg mr-4">
            <TrendingUp className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Savings Insight</h3>
            <p className="text-gray-600">Your group buying performance this month</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="text-2xl font-bold text-green-600">14.1%</p>
            <p className="text-sm text-gray-600">Average savings per order</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-2xl font-bold text-blue-600">87%</p>
            <p className="text-sm text-gray-600">Orders through group buying</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="text-2xl font-bold text-purple-600">₹465</p>
            <p className="text-sm text-gray-600">Highest single order savings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ledger;