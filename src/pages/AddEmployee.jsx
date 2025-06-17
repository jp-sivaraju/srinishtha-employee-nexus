import React, { useState } from 'react';
// import { db, storage } from '../../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useAuth } from '../../src/context/authcontext';

const AddEmployee = ({ onClose, onSubmitSuccess = () => {} }) => {
  const [currentStep, setCurrentStep] = useState(1);
//   const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    preferredName: '',
    gender: '',
    dob: '',
    bloodGroup: '',
    nationality: '',
    maritalStatus: '',
    panNumber: '',
    aadharNumber: '',
    passportNumber: '',
    photo: null,
    personalEmail: '',
    officialEmail: '',
    mobileNumber: '',
    alternateContactNumber: '',
    presentAddress: '',
    permanentAddress: '',
    emergencyContactName: '',
    emergencyContactRelationship: '',
    emergencyContactNumber: '',
    emergencyContactAddress: '',
    employeeId: 'EMP' + Math.random().toString().substring(2, 8).toUpperCase(),
    department: '',
    designation: '',
    reportingManager: '',
    employmentType: '',
    workLocation: '',
    dateOfJoining: '',
    workShift: '',
    probationPeriod: false,
    aadharCardFile: null,
    panCardFile: null,
    drivingLicensePassportFile: null,
    educationalCertificatesFile: null,
    experienceLettersFile: null,
    latestPayslipFile: null,
    addressProofFile: null,
    signatureImageFile: null,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const nextStep = () => setCurrentStep(prev => prev < 4 ? prev + 1 : prev);
  const prevStep = () => setCurrentStep(prev => prev > 1 ? prev - 1 : prev);

  const uploadFile = async (file, path) => {
    if (!file) return null;
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const fileFields = [
        { field: 'photo', path: `employees/${formData.employeeId}/photo` },
        { field: 'aadharCardFile', path: `employees/${formData.employeeId}/aadharCard` },
        { field: 'panCardFile', path: `employees/${formData.employeeId}/panCard` },
        { field: 'drivingLicensePassportFile', path: `employees/${formData.employeeId}/drivingLicensePassport` },
        { field: 'educationalCertificatesFile', path: `employees/${formData.employeeId}/educationalCertificates` },
        { field: 'experienceLettersFile', path: `employees/${formData.employeeId}/experienceLetters` },
        { field: 'latestPayslipFile', path: `employees/${formData.employeeId}/latestPayslip` },
        { field: 'addressProofFile', path: `employees/${formData.employeeId}/addressProof` },
        { field: 'signatureImageFile', path: `employees/${formData.employeeId}/signatureImage` },
      ];

      const fileUrls = {};
      for (const { field, path } of fileFields) {
        if (formData[field]) {
          fileUrls[field] = await uploadFile(formData[field], path);
        }
      }

      const employeeData = {
        ...formData,
        photo: fileUrls.photo || null,
        aadharCardFile: fileUrls.aadharCardFile || null,
        panCardFile: fileUrls.panCardFile || null,
        drivingLicensePassportFile: fileUrls.drivingLicensePassportFile || null,
        educationalCertificatesFile: fileUrls.educationalCertificatesFile || null,
        experienceLettersFile: fileUrls.experienceLettersFile || null,
        latestPayslipFile: fileUrls.latestPayslipFile || null,
        addressProofFile: fileUrls.addressProofFile || null,
        signatureImageFile: fileUrls.signatureImageFile || null,
        // createdBy: currentUser?.uid || 'anonymous',
        createdAt: new Date().toISOString(),
      };

      await addDoc(collection(db, 'employees'), employeeData);

      if (typeof onSubmitSuccess === 'function') {
        onSubmitSuccess();
      }
      if (typeof onClose === 'function') {
        onClose();
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const progressPercentage = (currentStep / 4) * 100;

  const inputClass = "w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";
  const cardClass = "bg-white p-6 rounded-lg shadow-md mb-6";
  const formGroupClass = "mb-4";

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Personal Information</h3>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">👤 Basic Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={formGroupClass}>
                  <label htmlFor="firstName" className={labelClass}>First Name (Optional)</label>
                  <input type="text" name="firstName" id="firstName" placeholder="Enter first name" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="middleName" className={labelClass}>Middle Name (Optional)</label>
                  <input type="text" name="middleName" id="middleName" placeholder="Enter middle name" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="lastName" className={labelClass}>Last Name (Optional)</label>
                  <input type="text" name="lastName" id="lastName" placeholder="Enter last name" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="preferredName" className={labelClass}>Preferred Name / Nickname (Optional)</label>
                  <input type="text" name="preferredName" id="preferredName" placeholder="What should we call you?" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="gender" className={labelClass}>Gender (Optional)</label>
                  <select name="gender" id="gender" onChange={handleChange} className={inputClass}>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="dob" className={labelClass}>Date of Birth (Optional)</label>
                  <input type="text" name="dob" id="dob" placeholder="dd-mm-yyyy" onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">➕ Additional Details</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={formGroupClass}>
                  <label htmlFor="bloodGroup" className={labelClass}>Blood Group (Optional)</label>
                  <select name="bloodGroup" id="bloodGroup" onChange={handleChange} className={inputClass}>
                    <option value="">Select blood group</option>
                    <option value="A+">A+</option> <option value="A-">A-</option>
                    <option value="B+">B+</option> <option value="B-">B-</option>
                    <option value="AB+">AB+</option> <option value="AB-">AB-</option>
                    <option value="O+">O+</option> <option value="O-">O-</option>
                  </select>
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="nationality" className={labelClass}>Nationality (Optional)</label>
                  <input type="text" name="nationality" id="nationality" placeholder="Enter nationality" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="maritalStatus" className={labelClass}>Marital Status (Optional)</label>
                  <select name="maritalStatus" id="maritalStatus" onChange={handleChange} className={inputClass}>
                    <option value="">Select marital status</option>
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="divorced">Divorced</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">💳 Identity Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={formGroupClass}>
                  <label htmlFor="panNumber" className={labelClass}>PAN Number (Optional)</label>
                  <input type="text" name="panNumber" id="panNumber" placeholder="ABCDE1234F" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="aadharNumber" className={labelClass}>Aadhar Number (Optional)</label>
                  <input type="text" name="aadharNumber" id="aadharNumber" placeholder="1234 5678 9012" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="passportNumber" className={labelClass}>Passport Number (Optional)</label>
                  <input type="text" name="passportNumber" id="passportNumber" placeholder="Enter passport number" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="photo" className={labelClass}>Upload Photo (Optional)</label>
                  <input type="file" name="photo" id="photo" onChange={handleChange} className={`${inputClass} p-1.5`} />
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Contact Details</h3>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">📧 Email & Phone</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={formGroupClass}>
                  <label htmlFor="personalEmail" className={labelClass}>Personal Email (Optional)</label>
                  <input type="email" name="personalEmail" id="personalEmail" placeholder="your.email@example.com" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="officialEmail" className={labelClass}>Official Email (Optional)</label>
                  <input type="email" name="officialEmail" id="officialEmail" placeholder="will.be@company.com" onChange={handleChange} className={inputClass} />
                  <small className="text-xs text-gray-500 mt-1">This will be auto-generated by HR</small>
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="mobileNumber" className={labelClass}>Mobile Number (Optional)</label>
                  <input type="tel" name="mobileNumber" id="mobileNumber" placeholder="+91 9876543210" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="alternateContactNumber" className={labelClass}>Alternate Contact Number (Optional)</label>
                  <input type="tel" name="alternateContactNumber" id="alternateContactNumber" placeholder="+91 9876543210" onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">🏠 Address Information</h4>
              <div className={formGroupClass}>
                <label htmlFor="presentAddress" className={labelClass}>Present Address (Optional)</label>
                <textarea name="presentAddress" id="presentAddress" placeholder="Enter your current residential address" onChange={handleChange} className={`${inputClass} min-h-[80px]`}></textarea>
              </div>
              <div className={formGroupClass}>
                <label htmlFor="permanentAddress" className={labelClass}>Permanent Address (Optional)</label>
                <textarea name="permanentAddress" id="permanentAddress" placeholder="Enter your permanent address (if different from present)" onChange={handleChange} className={`${inputClass} min-h-[80px]`}></textarea>
              </div>
            </div>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">🆘 Emergency Contact</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={formGroupClass}>
                  <label htmlFor="emergencyContactName" className={labelClass}>Emergency Contact Name (Optional)</label>
                  <input type="text" name="emergencyContactName" id="emergencyContactName" placeholder="Full name of emergency contact" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="emergencyContactRelationship" className={labelClass}>Relationship (Optional)</label>
                  <input type="text" name="emergencyContactRelationship" id="emergencyContactRelationship" placeholder="Father, Mother, Spouse, etc." onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="emergencyContactNumber" className={labelClass}>Emergency Contact Number (Optional)</label>
                  <input type="tel" name="emergencyContactNumber" id="emergencyContactNumber" placeholder="+91 9876543210" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="emergencyContactAddress" className={labelClass}>Emergency Contact Address (Optional)</label>
                  <input type="text" name="emergencyContactAddress" id="emergencyContactAddress" placeholder="Address of emergency contact" onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Employment Details</h3>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">💼 Job Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={formGroupClass}>
                  <label htmlFor="employeeId" className={labelClass}>Employee ID (Optional)</label>
                  <input type="text" name="employeeId" id="employeeId" value={formData.employeeId} readOnly className={`${inputClass} bg-gray-100`} />
                  <small className="text-xs text-gray-500 mt-1">Auto-generated</small>
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="department" className={labelClass}>Department (Optional)</label>
                  <select name="department" id="department" onChange={handleChange} className={inputClass}>
                    <option value="">Select department</option>
                    <option value="engineering">Engineering</option>
                    <option value="hr">Human Resources</option>
                    <option value="sales">Sales</option>
                    <option value="marketing">Marketing</option>
                  </select>
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="designation" className={labelClass}>Designation / Role (Optional)</label>
                  <input type="text" name="designation" id="designation" placeholder="Software Engineer, Designer, etc." onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="reportingManager" className={labelClass}>Reporting Manager (Optional)</label>
                  <input type="text" name="reportingManager" id="reportingManager" placeholder="Manager's name" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="employmentType" className={labelClass}>Employment Type (Optional)</label>
                  <select name="employmentType" id="employmentType" onChange={handleChange} className={inputClass}>
                    <option value="">Select employment type</option>
                    <option value="full-time">Full-Time</option>
                    <option value="part-time">Part-Time</option>
                    <option value="contract">Contract</option>
                    <option value="intern">Intern</option>
                  </select>
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="workLocation" className={labelClass}>Work Location (Optional)</label>
                  <input type="text" name="workLocation" id="workLocation" placeholder="Office location or Remote" onChange={handleChange} className={inputClass} />
                </div>
              </div>
            </div>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">📅 Timeline & Schedule</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={formGroupClass}>
                  <label htmlFor="dateOfJoining" className={labelClass}>Date of Joining (Optional)</label>
                  <input type="text" name="dateOfJoining" id="dateOfJoining" placeholder="dd-mm-yyyy" onChange={handleChange} className={inputClass} />
                </div>
                <div className={formGroupClass}>
                  <label htmlFor="workShift" className={labelClass}>Work Shift / Timing (Optional)</label>
                  <select name="workShift" id="workShift" onChange={handleChange} className={inputClass}>
                    <option value="">Select work shift</option>
                    <option value="9to5">9 AM - 5 PM</option>
                    <option value="10to6">10 AM - 6 PM</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">⏳ Probation Details</h4>
              <div className="form-group probation-toggle">
                <label htmlFor="probationPeriod" className={labelClass}>Probation Period (Optional)</label>
                <div className="toggle-switch">
                  <input type="checkbox" id="probationPeriod" name="probationPeriod" checked={formData.probationPeriod} onChange={handleChange} />
                  <label htmlFor="probationPeriod" className="slider"></label>
                </div>
                <span>Will this employee have a probation period?</span>
              </div>
              <style jsx>{`
                .toggle-checkbox:checked {
                  right: 0;
                  border-color: #4A5568;
                }
                .toggle-checkbox:checked + .toggle-label {
                  background-color: #4A5568;
                }
              `}</style>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h3 className="text-xl font-semibold text-center text-gray-700 mb-6">Document Upload</h3>
            <div className={cardClass}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">📄 Document Upload</h4>
              <p className="text-sm text-gray-600 mb-4">Please upload clear, readable copies of the following documents. Accepted formats: PDF, JPG, PNG (Max size: 5MB per file)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { label: 'Aadhar Card (Optional)', name: 'aadharCardFile' },
                  { label: 'PAN Card (Optional)', name: 'panCardFile' },
                  { label: 'Driving License / Passport (Optional)', name: 'drivingLicensePassportFile' },
                  { label: 'Educational Certificates (Optional)', name: 'educationalCertificatesFile' },
                  { label: 'Experience Letters (Optional)', name: 'experienceLettersFile' },
                  { label: 'Latest Payslip (Optional)', name: 'latestPayslipFile' },
                  { label: 'Address Proof (Optional)', name: 'addressProofFile' },
                  { label: 'Signature Image (Optional)', name: 'signatureImageFile' },
                ].map(file => (
                  <div className={formGroupClass} key={file.name}>
                    <label htmlFor={file.name} className={labelClass}>{file.label}</label>
                    <input type="file" name={file.name} id={file.name} onChange={handleChange} className={`${inputClass} p-1.5 text-sm`} />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${cardClass} bg-blue-50 border border-blue-200`}>
              <h4 className="text-lg font-semibold text-blue-700 mb-3">✅ Document Checklist</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Ensure all documents are clear and readable.</li>
                <li>File size should not exceed 5MB per document.</li>
                <li>Accepted formats: PDF, JPG, JPEG, PNG.</li>
                <li>Make sure personal information is visible and not cut off.</li>
                <li>For signature, use a white background with clear signature.</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {error && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">{error}</div>}
      <form onSubmit={handleSubmit}>
        {renderStep()}
        <div className="mt-8 pt-6 border-t border-gray-300 flex justify-between items-center">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-2.5 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
              disabled={loading}
            >
              Previous Step
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
            disabled={loading}
          >
            Cancel
          </button>
          {currentStep < 4 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-150 ease-in-out shadow-md hover:shadow-lg"
              disabled={loading}
            >
              Next Step
            </button>
          )}
          {currentStep === 4 && (
            <button
              type="submit"
              className="px-6 py-2.5 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition duration-150 ease-in-out shadow-md hover:shadow-lg flex items-center"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Application'} <span className="ml-2">🚀</span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
