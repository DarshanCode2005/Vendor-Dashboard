import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Users, 
  Bot, 
  TrendingUp, 
  Package, 
  Clock,
  MapPin,
  ArrowRight,
  DollarSign,
  Lightbulb
} from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back!</h1>
            <div className="flex items-center mt-2 text-blue-100">
              <MapPin className="h-4 w-4 mr-1" />
              <span>Lajpat Nagar Cluster</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-blue-100">Today's Date</p>
            <p className="text-lg font-semibold">{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Deliveries</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">3</p>
              <p className="text-sm text-green-600 mt-1">2 completed, 1 pending</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Package className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Ongoing Group Orders</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">5</p>
              <p className="text-sm text-blue-600 mt-1">Join 2 ending soon</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">AI Suggestions</p>
              <p className="text-3xl font-bold text-gray-900 mt-2">4</p>
              <p className="text-sm text-orange-600 mt-1">New recommendations</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-lg">
              <Lightbulb className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            to="/vendor/request"
            className="flex items-center p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-colors group"
          >
            <Plus className="h-5 w-5 mr-3" />
            <span className="font-medium">Post Raw Material</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            to="/vendor/group-orders"
            className="flex items-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-colors group"
          >
            <Package className="h-5 w-5 mr-3" />
            <span className="font-medium">Join Group Order</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            to="/vendor/ai-assistant"
            className="flex items-center p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-colors group"
          >
            <Bot className="h-5 w-5 mr-3" />
            <span className="font-medium">Chat with Sanchaar AI</span>
            <ArrowRight className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        </div>
      </div>

      {/* Recent Activity & Recommendations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            <Link to="/vendor/orders" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { item: 'Tomatoes', qty: '50 kg', status: 'Delivered', time: '2 hours ago' },
              { item: 'Onions', qty: '30 kg', status: 'Out for delivery', time: '4 hours ago' },
              { item: 'Potatoes', qty: '40 kg', status: 'Processing', time: '1 day ago' },
            ].map((order, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{order.item}</p>
                  <p className="text-sm text-gray-600">{order.qty}</p>
                </div>
                <div className="text-right">
                  <p className={`text-sm font-medium ${
                    order.status === 'Delivered' ? 'text-green-600' :
                    order.status === 'Out for delivery' ? 'text-blue-600' : 'text-orange-600'
                  }`}>
                    {order.status}
                  </p>
                  <p className="text-xs text-gray-500">{order.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">AI Recommendations</h2>
            <Link to="/vendor/ai-assistant" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              Chat with AI
            </Link>
          </div>
          <div className="space-y-3">
            {[
              { 
                title: 'Price Alert: Tomato rates dropping', 
                desc: 'Good time to bulk order. Estimated savings: ₹200/kg',
                type: 'savings'
              },
              { 
                title: 'Inventory Suggestion', 
                desc: 'Based on your usage, consider ordering rice soon',
                type: 'inventory'
              },
              { 
                title: 'Group Order Opportunity', 
                desc: 'Join onion bulk order - closes in 2 hours',
                type: 'opportunity'
              },
            ].map((rec, index) => (
              <div key={index} className="p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-medium text-gray-900 text-sm">{rec.title}</p>
                <p className="text-xs text-gray-600 mt-1">{rec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">This Month's Summary</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="bg-green-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">₹15,420</p>
            <p className="text-sm text-gray-600">Total Spent</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">₹2,180</p>
            <p className="text-sm text-gray-600">Saved vs Solo</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto">
              <Package className="h-6 w-6 text-orange-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">23</p>
            <p className="text-sm text-gray-600">Orders Placed</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <p className="text-2xl font-bold text-gray-900 mt-2">4.8</p>
            <p className="text-sm text-gray-600">Avg. Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;