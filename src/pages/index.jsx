import React, { useState, useEffect } from 'react';
import Tutorial from '../components/tutorial';
import Tabs from '../components/ui/tabs/';


function Square({text})
{
  return <div className='w-72 h-72 relative bg-blue-300'>{text}</div>
}
const initialTabValues = {
  selectedIndex: 0,
  values: [
    { text: 'Tutorial', isSelected: true },
    { text: '2', isSelected: false },
    { text: '3', isSelected: false },
    { text: '4', isSelected: false },
    { text: '5', isSelected: false },
    { text: '6', isSelected: false },
    { text: '7', isSelected: false },
    { text: 'Documentation', isSelected: false },
  ],
};
const IndexPage = () => {
  const [tabValues, setTabValues] = useState(initialTabValues);
  return (
    <main className='h-full text-gray-200'>
      <div className="bg-[#747474] text-6xl flex items-center justify-center py-6 mb-6">
        Dubins Car Sandbox
      </div>
      <Tabs tabValues={tabValues} setTabValues={setTabValues} />

      <div>
        {
          {
            0: <Tutorial/>,
            1: <Square text={"Tab 1"}/>,
            2: <Square text={"Tab 2"}/>,
            3: <Square text={"Tab 3"}/>,
            4: <Square text={"Tab 4"}/>,
            5: <Square text={"Tab 5"}/>,
            6: <Square text={"Tab 6"}/>,
            7: <Square text={"Tab 7"}/>,
            8: <Square text={"Tab 8"}/>,
          }[tabValues.selectedIndex]
        }
      </div>
    </main>
  );
};

export default IndexPage;