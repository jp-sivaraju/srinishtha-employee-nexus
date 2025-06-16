
import React, { useState } from 'react';
import AppraisalCyclesHeader from './AppraisalCyclesHeader';
import CreateCycleForm from './CreateCycleForm';
import AppraisalCycleCard from './AppraisalCycleCard';
import useAppraisalCycles from './useAppraisalCycles';

const AppraisalCycles = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  
  const {
    cycles,
    newCycle,
    setNewCycle,
    templates,
    departmentsList,
    handleCreateCycle,
    startCycle,
    duplicateCycle,
    archiveCycle,
    sendReminders
  } = useAppraisalCycles();

  const onCreateCycle = () => {
    const success = handleCreateCycle();
    if (success) {
      setShowCreateForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <AppraisalCyclesHeader onCreateClick={() => setShowCreateForm(true)} />

      {showCreateForm && (
        <CreateCycleForm
          newCycle={newCycle}
          setNewCycle={setNewCycle}
          onSubmit={onCreateCycle}
          onCancel={() => setShowCreateForm(false)}
          templates={templates}
          departmentsList={departmentsList}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {cycles.map((cycle) => (
          <AppraisalCycleCard
            key={cycle.id}
            cycle={cycle}
            onStart={startCycle}
            onDuplicate={duplicateCycle}
            onArchive={archiveCycle}
            onSendReminders={sendReminders}
          />
        ))}
      </div>
    </div>
  );
};

export default AppraisalCycles;
