const sendSMS = async () => 
    const data = {
      recipient: recipient,
      sender_id: senderId,
      type: 'plain',
      message: 'This is a test message 123'
    };
  
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  sendSMS();
