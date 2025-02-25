export const uploadFile = async (file:File) => {
    try {
      const response = await fetch('https://api-26rxwsybga-uc.a.run.app/api/webturingmodels/save', {
        method: 'POST',
        headers: {
          'Content-Type': file.type || 'application/octet-stream'
        },
        body: file.stream() 
      });
      const result = await response.json();
      console.log('Súbor bol úspešne nahratý:', result);
    } catch (error) {
      console.error('Chyba pri nahrávaní súboru:', error);
    }
  };
  