import Partition from './Partition';
import { usePartitions } from './hooks/usePartition';

function App() {
  const { rootPartition, handleSplit, handleRemove } = usePartitions();

  return (
    <div className="h-screen bg-black">
      <Partition 
        partition={rootPartition}
        onSplit={handleSplit}
        onRemove={handleRemove}
      />
    </div>
  );
}

export default App;