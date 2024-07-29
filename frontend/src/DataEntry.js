import React, { useState } from 'react';

const DataEntry = () => {
  const [data, setData] = useState({ id: '', amount: '', currency: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert('Data sent successfully');
      } else {
        alert('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sending data');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID:</label>
        <input type="text" name="id" value={data.id} onChange={handleChange} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="text" name="amount" value={data.amount} onChange={handleChange} />
      </div>
      <div>
        <label>Currency:</label>
        <input type="text" name="currency" value={data.currency} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DataEntry;
