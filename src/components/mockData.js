// Mock API data and functions
const mockData = [
    { id: '1', fullName: 'John Doe', address: '123 Main St', country: 'USA', pincode: '12345' },
    // Add more mock beneficiaries as needed
  ];
  
  // Mock API functions
  const mockApi = {
    fetchBeneficiaries: () => Promise.resolve(mockData),
    addBeneficiary: (newBeneficiary) => {
      mockData.push(newBeneficiary);
      return Promise.resolve(newBeneficiary);
    },
    updateBeneficiary: (updatedBeneficiary) => {
      const index = mockData.findIndex(b => b.id === updatedBeneficiary.id);
      if (index !== -1) {
        mockData[index] = updatedBeneficiary;
      }
      return Promise.resolve(updatedBeneficiary);
    },
    deleteBeneficiary: (id) => {
      const index = mockData.findIndex(b => b.id === id);
      if (index !== -1) {
        mockData.splice(index, 1);
      }
      return Promise.resolve();
    }
  };
  