export interface PartitionData {
  id: string;
  direction: 'v' | 'h';
  children?: PartitionData[];
  color?: string;
}

export interface PartitionProps {
  partition: PartitionData;
  onSplit: (id: string, direction: 'v' | 'h') => void;
  onRemove: (id: string) => void;
}
