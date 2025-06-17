
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { MapPin, Phone, Mail, Globe, ChevronDown, ChevronUp, Plane, AlertCircle, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Regional = () => {
  const [expandedOffice, setExpandedOffice] = useState(null);
  const [expandedSection, setExpandedSection] = useState('lodging');
  const { showToast, ToastContainer } = useToast();

  const offices = [
    {
      id: 1,
      city: 'Mumbai',
      country: 'India',
      address: '301, Srinishtha Tower, Andheri East, Mumbai - 400069',
      phone: '+91 22 1234 5678',
      email: 'mumbai@srinishtha.com',
      timezone: 'UTC+5:30',
      contacts: [
        { name: 'Priya Shah', title: 'Office Manager', email: 'priya.shah@srinishtha.com' },
        { name: 'Vikram Mehta', title: 'Regional Director', email: 'vikram.mehta@srinishtha.com' }
      ]
    },
    {
      id: 2,
      city: 'Bangalore',
      country: 'India',
      address: '42, Tech Park, Whitefield, Bangalore - 560066',
      phone: '+91 80 9876 5432',
      email: 'bangalore@srinishtha.com',
      timezone: 'UTC+5:30',
      contacts: [
        { name: 'Anil Kumar', title: 'Office Manager', email: 'anil.kumar@srinishtha.com' },
        { name: 'Deepika Patel', title: 'HR Lead', email: 'deepika.patel@srinishtha.com' }
      ]
    },
    {
      id: 3,
      city: 'Singapore',
      country: 'Singapore',
      address: '175 Bencoolen Street, #06-05, Singapore 189649',
      phone: '+65 6123 4567',
      email: 'singapore@srinishtha.com',
      timezone: 'UTC+8:00',
      contacts: [
        { name: 'Lee Ming', title: 'Office Manager', email: 'lee.ming@srinishtha.com' },
        { name: 'Sarah Tan', title: 'Regional Director', email: 'sarah.tan@srinishtha.com' }
      ]
    },
    {
      id: 4,
      city: 'London',
      country: 'United Kingdom',
      address: '10 Liverpool Street, London EC2M 7PD',
      phone: '+44 20 7123 4567',
      email: 'london@srinishtha.com',
      timezone: 'UTC+1:00/UTC+0:00',
      contacts: [
        { name: 'James Wilson', title: 'Office Manager', email: 'james.wilson@srinishtha.com' },
        { name: 'Emma Johnson', title: 'HR Lead', email: 'emma.johnson@srinishtha.com' }
      ]
    },
    {
      id: 5,
      city: 'New York',
      country: 'United States',
      address: '350 Fifth Avenue, Suite 4200, New York, NY 10118',
      phone: '+1 212 123 4567',
      email: 'newyork@srinishtha.com',
      timezone: 'UTC-4:00/UTC-5:00',
      contacts: [
        { name: 'Michael Smith', title: 'Office Manager', email: 'michael.smith@srinishtha.com' },
        { name: 'Jennifer Davis', title: 'Regional Director', email: 'jennifer.davis@srinishtha.com' }
      ]
    },
  ];

  const emergencyContacts = [
    { title: 'Global Emergency Hotline', contact: '+1 800 123 4567', available: '24/7' },
    { title: 'Travel Assistance', contact: '+1 888 987 6543', available: '24/7' },
    { title: 'Medical Emergencies', contact: '+1 877 765 4321', available: '24/7' },
    { title: 'IT Support (Global)', contact: '+1 833 456 7890', available: '24/7' },
    { title: 'Security Team', contact: '+1 844 567 8901', available: '24/7' },
  ];

  const travelGuidelines = [
    {
      section: 'lodging',
      title: 'Lodging Guidelines',
      items: [
        'Book hotels through the corporate travel portal only',
        'Standard room allocation: up to $250/night in Tier 1 cities, $180/night in Tier 2 cities',
        'Extended stays (>7 days) should use corporate apartments when available',
        'Hotel reward points may be kept by employees for personal use',
        'Room upgrades are at employee\'s personal expense'
      ]
    },
    {
      section: 'transportation',
      title: 'Transportation Guidelines',
      items: [
        'Economy class for flights under 6 hours; business class permitted for longer flights',
        'Use ride-sharing services when possible instead of taxis',
        'Rental cars should be mid-size or smaller unless traveling with 3+ colleagues',
        'Train travel should be booked at standard/second class for journeys under 2 hours',
        'Use public transportation where safe and efficient'
      ]
    },
    {
      section: 'meals',
      title: 'Meal Allowances',
      items: [
        'Daily meal allowance: $75 in Tier 1 cities, $60 in Tier 2 cities',
        'Client meals require itemized receipts and attendee list',
        'Alcohol is reimbursable only for client entertainment (limit: 2 drinks per person)',
        'Team meals require manager pre-approval for groups of 4+',
        'Breakfast included with hotel stay should not be claimed separately'
      ]
    },
    {
      section: 'visas',
      title: 'Visa & Documentation',
      items: [
        'Request visas at least 4 weeks before intended travel date',
        'Company covers all visa processing fees and related expenses',
        'Keep digital copies of all travel documents in the company travel app',
        'Business travel insurance is automatically provided for all employees',
        'For high-risk countries, security briefing is mandatory before travel'
      ]
    }
  ];

  const toggleOffice = (id) => {
    setExpandedOffice(expandedOffice === id ? null : id);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title="Regional & Travel"
          description="Access office locations, travel guidelines, and emergency contacts"
          withParallax={true}
        />

        <div className="grid gap-6 mb-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Office Locations</h2>
            <div className="space-y-4">
              {offices.map((office) => (
                <div 
                  key={office.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out animate-on-scroll"
                >
                  <div 
                    className="p-4 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleOffice(office.id)}
                  >
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary-500 mr-2" />
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {office.city}, {office.country}
                      </h3>
                    </div>
                    <button 
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      aria-expanded={expandedOffice === office.id}
                    >
                      {expandedOffice === office.id ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {expandedOffice === office.id && (
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                        {office.address}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        <div className="flex items-center">
                          <Phone className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{office.phone}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{office.email}</span>
                        </div>
                        <div className="flex items-center">
                          <Globe className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">Timezone: {office.timezone}</span>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Contacts</h4>
                        <div className="space-y-2">
                          {office.contacts.map((contact, index) => (
                            <div key={index} className="flex flex-col">
                              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{contact.name}</span>
                              <span className="text-xs text-gray-600 dark:text-gray-400">{contact.title} • {contact.email}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Emergency Contacts</h2>
            <Card animateOnScroll={true} className="mb-6">
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-red-50 dark:bg-red-900/30 rounded-md border border-red-200 dark:border-red-800">
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                  <p className="text-sm text-red-800 dark:text-red-300">
                    For emergencies while traveling, please use these global contacts
                  </p>
                </div>
                
                <div className="space-y-3">
                  {emergencyContacts.map((item, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Available: {item.available}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{item.contact}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/30 rounded-md border border-green-200 dark:border-green-800">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                  <p className="text-sm text-green-800 dark:text-green-300">
                    Save these numbers in your phone before traveling
                  </p>
                </div>
              </div>
            </Card>

            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Travel Guidelines</h2>
            <Card icon={Plane} animateOnScroll={true}>
              <div className="space-y-4">
                {travelGuidelines.map((guideline) => (
                  <div key={guideline.section} className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
                    <div 
                      className={`p-4 flex justify-between items-center cursor-pointer ${
                        expandedSection === guideline.section ? 'bg-primary-50 dark:bg-primary-900/20' : 'bg-white dark:bg-gray-800'
                      }`}
                      onClick={() => toggleSection(guideline.section)}
                    >
                      <h3 className={`font-medium ${
                        expandedSection === guideline.section ? 'text-primary-700 dark:text-primary-400' : 'text-gray-900 dark:text-white'
                      }`}>
                        {guideline.title}
                      </h3>
                      <button 
                        className={`${
                          expandedSection === guideline.section ? 'text-primary-500' : 'text-gray-500'
                        } hover:text-gray-700 dark:hover:text-gray-300`}
                        aria-expanded={expandedSection === guideline.section}
                      >
                        {expandedSection === guideline.section ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </button>
                    </div>

                    {expandedSection === guideline.section && (
                      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                        <ul className="space-y-2 list-disc list-inside">
                          {guideline.items.map((item, index) => (
                            <li key={index} className="text-sm text-gray-700 dark:text-gray-300">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default Regional;
