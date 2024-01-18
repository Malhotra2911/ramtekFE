import React from 'react';

function ManaulTotal({ data }) {
  console.log('total manual', data);
  return (
    <>
      <span>
        ₹
        {data
          ? data.reduce((n, { total }) => parseFloat(n) + parseFloat(total), 0)
          : '0'}
      </span>
    </>
  );
}

export default ManaulTotal;
