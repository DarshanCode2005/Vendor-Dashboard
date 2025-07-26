import React, { useState } from 'react';
import { Star, CheckCircle, Clock, Package } from 'lucide-react';

const RateSupplier = () => {
  const [ratings, setRatings] = useState<{[key: number]: number}>({});
  const [feedback, setFeedback] = useState<{[key: number]: string}>({});
  const [selectedIssues, setSelectedIssues] = useState<{[key: number]: string[]}>({});

  const completedOrders = [
    {
      id: 1,
      orderId: 'ORD-004',
      supplier: 'Fresh Mart Suppliers',
      items: [{ name: 'Premium Basmati Rice', qty: '25 kg' }],
      deliveredDate: '2025-01-11',
      total: '₹2,125',
      rated: false
    },
    {
      id: 2,
      orderId: 'ORD-005',
      supplier: 'Vegetable Hub',
      items: [
        { name: 'Red Onions', qty: '20 kg' },
        { name: 'Tomatoes', qty: '15 kg' }
      ],
      deliveredDate: '2025-01-10',
      total: '₹890',
      rated: false
    },
    {
      id: 3,
      orderId: 'ORD-006',
      supplier: 'Grain Direct',
      items: [{ name: 'Wheat Flour', qty: '50 kg' }],
      deliveredDate: '2025-01-09',
      total: '₹1,500',
      rated: true,
      rating: 5,
      customerFeedback: 'Excellent quality and timely delivery!'
    }
  ];

  const issueOptions = [
    'Late Delivery',
    'Poor Quality',
    'Incomplete Order',
    'Damaged Packaging',
    'Wrong Items',
    'Unprofessional Behavior'
  ];

  const handleRatingChange = (orderId: number, rating: number) => {
    setRatings({ ...ratings, [orderId]: rating });
  };

  const handleFeedbackChange = (orderId: number, text: string) => {
    setFeedback({ ...feedback, [orderId]: text });
  };

  const handleIssueToggle = (orderId: number, issue: string) => {
    const currentIssues = selectedIssues[orderId] || [];
    const updatedIssues = currentIssues.includes(issue)
      ? currentIssues.filter(i => i !== issue)
      : [...currentIssues, issue];
    
    setSelectedIssues({ ...selectedIssues, [orderId]: updatedIssues });
  };

  const handleSubmitRating = (orderId: number) => {
    // Submit rating logic here
    alert(`Rating submitted for order ${orderId}`);
  };

  const StarRating = ({ rating, onRatingChange, size = 'w-6 h-6' }: { 
    rating: number; 
    onRatingChange: (rating: number) => void;
    size?: string;
  }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => onRatingChange(star)}
            className={`${size} ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            } hover:text-yellow-400 transition-colors`}
          >
            <Star className="w-full h-full fill-current" />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Rate Suppliers</h1>
        
        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Package className="h-5 w-5 text-blue-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-blue-600">Pending Ratings</p>
                <p className="text-2xl font-bold text-blue-900">
                  {completedOrders.filter(order => !order.rated).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-green-600">Completed Ratings</p>
                <p className="text-2xl font-bold text-green-900">
                  {completedOrders.filter(order => order.rated).length}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-600 mr-2" />
              <div>
                <p className="text-sm font-medium text-yellow-600">Average Rating Given</p>
                <p className="text-2xl font-bold text-yellow-900">4.8</p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders to Rate */}
        <div className="space-y-6">
          {completedOrders.map((order) => (
            <div key={order.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 mr-3">
                      Order #{order.orderId}
                    </h3>
                    {order.rated ? (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        Rated
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-medium rounded-full">
                        Pending Rating
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-1">{order.supplier}</p>
                  <p className="text-sm text-gray-500">
                    Delivered on {new Date(order.deliveredDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{order.total}</p>
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

              {order.rated ? (
                /* Already Rated */
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-700 mr-3">Your Rating:</span>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= (order.rating || 0) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({order.rating}/5)</span>
                  </div>
                  {order.customerFeedback && (
                    <p className="text-sm text-gray-600">"{order.customerFeedback}"</p>
                  )}
                </div>
              ) : (
                /* Rating Form */
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Rate this order (1-5 stars)
                    </label>
                    <StarRating
                      rating={ratings[order.id] || 0}
                      onRatingChange={(rating) => handleRatingChange(order.id, rating)}
                    />
                  </div>

                  {ratings[order.id] && ratings[order.id] <= 3 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What went wrong? (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {issueOptions.map((issue) => (
                          <label key={issue} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={(selectedIssues[order.id] || []).includes(issue)}
                              onChange={() => handleIssueToggle(order.id, issue)}
                              className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{issue}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Feedback (Optional)
                    </label>
                    <textarea
                      value={feedback[order.id] || ''}
                      onChange={(e) => handleFeedbackChange(order.id, e.target.value)}
                      placeholder="Share your experience with this supplier..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={() => handleSubmitRating(order.id)}
                      disabled={!ratings[order.id]}
                      className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                    >
                      Submit Rating
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {completedOrders.filter(order => !order.rated).length === 0 && (
          <div className="text-center py-12">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
            <p className="text-gray-600">You have rated all your recent orders.</p>
          </div>
        )}
      </div>

      {/* Rating Guidelines */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-medium text-blue-900 mb-2">Rating Guidelines:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>5 Stars:</strong> Excellent service, top quality, on-time delivery</li>
          <li>• <strong>4 Stars:</strong> Good service with minor issues</li>
          <li>• <strong>3 Stars:</strong> Average service, room for improvement</li>
          <li>• <strong>2 Stars:</strong> Below expectations, several issues</li>
          <li>• <strong>1 Star:</strong> Poor service, major problems</li>
        </ul>
      </div>
    </div>
  );
};

export default RateSupplier;