import React, { useState } from 'react';
import { Package, Clock, Truck, CheckCircle, X, MapPin } from 'lucide-react';

const TrackOrders = () => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'delivered' | 'cancelled'>('ongoing');

  const orders = {
    ongoing: [
      {
        id: 'ORD-001',
        items: [{ name: 'Premium Basmati Rice', qty: '25 kg' }],
        status: 'out_for_delivery',
        statusText: 'Out for Delivery',
        supplier: 'Fresh Mart Suppliers',
        orderDate: '2025-01-12',
        expectedDelivery: '2025-01-13',
        total: '₹2,125',
        trackingEnabled: true
      },
      {
        id: 'ORD-002',
        items: [
          { name: 'Red Onions', qty: '20 kg' },
          { name: 'Tomatoes', qty: '15 kg' }
        ],
        status: 'accepted',
        statusText: 'Order Accepted',
        supplier: 'Vegetable Hub',
        orderDate: '2025-01-12',
        expectedDelivery: '2025-01-14',
        total: '₹890',
        trackingEnabled: false
      },
      {
        id: 'ORD-003',
        items: [{ name: 'Cooking Oil', qty: '10 L' }],
        status: 'requested',
        statusText: 'Order Requested',
        supplier: 'Oil Masters',
        orderDate: '2025-01-12',
        expectedDelivery: '2025-01-15',
        total: '₹1,200',
        trackingEnabled: false
      }
    ],
    delivered: [
      {
        id: 'ORD-004',
        items: [{ name: 'Wheat Flour', qty: '50 kg' }],
        status: 'delivered',
        statusText: 'Delivered',
        supplier: 'Grain Direct',
        orderDate: '2025-01-10',
        deliveredDate: '2025-01-11',
        total: '₹1,500',
        rating: 5
      },
      {
        id: 'ORD-005',
        items: [
          { name: 'Potatoes', qty: '30 kg' },
          { name: 'Carrots', qty: '10 kg' }
        ],
        status: 'delivered',
        statusText: 'Delivered',
        supplier: 'Farm Fresh',
        orderDate: '2025-01-09',
        deliveredDate: '2025-01-10',
        total: '₹780',
        rating: 4
      }
    ],
    cancelled: [
      {
        id: 'ORD-006',
        items: [{ name: 'Green Chilies', qty: '5 kg' }],
        status: 'cancelled',
        statusText: 'Cancelled',
        supplier: 'Spice World',
        orderDate: '2025-01-08',
        cancelledDate: '2025-01-09',
        total: '₹250',
        cancelReason: 'Out of stock'
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'out_for_delivery': return 'text-blue-600 bg-blue-100';
      case 'accepted': return 'text-orange-600 bg-orange-100';
      case 'requested': return 'text-gray-600 bg-gray-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="h-5 w-5" />;
      case 'out_for_delivery': return <Truck className="h-5 w-5" />;
      case 'accepted': return <Package className="h-5 w-5" />;
      case 'requested': return <Clock className="h-5 w-5" />;
      case 'cancelled': return <X className="h-5 w-5" />;
      default: return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Track Orders</h1>
        
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          {[
            { key: 'ongoing', label: 'Ongoing', count: orders.ongoing.length },
            { key: 'delivered', label: 'Delivered', count: orders.delivered.length },
            { key: 'cancelled', label: 'Cancelled', count: orders.cancelled.length }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.key 
                  ? 'bg-white text-blue-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders[activeTab].map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className={`p-2 rounded-lg mr-3 ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                    <p className="text-sm text-gray-600">{order.supplier}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900">{order.total}</p>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
                    {order.statusText}
                  </span>
                </div>
              </div>

              {/* Items */}
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Items:</p>
                <div className="space-y-1">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm text-gray-600">
                      <span>{item.name}</span>
                      <span>{item.qty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Dates */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <p className="text-gray-600">Order Date</p>
                  <p className="font-medium text-gray-900">{new Date(order.orderDate).toLocaleDateString()}</p>
                </div>
                {order.status !== 'cancelled' && (
                  <div>
                    <p className="text-gray-600">
                      {activeTab === 'delivered' ? 'Delivered' : 'Expected Delivery'}
                    </p>
                    <p className="font-medium text-gray-900">
                      {activeTab === 'delivered' 
                        ? new Date((order as any).deliveredDate).toLocaleDateString()
                        : new Date((order as any).expectedDelivery).toLocaleDateString()
                      }
                    </p>
                  </div>
                )}
                {order.status === 'cancelled' && (
                  <div>
                    <p className="text-gray-600">Cancelled Date</p>
                    <p className="font-medium text-gray-900">{new Date((order as any).cancelledDate).toLocaleDateString()}</p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {order.status === 'out_for_delivery' && (order as any).trackingEnabled && (
                    <button className="flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors">
                      <MapPin className="h-4 w-4 mr-1" />
                      Live Tracking
                    </button>
                  )}
                  {activeTab === 'delivered' && !(order as any).rating && (
                    <button className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-lg hover:bg-green-200 transition-colors">
                      Rate Order
                    </button>
                  )}
                  {order.status === 'cancelled' && (
                    <span className="text-sm text-red-600">
                      Reason: {(order as any).cancelReason}
                    </span>
                  )}
                </div>
                
                {(order.status === 'requested' || order.status === 'accepted') && (
                  <button className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-lg hover:bg-red-200 transition-colors">
                    Cancel Order
                  </button>
                )}
              </div>

              {/* Order Progress for ongoing orders */}
              {activeTab === 'ongoing' && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">Order Progress</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {['requested', 'accepted', 'out_for_delivery', 'delivered'].map((step, index) => {
                      const isCompleted = ['requested', 'accepted', 'out_for_delivery'].indexOf(order.status) >= index;
                      const isActive = ['requested', 'accepted', 'out_for_delivery'].indexOf(order.status) === index;
                      
                      return (
                        <React.Fragment key={step}>
                          <div className={`w-3 h-3 rounded-full ${
                            isCompleted ? 'bg-blue-600' : isActive ? 'bg-blue-300' : 'bg-gray-300'
                          }`} />
                          {index < 3 && <div className={`flex-1 h-0.5 ${
                            isCompleted && index < ['requested', 'accepted', 'out_for_delivery'].indexOf(order.status) 
                              ? 'bg-blue-600' : 'bg-gray-300'
                          }`} />}
                        </React.Fragment>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-600">
                    <span>Requested</span>
                    <span>Accepted</span>
                    <span>Out for Delivery</span>
                    <span>Delivered</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {orders[activeTab].length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Package className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No {activeTab} orders</h3>
            <p className="text-gray-600">
              {activeTab === 'ongoing' && "You don't have any ongoing orders at the moment."}
              {activeTab === 'delivered' && "No delivered orders to show."}
              {activeTab === 'cancelled' && "No cancelled orders found."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrders;