import React from 'react';

const LoadData = ({img,name}) => {
    return (
<div className='my-4 border rounded'>
    <div className="card" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{name}</h5>
     </div> 
</div>
       </div>
    );
};

export default LoadData;