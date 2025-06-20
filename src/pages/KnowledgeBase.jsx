
import React, { useState, useEffect } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Search, Book, FileText, Upload, Tag, Info, CheckCircle, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDocument, setSelectedDocument] = useState(null);
  const { showToast, ToastContainer } = useToast();
  const [currentUser, setCurrentUser] = useState({ role: 'Developer' });

  useEffect(() => {
    // Get user data from local storage
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }
  }, []);

  const documents = [
    {
      id: 1,
      title: "Employee Handbook",
      category: "HR",
      tags: ["Policy", "Guidelines", "FAQ"],
      lastUpdated: "April 28, 2025",
      updatedBy: "HR Team",
      pinned: true,
      content: `
        # Employee Handbook
        
        ## Introduction
        Welcome to Srinishtha! This handbook contains important information about our company policies, benefits, and expectations.
        
        ## Work Hours and Schedule
        Our standard work hours are from 9:00 AM to 6:00 PM, Monday through Friday. We offer flexible work arrangements depending on your role and team requirements.
        
        ## Benefits
        - Health Insurance
        - Retirement Plan
        - Paid Time Off
        - Professional Development
        
        ## Code of Conduct
        All employees are expected to maintain professional behavior, respect diversity, and adhere to our ethics guidelines.
      `
    },
    {
      id: 2,
      title: "Project Management Guidelines",
      category: "Process",
      tags: ["Project", "Guidelines", "SOP"],
      lastUpdated: "May 1, 2025",
      updatedBy: "Project Team",
      pinned: false,
      content: `
        # Project Management Guidelines
        
        ## Project Lifecycle
        1. **Initiation**: Define the project scope and objectives
        2. **Planning**: Create detailed project plans and requirements
        3. **Execution**: Implement the project plan
        4. **Monitoring**: Track progress and make adjustments
        5. **Closure**: Finalize deliverables and review outcomes
        
        ## Documentation Requirements
        All projects must maintain the following documentation:
        - Project Charter
        - Requirements Document
        - Project Plan
        - Status Reports
        - Final Delivery Report
        
        ## Change Management
        Any changes to project scope, timeline, or budget must follow the change request process outlined in section 4.3.
      `
    },
    {
      id: 3,
      title: "Network Security Policy",
      category: "IT",
      tags: ["Security", "Policy", "IT"],
      lastUpdated: "April 15, 2025",
      updatedBy: "IT Security Team",
      pinned: true,
      content: `
        # Network Security Policy
        
        ## Password Requirements
        - Minimum 12 characters
        - Must include uppercase, lowercase, number, and special character
        - Changed every 90 days
        - Cannot reuse previous 10 passwords
        
        ## Data Classification
        1. **Public**: Information that can be freely shared
        2. **Internal**: Information for company use only
        3. **Confidential**: Sensitive information with restricted access
        4. **Restricted**: Highly sensitive information with strict access controls
        
        ## Incident Reporting
        All security incidents must be reported immediately to the IT Security team via the incident reporting portal or by email at security@srinishtha.com.
      `
    },
    {
      id: 4,
      title: "Marketing Brand Guidelines",
      category: "Marketing",
      tags: ["Brand", "Guidelines", "Marketing"],
      lastUpdated: "March 30, 2025",
      updatedBy: "Creative Team",
      pinned: false,
      content: `
        # Marketing Brand Guidelines
        
        ## Logo Usage
        - Always maintain the minimum clear space around the logo
        - Do not stretch, rotate, or alter the logo colors
        - Use the appropriate logo version for different backgrounds
        
        ## Color Palette
        - Primary: #9b87f5
        - Secondary: #7E69AB
        - Accent: #1EAEDB
        - Neutral: #8E9196
        
        ## Typography
        - Headings: Inter Bold
        - Body: Inter Regular
        - Accents: Inter Light Italic
        
        ## Brand Voice
        Our communication should be professional, approachable, and solutions-oriented. Avoid jargon and focus on clarity and value.
      `
    },
    {
      id: 5,
      title: "Expense Reimbursement Procedure",
      category: "Finance",
      tags: ["Finance", "Expenses", "SOP"],
      lastUpdated: "April 20, 2025",
      updatedBy: "Finance Department",
      pinned: false,
      content: `
        # Expense Reimbursement Procedure
        
        ## Eligible Expenses
        - Business travel (transportation, accommodation, meals)
        - Client meetings and entertainment
        - Professional development (conferences, courses)
        - Office supplies (when purchased by employee)
        
        ## Submission Process
        1. Complete the expense report form
        2. Attach all receipts and supporting documentation
        3. Obtain manager approval
        4. Submit to finance by the 5th of each month
        
        ## Reimbursement Timeline
        Approved expenses will be reimbursed within 15 business days of submission.
      `
    },
    {
      id: 6,
      title: "New Hire Onboarding Checklist",
      category: "HR",
      tags: ["HR", "Onboarding", "Checklist"],
      lastUpdated: "May 2, 2025",
      updatedBy: "HR Team",
      pinned: false,
      content: `
        # New Hire Onboarding Checklist
        
        ## Before First Day
        - Complete background check
        - Prepare workstation and equipment
        - Set up email and system accounts
        - Assign buddy/mentor
        
        ## First Day
        - Welcome and orientation
        - Complete remaining paperwork
        - IT setup and security training
        - Team introduction
        
        ## First Week
        - Department-specific training
        - Review job expectations
        - Schedule 1:1 meetings with key stakeholders
        
        ## First Month
        - Complete all mandatory training
        - Set performance objectives
        - 30-day check-in with manager
      `
    },
  ];

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'HR', name: 'HR' },
    { id: 'IT', name: 'IT' },
    { id: 'Process', name: 'Process' },
    { id: 'Marketing', name: 'Marketing' },
    { id: 'Finance', name: 'Finance' }
  ];

  const isAdmin = currentUser?.role === 'Admin' || currentUser?.role === 'HR';

  const handleUpload = () => {
    if (isAdmin) {
      showToast('Document upload functionality would appear here', 'info');
    } else {
      showToast('Only Admin and HR roles can upload documents', 'error');
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        doc.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const pinnedDocuments = filteredDocuments.filter(doc => doc.pinned);
  const regularDocuments = filteredDocuments.filter(doc => !doc.pinned);

  const handleViewDocument = (doc) => {
    setSelectedDocument(doc);
  };

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <PageHeader
          title="Knowledge Base"
          description="Access company documentation, policies, and guides"
          withParallax={true}
        />

        <div className="grid gap-6 mb-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Card title="Categories" icon={Book} animateOnScroll={true}>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      selectedCategory === category.id
                        ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </Card>

            {isAdmin && (
              <Card title="Admin Tools" icon={FileText} className="mt-6" animateOnScroll={true}>
                <div className="space-y-2">
                  <button
                    onClick={handleUpload}
                    className="w-full flex items-center px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Document
                  </button>
                  <button
                    className="w-full flex items-center px-3 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Manage Categories
                  </button>
                </div>
              </Card>
            )}
          </div>

          <div className="md:col-span-3">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
                placeholder="Search documents, tags, or categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {selectedDocument ? (
              <Card
                title={selectedDocument.title}
                footer={
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Last updated: {selectedDocument.lastUpdated} by {selectedDocument.updatedBy}
                    </div>
                    <button
                      onClick={() => setSelectedDocument(null)}
                      className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      Back to Documents
                    </button>
                  </div>
                }
                animateOnScroll={true}
              >
                <div className="flex flex-wrap mb-4 gap-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                    {selectedDocument.category}
                  </span>
                  {selectedDocument.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 rounded-full text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="prose dark:prose-invert max-w-none">
                  {selectedDocument.content.split('\n').map((line, index) => {
                    if (line.startsWith('# ')) {
                      return <h1 key={index} className="text-2xl font-bold mb-4">{line.substring(2)}</h1>;
                    } else if (line.startsWith('## ')) {
                      return <h2 key={index} className="text-xl font-semibold mt-6 mb-3">{line.substring(3)}</h2>;
                    } else if (line.startsWith('- ')) {
                      return <li key={index} className="ml-4">{line.substring(2)}</li>;
                    } else if (line.startsWith('1. ') || line.startsWith('2. ') || line.startsWith('3. ') || line.startsWith('4. ') || line.startsWith('5. ')) {
                      const num = parseInt(line.substring(0, 1));
                      return <div key={index} className="flex"><span className="mr-2 font-semibold">{num}.</span> <span>{line.substring(3)}</span></div>;
                    } else if (line.trim() === '') {
                      return <div key={index} className="h-4"></div>;
                    } else if (line.startsWith('**')) {
                      return <p key={index} className="font-bold">{line.replace(/\*\*/g, '')}</p>;
                    } else {
                      return <p key={index} className="mb-2">{line}</p>;
                    }
                  })}
                </div>
              </Card>
            ) : (
              <>
                {pinnedDocuments.length > 0 && (
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-primary-500" />
                      Important Documents
                    </h2>
                    <div className="grid gap-4 md:grid-cols-2">
                      {pinnedDocuments.map((doc) => (
                        <div
                          key={doc.id}
                          onClick={() => handleViewDocument(doc)}
                          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-primary-100 dark:border-primary-900 hover:shadow-md transition-all cursor-pointer card-hover animate-on-scroll"
                        >
                          <div className="flex justify-between mb-2">
                            <h3 className="font-medium text-gray-900 dark:text-white">{doc.title}</h3>
                            <span className="text-primary-500">
                              <CheckCircle className="h-5 w-5" />
                            </span>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Category: {doc.category}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {doc.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 rounded-full text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 flex items-center"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">All Documents</h2>
                  {regularDocuments.length === 0 ? (
                    <div className="text-center py-8">
                      <AlertTriangle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 dark:text-gray-400">No documents found matching your search criteria.</p>
                    </div>
                  ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                      {regularDocuments.map((doc) => (
                        <div
                          key={doc.id}
                          onClick={() => handleViewDocument(doc)}
                          className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer card-hover animate-on-scroll"
                        >
                          <div className="flex justify-between mb-2">
                            <h3 className="font-medium text-gray-900 dark:text-white">{doc.title}</h3>
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Category: {doc.category}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            Last updated: {doc.lastUpdated}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {doc.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center"
                              >
                                <Tag className="h-3 w-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default KnowledgeBase;
