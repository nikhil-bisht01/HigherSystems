import React, { useEffect, useState } from 'react';

const Reports = () => {
  const [reports, setReports] = useState({});

  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch('http://localhost:5000/reports');
      const data = await response.json();
      setReports(data);
    };

    fetchReports();
  }, []);

  return (
    <div>
      <h1>Reports/Statistics</h1>
      <p>Total Orders: {reports.totalOrders}</p>
      <p>Pending Orders: {reports.pendingOrders}</p>
      <p>Delivered Orders: {reports.deliveredOrders}</p>
      <p>Returned Orders: {reports.returnedOrders}</p>
    </div>
  );
};

export default Reports;
