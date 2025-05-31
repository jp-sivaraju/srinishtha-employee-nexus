
import React from 'react';
import { Card } from '../../ui/Card';
import { TrendingUp, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';

const PMOKPICards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">12%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Avg Scope Creep</div>
          </div>
          <div className="flex items-center text-amber-600">
            <TrendingUp className="h-6 w-6" />
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">9%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Schedule Slippage</div>
          </div>
          <div className="flex items-center text-rose-600">
            <TrendingDown className="h-6 w-6" />
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">7%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Budget Overrun</div>
          </div>
          <div className="flex items-center text-amber-600">
            <DollarSign className="h-6 w-6" />
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Critical Projects</div>
          </div>
          <div className="flex items-center text-rose-600">
            <AlertTriangle className="h-6 w-6" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PMOKPICards;
