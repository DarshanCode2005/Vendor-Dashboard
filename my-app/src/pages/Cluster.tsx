import React, { useState } from 'react';
import { MapPin, Users, Plus, Share2, Copy } from 'lucide-react';

const Cluster = () => {
  const [activeTab, setActiveTab] = useState<'join' | 'create'>('join');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const nearbyCluster = [
    { name: 'Lajpat Nagar Market Cluster', distance: '0.5 km', members: 24, active: true },
    { name: 'Khan Market Vendors', distance: '1.2 km', members: 18, active: false },
    { name: 'Sarojini Nagar Hub', distance: '2.1 km', members: 31, active: false },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Join or Create Cluster</h1>
        
        {/* Tab Navigation */}
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-6">
          <button
            onClick={() => setActiveTab('join')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'join' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Join Nearby Cluster
          </button>
          <button
            onClick={() => setActiveTab('create')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'create' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Create New Cluster
          </button>
        </div>

        {activeTab === 'join' && (
          <div className="space-y-4">
            {/* Current Location */}
            <div className="flex items-center space-x-2 p-4 bg-blue-50 rounded-lg">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span className="text-sm text-blue-800">
                Detected Location: Lajpat Nagar Central Market, New Delhi
              </span>
            </div>

            {/* Nearby Clusters */}
            <div className="space-y-3">
              {nearbyCluster.map((cluster, index) => (
                <div
                  key={index}
                  className={`p-4 border rounded-lg transition-colors ${
                    cluster.active 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-white hover:border-blue-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">{cluster.name}</h3>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {cluster.distance}
                        </span>
                        <span className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {cluster.members} members
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {cluster.active ? (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          Current
                        </span>
                      ) : (
                        <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                          Join Cluster
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'create' && (
          <div className="space-y-6">
            {!showCreateForm ? (
              <div className="text-center py-8">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Plus className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Create Your Own Cluster</h3>
                <p className="text-gray-600 mb-6">
                  Start a new cluster in your area and invite other vendors to join
                </p>
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Creating
                </button>
              </div>
            ) : (
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cluster Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Khan Market Vendor Hub"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cluster Location
                  </label>
                  <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm text-gray-600">
                      Auto-detected: Lajpat Nagar Central Market, New Delhi
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Invite Vendors
                  </label>
                  <div className="space-y-2">
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <div className="flex space-x-2">
                      <button
                        type="button"
                        className="flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share via WhatsApp
                      </button>
                      <button
                        type="button"
                        className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy Invite Link
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Create Cluster
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateForm(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cluster;