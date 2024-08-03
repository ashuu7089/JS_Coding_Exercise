const sendSMS = async () => {
    const url = 'https://unitxt.co.tz/api/http/sms/send';
    const token = '116|Xrcrr1eVs14e6u6HqXjKs1jEpakn3Mmo2AS2RzX';
    const senderId ="KARIBU";
    const recipient = 255674780007;
  
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