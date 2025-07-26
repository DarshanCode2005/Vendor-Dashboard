import React, { useState } from 'react';
import { Users, Clock, Truck, Plus, Check } from 'lucide-react';

const GroupOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState<number | null>(null);
  const [joinQuantity, setJoinQuantity] = useState('');
  const [paymentPreference, setPaymentPreference] = useState('cod');

  const groupOrders = [
    {
      id: 1,
      item: 'Premium Basmati Rice',
      totalQty: '500 kg',
      currentQty: '320 kg',
      vendorsJoined: 12,
      supplierQuote: '₹85/kg',
      originalPrice: '₹92/kg',
      deliveryETA: '2 days',
      endTime: '6 hours',
      status: 'active',
      savings: '₹7/kg'
    },
    {
      id: 2,
      item: 'Red Onions Grade A',
      totalQty: '200 kg',
      currentQty: '180 kg',
      vendorsJoined: 8,
      supplierQuote: '₹28/kg',
      originalPrice: '₹35/kg',
      deliveryETA: '1 day',
      endTime: '2 hours',
      status: 'urgent',
      savings: '₹7/kg'
    },
    {
      id: 3,
      item: 'Fresh Tomatoes',
      totalQty: '300 kg',
      currentQty: '150 kg',
      vendorsJoined: 6,
      supplierQuote: '₹22/kg',
      originalPrice: '₹28/kg',
      deliveryETA: '3 days',
      endTime: '1 day',
      status: 'active',
      savings: '₹6/kg'
    },
    {
      id: 4,
      item: 'Cooking Oil (Refined)',
      totalQty: '100 L',
      currentQty: '85 L',
      vendorsJoined: 15,
      supplierQuote: '₹120/L',
      originalPrice: '₹135/L',
      deliveryETA: '2 days',
      endTime: '4 hours',
      status: 'urgent',
      savings: '₹15/L'
    }
  ];

  const handleJoinOrder = () => {
    if (selectedOrder && joinQuantity) {
      // Handle join logic here
      setSelectedOrder(null);
      setJoinQuantity('');
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Active Group Orders</h1>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-blue-600">Total Active Orders</p>
            <p className="text-2xl font-bold text-blue-900">{groupOrders.length}</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-green-600">Potential Savings</p>
            <p className="text-2xl font-bold text-green-900">₹1,200+</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-orange-600">Ending Soon</p>
            <p className="text-2xl font-bold text-orange-900">2</p>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {groupOrders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 mr-3">{order.item}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      order.status === 'urgent' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {order.status === 'urgent' ? 'Ending Soon' : 'Active'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Total Needed</p>
                      <p className="font-semibold text-gray-900">{order.totalQty}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Current Orders</p>
                      <p className="font-semibold text-gray-900">{order.currentQty}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Vendors Joined</p>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="font-semibold text-gray-900">{order.vendorsJoined}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Delivery ETA</p>
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="font-semibold text-gray-900">{order.deliveryETA}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <span className="text-2xl font-bold text-green-600">{order.supplierQuote}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{order.originalPrice}</span>
                        <span className="text-sm text-green-600 font-medium ml-2">Save {order.savings}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Closes in</p>
                        <div className="flex items-center text-orange-600">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="font-medium">{order.endTime}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedOrder(order.id)}
                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Join Order
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Progress</span>
                      <span>{Math.round((parseInt(order.currentQty) / parseInt(order.totalQty)) * 100)}% filled</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(parseInt(order.currentQty) / parseInt(order.totalQty)) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Order Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Join Group Order</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity Needed
                </label>
                <input
                  type="number"
                  value={joinQuantity}
                  onChange={(e) => setJoinQuantity(e.target.value)}
                  placeholder="Enter quantity"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Preference
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="cod"
                      checked={paymentPreference === 'cod'}
                      onChange={(e) => setPaymentPreference(e.target.value)}
                      className="mr-3"
                    />
                    <span className="text-sm">Cash on Delivery</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="advance"
                      checked={paymentPreference === 'advance'}
                      onChange={(e) => setPaymentPreference(e.target.value)}
                      className="mr-3"
                    />
                    <span className="text-sm">Pay in Advance (5% extra discount)</span>
                  </label>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleJoinOrder}
                className="flex-1 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <Check className="h-4 w-4 mr-2" />
                Confirm Join
              </button>
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupOrders;