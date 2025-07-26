import React, { useState } from 'react';
import { User, Phone, MapPin, Globe, Bell, Shield, LogOut, Edit2, Save, X } from 'lucide-react';

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Rajesh Kumar',
    businessType: 'Restaurant',
    phone: '+91 98765 43210',
    language: 'en',
    notifications: {
      groupOrders: true,
      priceAlerts: true,
      deliveryUpdates: true,
      aiSuggestions: false
    }
  });

  const businessTypes = [
    'Restaurant',
    'Hotel',
    'Catering Service',
    'Food Truck',
    'Bakery',
    'Cafe',
    'Cloud Kitchen',
    'Other'
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिंदी (Hindi)' },
    { code: 'bn', name: 'বাংলা (Bengali)' },
    { code: 'te', name: 'తెలుగు (Telugu)' },
    { code: 'ta', name: 'தமிழ் (Tamil)' }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
  };

  const handleNotificationChange = (key: string, value: boolean) => {
    setFormData({
      ...formData,
      notifications: {
        ...formData.notifications,
        [key]: value
      }
    });
  };

  const handleLogout = () => {
    if (confirm('Are you sure you want to logout?')) {
      // Logout logic would go here
      alert('Logout functionality would be implemented here');
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Profile Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Edit2 className="h-4 w-4 mr-2" />
              Edit Profile
            </button>
          ) : (
            <div className="flex space-x-2">
              <button
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center px-4 py-2 bg-gray-600 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X className="h-4 w-4 mr-2" />
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4">
          {/* Profile Picture */}
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {formData.name.charAt(0)}
              </span>
            </div>
            {isEditing && (
              <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                Change Photo
              </button>
            )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-1" />
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{formData.name}</p>
            )}
          </div>

          {/* Business Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Type
            </label>
            {isEditing ? (
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {businessTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            ) : (
              <p className="text-gray-900">{formData.businessType}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 inline mr-1" />
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            ) : (
              <p className="text-gray-900">{formData.phone}</p>
            )}
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Globe className="h-4 w-4 inline mr-1" />
              Language Preference
            </label>
            {isEditing ? (
              <select
                value={formData.language}
                onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>{lang.name}</option>
                ))}
              </select>
            ) : (
              <p className="text-gray-900">
                {languages.find(lang => lang.code === formData.language)?.name}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Cluster Information */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Cluster Membership</h2>
        <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <MapPin className="h-5 w-5 text-green-600 mr-3" />
            <div>
              <p className="font-medium text-gray-900">Lajpat Nagar Cluster</p>
              <p className="text-sm text-gray-600">24 active members • Joined Jan 2024</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
            Active
          </span>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <Bell className="h-5 w-5 text-gray-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
        </div>
        
        <div className="space-y-4">
          {[
            { key: 'groupOrders', label: 'New Group Orders', desc: 'Get notified when new group orders are available' },
            { key: 'priceAlerts', label: 'Price Alerts', desc: 'Alerts when prices drop for items you frequently buy' },
            { key: 'deliveryUpdates', label: 'Delivery Updates', desc: 'Real-time updates on your order status' },
            { key: 'aiSuggestions', label: 'AI Suggestions', desc: 'Personalized recommendations from Sanchaar AI' }
          ].map((setting) => (
            <div key={setting.key} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{setting.label}</p>
                <p className="text-sm text-gray-600">{setting.desc}</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.notifications[setting.key as keyof typeof formData.notifications]}
                  onChange={(e) => handleNotificationChange(setting.key, e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Security & Privacy */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <Shield className="h-5 w-5 text-gray-600 mr-2" />
          <h2 className="text-lg font-semibold text-gray-900">Security & Privacy</h2>
        </div>
        
        <div className="space-y-3">
          <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <p className="font-medium text-gray-900">Change Password</p>
            <p className="text-sm text-gray-600">Update your account password</p>
          </button>
          
          <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <p className="font-medium text-gray-900">Privacy Settings</p>
            <p className="text-sm text-gray-600">Control who can see your information</p>
          </button>
          
          <button className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <p className="font-medium text-gray-900">Data Export</p>
            <p className="text-sm text-gray-600">Download your account data</p>
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <button
          onClick={handleLogout}
          className="flex items-center justify-center w-full p-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
        >
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;