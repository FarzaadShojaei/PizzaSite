import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({ 
  fileName, 
  filePath, 
  buttonText = 'Download', 
  className = '', 
  variant = 'primary',
  size = 'medium',
  icon = '⬇️'
}) => {
  const handleDownload = async () => {
    try {
      // Construct the full URL for the file
      const fileUrl = `${window.location.origin}${filePath}`;
      
      // Fetch the file
      const response = await fetch(fileUrl);
      
      if (!response.ok) {
        throw new Error(`Failed to download file: ${response.statusText}`);
      }
      
      // Get the file blob
      const blob = await response.blob();
      
      // Create a temporary URL for the blob
      const blobUrl = window.URL.createObjectURL(blob);
      
      // Create a temporary anchor element and trigger download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = fileName;
      link.style.display = 'none';
      
      // Add to document, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the blob URL
      window.URL.revokeObjectURL(blobUrl);
      
      // Optional: Show success message
      console.log(`Successfully downloaded: ${fileName}`);
      
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const buttonClasses = [
    'download-button',
    `download-button--${variant}`,
    `download-button--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button 
      className={buttonClasses}
      onClick={handleDownload}
      type="button"
      aria-label={`Download ${fileName}`}
    >
      <span className="download-button__icon" role="img" aria-hidden="true">
        {icon}
      </span>
      <span className="download-button__text">
        {buttonText}
      </span>
    </button>
  );
};

export default DownloadButton;
