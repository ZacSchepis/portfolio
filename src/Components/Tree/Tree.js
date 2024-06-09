import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Tree.css"
const TreeItem = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const hasChildren = item.children && item.children.length > 0;
  
    return (
    <div className="nav-item">
        <div style={{ cursor: 'pointer', paddingLeft: '10px' }}>
        { hasChildren && (
            <span onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? '▼' : '►'}
            </span>
        )}
        <Link to={item.path} style={{ marginLeft: hasChildren ? '5px' : '15px' }}>
            {item.name}
        </Link>
        </div>
        { hasChildren && isOpen && (
            <div style={{ paddingLeft: '20px' }}>
            { item.children.map((child) => (
                <TreeItem key={child.name} item={child} />
            ))}
            </div>
        )}
    </div>
    );
};

export default function Tree ({ data }) {
    return (
        <div className='navigation'>
            <h1>Navigation</h1>
            {data.map((item) => (
                <TreeItem key={item.name} item={item} />
            ))}
        </div>
    )
}