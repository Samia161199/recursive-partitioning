import { PartitionData } from '../Partition/types';
import { getRandomColor } from './colorUtils';

export const splitPartition = (partitions: PartitionData, targetId: string, splitDirection: 'v' | 'h'): PartitionData => {
  if (partitions.id === targetId) {
    return {
      ...partitions,
      direction: splitDirection,
      children: [
        { id: `${targetId}-1`, direction: 'v', children: [], color: partitions.color },
        { id: `${targetId}-2`, direction: 'v', children: [], color: getRandomColor() }
      ]
    };
  }
  return partitions.children ? {
    ...partitions,
    children: partitions.children.map(child => splitPartition(child, targetId, splitDirection))
  } : partitions;
};

export const removePartition = (partitions: PartitionData, targetId: string): PartitionData => {
  if (partitions.id === targetId && partitions.id === '1') return partitions;
  if (partitions.children) {
    const filteredChildren = partitions.children.filter(child => child.id !== targetId);
    if (filteredChildren.length === 1) return { ...filteredChildren[0] };
    return { ...partitions, children: filteredChildren.map(child => removePartition(child, targetId)) };
  }
  return partitions;
};