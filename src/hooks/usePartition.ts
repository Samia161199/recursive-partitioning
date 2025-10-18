import { useState } from 'react';
import { PartitionData } from '../Partition/types';
import { getRandomColor } from './colorUtils';
import { splitPartition, removePartition } from './partitionUtils';

export const usePartitions = () => {
  const [rootPartition, setRootPartition] = useState<PartitionData>({
    id: '1', direction: 'v', children: [], color: getRandomColor()
  });

  const handleSplit = (id: string, direction: 'v' | 'h') => {
    setRootPartition(current => splitPartition(current, id, direction));
  };

  const handleRemove = (id: string) => {
    setRootPartition(current => removePartition(current, id));
  };

  return { rootPartition, handleSplit, handleRemove };
};