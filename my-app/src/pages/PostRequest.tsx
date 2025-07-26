import React, { useState } from 'react';
import { Plus, Calendar, AlertCircle, CheckCircle } from 'lucide-react';

const PostRequest = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    itemName: '',
    quantity: '',
    unit: 'kg',
    priority: 'flexible',
    deliveryDate: '',
    notes: ''
  });

  const commonItems = [
    'Tomatoes', 'Onions', 'Potatoes', 'Carrots', 'Spinach', 'Rice', 'Wheat Flour', 
    'Cooking Oil', 'Sugar', 'Salt', 'Ginger', 'Garlic', 'Green Chilies', 'Milk'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {showSuccess && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
          <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
          <div>
            <p className="text-green-800 font-medium">Request Posted Successfully!</p>
            <p className="text-green-700 text-sm">Your request has been added to the cluster pool.</p>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center mb-6">
          <div className="bg-blue-100 p-3 rounded-lg mr-4">
            <Plus className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Post Raw Material Request</h1>
            <p className="text-gray-600">Add your requirement to the cluster pool</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Item Name *
            </label>
            <input
              type="text"
              list="common-items"
              value={formData.itemName}
              onChange={(e) => setFormData({ ...formData, itemName: e.target.value })}
              placeholder="Start typing item name..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <datalist id="common-items">
              {commonItems.map((item, index) => (
                <option key={index} value={item} />
              ))}
            </datalist>
            <div className="mt-2 flex flex-wrap gap-2">
              {commonItems.slice(0, 6).map((item, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setFormData({ ...formData, itemName: item })}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantity *
              </label>
              <input
                type="number"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="0"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                min="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Unit
              </label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="kg">Kilograms (kg)</option>
                <option value="g">Grams (g)</option>
                <option value="l">Litres (l)</option>
                <option value="ml">Millilitres (ml)</option>
                <option value="pieces">Pieces</option>
                <option value="boxes">Boxes</option>
                <option value="bags">Bags</option>
              </select>
            </div>
          </div>

          {/* Priority */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Priority Level
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, priority: 'urgent' })}
                className={`p-4 border-2 rounded-lg text-left transition-colors ${
                  formData.priority === 'urgent'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-red-300'
                }`}
              >
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="font-medium text-gray-900">Urgent</span>
                </div>
                <p className="text-sm text-gray-600">Need within 24 hours</p>
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, priority: 'flexible' })}
                className={`p-4 border-2 rounded-lg text-left transition-colors ${
                  formData.priority === 'flexible'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-green-300'
                }`}
              >
                <div className="flex items-center mb-2">
                  <Calendar className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-medium text-gray-900">Flexible</span>
                </div>
                <p className="text-sm text-gray-600">Can wait for better deals</p>
              </button>
            </div>
          </div>

          {/* Preferred Delivery Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Delivery Date
            </label>
            <input
              type="date"
              value={formData.deliveryDate}
              onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Any specific requirements, quality preferences, etc."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-4">
            <button
              type="submit"
              className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors"
            >
              Post Request
            </button>
            <button
              type="button"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Save as Draft
            </button>
          </div>
        </form>
      </div>

      {/* Information Card */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">How it works:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Your request will be visible to all cluster members</li>
          <li>• Similar requests will be grouped for better deals</li>
          <li>• You'll be notified when suppliers respond</li>
          <li>• Join group orders to save on bulk pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default PostRequest;