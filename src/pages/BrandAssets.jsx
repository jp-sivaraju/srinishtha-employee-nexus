
import React, { useEffect, useState } from 'react';
import { AppLayout } from '../components/layout/AppLayout';
import { PageHeader } from '../components/ui/PageHeader';
import { Card } from '../components/ui/Card';
import { Download, Image, FileText, FileImage, File, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BrandAssets = () => {
  const [filter, setFilter] = useState('');
  const [activeTab, setActiveTab] = useState('logos');
  const { showToast, ToastContainer } = useToast();

  useEffect(() => {
    // Initialize parallax effect
    const handleScroll = () => {
      const header = document.getElementById('brandParallaxHeader');
      if (header) {
        const scrollValue = window.scrollY;
        const translateY = scrollValue * 0.5;
        header.style.backgroundPositionY = `-${translateY}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const assets = {
    logos: [
      { id: 'logo1', name: 'Primary Logo', description: 'Full color logo for light backgrounds', format: 'SVG, PNG', size: '2.3 MB' },
      { id: 'logo2', name: 'White Logo', description: 'White version for dark backgrounds', format: 'SVG, PNG', size: '2.1 MB' },
      { id: 'logo3', name: 'Icon Only', description: 'Logo mark without wordmark', format: 'SVG, PNG', size: '1.2 MB' },
      { id: 'logo4', name: 'Horizontal Logo', description: 'Horizontal layout version', format: 'SVG, PNG', size: '2.5 MB' },
      { id: 'logo5', name: 'Monochrome Logo', description: 'Single color version', format: 'SVG, PNG', size: '2.0 MB' },
      { id: 'logo6', name: 'Favicon', description: 'Browser favicon version', format: 'ICO, PNG', size: '0.5 MB' }
    ],
    templates: [
      { id: 'template1', name: 'PowerPoint Template', description: 'Corporate presentation template', format: 'PPTX', size: '15.8 MB' },
      { id: 'template2', name: 'Word Document', description: 'Letterhead and report template', format: 'DOCX', size: '7.2 MB' },
      { id: 'template3', name: 'Excel Template', description: 'Financial reporting template', format: 'XLSX', size: '5.6 MB' },
      { id: 'template4', name: 'Email Signature', description: 'Standard email signature template', format: 'HTML', size: '1.2 MB' },
      { id: 'template5', name: 'Proposal Template', description: 'Client proposal document', format: 'DOCX, PDF', size: '8.5 MB' }
    ],
    backgrounds: [
      { id: 'bg1', name: 'Abstract Purple', description: 'Gradient background pattern', format: 'JPG', size: '4.8 MB' },
      { id: 'bg2', name: 'Dark Texture', description: 'Dark textured background', format: 'JPG', size: '5.2 MB' },
      { id: 'bg3', name: 'Light Gradient', description: 'Subtle light gradient background', format: 'JPG', size: '3.7 MB' },
      { id: 'bg4', name: 'Geometric Pattern', description: 'Purple geometric pattern', format: 'JPG, PNG', size: '6.3 MB' },
      { id: 'bg5', name: 'Abstract Waves', description: 'Flowing abstract wave pattern', format: 'JPG, PNG', size: '5.9 MB' },
      { id: 'bg6', name: 'Dotted Pattern', description: 'Subtle dot pattern background', format: 'JPG, PNG', size: '4.1 MB' }
    ],
    guidelines: [
      { id: 'guide1', name: 'Brand Style Guide', description: 'Complete brand guidelines document', format: 'PDF', size: '24.6 MB' },
      { id: 'guide2', name: 'Logo Usage Guidelines', description: 'Rules for proper logo usage', format: 'PDF', size: '12.3 MB' },
      { id: 'guide3', name: 'Typography Guide', description: 'Font usage and typography rules', format: 'PDF', size: '8.5 MB' },
      { id: 'guide4', name: 'Color Palette Guide', description: 'Brand colors and color codes', format: 'PDF', size: '7.2 MB' },
      { id: 'guide5', name: 'Photography Style Guide', description: 'Guidelines for photo selection', format: 'PDF', size: '15.8 MB' }
    ]
  };

  const handleDownload = (name, format) => {
    showToast(`Downloading ${name} (${format})...`, 'info');
  };

  const filteredAssets = filter
    ? assets[activeTab].filter(item => 
        item.name.toLowerCase().includes(filter.toLowerCase()) || 
        item.description.toLowerCase().includes(filter.toLowerCase()) ||
        item.format.toLowerCase().includes(filter.toLowerCase())
      )
    : assets[activeTab];

  const getIconForAsset = (format) => {
    if (format.includes('PDF')) return <FileText className="h-10 w-10 text-rose-500" />;
    if (format.includes('JPG') || format.includes('PNG') || format.includes('SVG')) return <FileImage className="h-10 w-10 text-primary-500" />;
    if (format.includes('PPTX')) return <File className="h-10 w-10 text-orange-500" />;
    if (format.includes('DOCX')) return <File className="h-10 w-10 text-blue-500" />;
    if (format.includes('XLSX')) return <File className="h-10 w-10 text-green-500" />;
    return <File className="h-10 w-10 text-gray-500" />;
  };

  return (
    <AppLayout>
      <div className="px-6 mx-auto">
        <div 
          id="brandParallaxHeader"
          className="parallax-header w-full mb-8 rounded-lg overflow-hidden"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="parallax-content">
            <h1 className="text-3xl font-bold mb-2">Brand & Creative Assets</h1>
            <p className="text-lg opacity-90">Access and download official brand materials and templates</p>
          </div>
        </div>

        <div className="mb-6">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('logos')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'logos'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Logos
              </button>
              <button
                onClick={() => setActiveTab('templates')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'templates'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Deck Templates
              </button>
              <button
                onClick={() => setActiveTab('backgrounds')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'backgrounds'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Backgrounds
              </button>
              <button
                onClick={() => setActiveTab('guidelines')}
                className={`py-4 px-6 font-medium text-sm border-b-2 ${
                  activeTab === 'guidelines'
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                Style Guide
              </button>
            </nav>
          </div>
        </div>

        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700"
            placeholder={`Search ${activeTab}...`}
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAssets.map((asset) => (
            <Card key={asset.id} className="animate-on-scroll">
              <div className="flex items-center justify-center h-40 bg-gray-100 dark:bg-gray-800 rounded-md mb-4">
                {getIconForAsset(asset.format)}
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">{asset.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{asset.description}</p>
              <div className="flex justify-between items-center border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <span className="block">{asset.format}</span>
                  <span>{asset.size}</span>
                </div>
                <button
                  onClick={() => handleDownload(asset.name, asset.format)}
                  className="flex items-center px-3 py-1.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-sm"
                >
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </button>
              </div>
            </Card>
          ))}
        </div>

        {filteredAssets.length === 0 && (
          <div className="text-center py-12">
            <Image className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No assets found</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
      <ToastContainer />
    </AppLayout>
  );
};

export default BrandAssets;
