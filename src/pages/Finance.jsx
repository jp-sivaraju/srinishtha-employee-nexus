
import React, { useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { DollarSign, Calendar, Upload, File, FileText, CheckCircle, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Finance = () => {
  const [activeTab, setActiveTab] = useState('expenses');
  const [expenseForm, setExpenseForm] = useState({
    category: 'travel',
    amount: '',
    date: '',
    description: '',
    receipt: null
  });
  const { showToast, ToastContainer } = useToast();

  const expenseCategories = [
    { value: 'travel', label: 'Travel' },
    { value: 'meals', label: 'Meals & Entertainment' },
    { value: 'office', label: 'Office Supplies' },
    { value: 'software', label: 'Software & Subscriptions' },
    { value: 'training', label: 'Training & Conferences' },
    { value: 'other', label: 'Other' }
  ];

  const reimbursements = [
    { id: 'exp1', date: 'May 3, 2025', amount: '$145.50', category: 'Travel', description: 'Client meeting transportation', status: 'approved' },
    { id: 'exp2', date: 'April 28, 2025', amount: '$75.25', category: 'Meals', description: 'Team lunch', status: 'pending' },
    { id: 'exp3', date: 'April 25, 2025', amount: '$450.00', category: 'Training', description: 'React conference ticket', status: 'approved' },
    { id: 'exp4', date: 'April 20, 2025', amount: '$35.99', category: 'Software', description: 'Monthly Figma subscription', status: 'approved' },
    { id: 'exp5', date: 'April 15, 2025', amount: '$28.75', category: 'Office', description: 'Notebook and pens', status: 'rejected', reason: 'Missing receipt' }
  ];

  const invoices = [
    { id: 'inv1', number: 'INV-2025-042', client: 'ABC Corporation', date: 'April 30, 2025', amount: '$12,500.00', status: 'paid' },
    { id: 'inv2', number: 'INV-2025-041', client: 'XYZ Inc.', date: 'April 15, 2025', amount: '$8,750.00', status: 'pending' },
    { id: 'inv3', number: 'INV-2025-040', client: 'Acme Ltd.', date: 'March 31, 2025', amount: '$15,200.00', status: 'paid' },
    { id: 'inv4', number: 'INV-2025-039', client: 'Global Tech', date: 'March 15, 2025', amount: '$6,400.00', status: 'paid' },
    { id: 'inv5', number: 'INV-2025-038', client: 'Stellar Systems', date: 'February 28, 2025', amount: '$9,800.00', status: 'overdue' }
  ];

  const handleExpenseFormChange = link => {
    const { name, value, files } = e.target;
    if (name === 'receipt' && files) {
      setExpenseForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setExpenseForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleExpenseSubmit = link => {
    e.preventDefault();
    showToast('Expense claim submitted successfully!', 'success');
    setExpenseForm({
      category: 'travel',
      amount: '',
      date: '',
      description: '',
      receipt: null
    });
  };

  const handleFileUpload = () => {
    showToast('Invoice uploaded successfully!', 'success');
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'approved':
      case 'paid':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'pending':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
      case 'rejected':
      case 'overdue':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title="Finance Tools"
          description="Submit expenses, track reimbursements, and manage invoices"
          withParallax={true}
        />

        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('expenses')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'expenses'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Expense Claims
              </button>
              <button
                onClick={() => setActiveTab('reimbursements')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'reimbursements'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Reimbursement Tracker
              </button>
              <button
                onClick={() => setActiveTab('invoices')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'invoices'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Invoices
              </button>
            </nav>
          </div>
        </div>

        {activeTab === 'expenses' && (
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            <Card title="Submit Expense Claim" icon={DollarSign} animateOnScroll={true}>
              <form onSubmit={handleExpenseSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Expense Category
                  </label>
                  <select
                    name="category"
                    value={expenseForm.category}
                    onChange={handleExpenseFormChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                    required
                  >
                    {expenseCategories.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Amount
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">$</span>
                    </div>
                    <input
                      type="number"
                      name="amount"
                      value={expenseForm.amount}
                      onChange={handleExpenseFormChange}
                      className="w-full pl-8 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Date of Expense
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={expenseForm.date}
                    onChange={handleExpenseFormChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={expenseForm.description}
                    onChange={handleExpenseFormChange}
                    rows="3"
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                    placeholder="Brief description of the expense"
                    required
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                    Upload Receipt
                  </label>
                  <input
                    type="file"
                    name="receipt"
                    onChange={handleExpenseFormChange}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Accepted formats: JPG, PNG, PDF. Max size: 5MB
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Submit Claim
                  </button>
                </div>
              </form>
            </Card>

            <Card title="Monthly Summary" icon={Calendar} animateOnScroll={true}>
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Expense Breakdown</h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Travel</span>
                      <span>$580.25</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Meals & Entertainment</span>
                      <span>$320.75</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Software & Subscriptions</span>
                      <span>$240.50</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Office Supplies</span>
                      <span>$125.30</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '12%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-800 dark:text-white mb-4">Monthly Stats</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Total Expenses</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">$1,266.80</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Pending Claims</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Approved</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">$1,115.55</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Rejected</p>
                    <p className="text-2xl font-bold text-red-600 dark:text-red-400">$75.25</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'reimbursements' && (
          <div className="mb-8">
            <Card title="Reimbursement History" icon={DollarSign} animateOnScroll={true}>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {reimbursements.map((reimbursement) => (
                      <tr key={reimbursement.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {reimbursement.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {reimbursement.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {reimbursement.description}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
                          {reimbursement.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(reimbursement.status)}`}>
                            {reimbursement.status.charAt(0).toUpperCase() + reimbursement.status.slice(1)}
                            {reimbursement.reason && (
                              <span className="block mt-1 text-xs text-red-600 dark:text-red-400">{reimbursement.reason}</span>
                            )}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 animate-on-scroll">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Approved Expenses</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">$595.50</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 animate-on-scroll">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 mr-4">
                    <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Review</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">$75.25</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6 animate-on-scroll">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mr-4">
                    <Calendar className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Next Reimbursement</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">May 15, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Invoice Management</h2>
              <button 
                className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
                onClick={handleFileUpload}
              >
                <Upload className="h-4 w-4 mr-2" />
                Upload Invoice
              </button>
            </div>

            <Card icon={File} animateOnScroll={true}>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Invoice #
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {invoices.map((invoice) => (
                      <tr key={invoice.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
                          {invoice.number}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {invoice.client}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-300">
                          {invoice.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-300">
                          {invoice.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusClass(invoice.status)}`}>
                            {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                          <button className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300 mr-3">
                            View
                          </button>
                          <button className="font-medium text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-300">
                            Download
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div className="mt-6 bg-white dark:bg-gray-800 shadow rounded-lg p-6 animate-on-scroll">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Invoice Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Total Outstanding</p>
                  <p className="text-2xl font-semibold text-gray-900 dark:text-white">$18,150.00</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Overdue</p>
                  <p className="text-2xl font-semibold text-red-600 dark:text-red-400">$9,800.00</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Pending</p>
                  <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400">$8,750.00</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Paid (This Month)</p>
                  <p className="text-2xl font-semibold text-green-600 dark:text-green-400">$34,100.00</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default Finance;
