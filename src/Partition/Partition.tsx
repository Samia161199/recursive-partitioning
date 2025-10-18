import React from 'react';
import { PartitionProps } from './types';

const Partition: React.FC<PartitionProps> = ({ partition, onSplit, onRemove }) => {
  const { id, direction, children, color = 'bg-gray-200' } = partition;

  
  if (children?.length) {
    return (
      <div className={`flex h-full w-full ${direction === 'v' ? 'flex-col' : 'flex-row'}`}>
        {children.map(child => (
          <Partition 
            key={child.id} 
            partition={child} 
            onSplit={onSplit} 
            onRemove={onRemove} 
          />
        ))}
      </div>
    );
  }

  
  return (
    <div className={`border-2 border-black h-full w-full relative ${color}`}>
      <div className="absolute inset-0 flex items-center justify-center gap-2">
        <button 
          onClick={() => onSplit(id, 'v')}
          className="bg-white text-blue-500 border-2"
        >
          V
        </button>
        <button 
          onClick={() => onSplit(id, 'h')}
          className="bg-white text-green-500 border-2"
        >
          H
        </button>
        <button 
          onClick={() => onRemove(id)}
          className="bg-white text-red-500 border-2"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Partition;