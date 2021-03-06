import React, { useState } from 'react';

function selectTab(selectedTabIndex, tabValues) {
  const newTabValues = [...tabValues];
  newTabValues.forEach((val) => (val.isSelected = false));
  newTabValues[selectedTabIndex].isSelected = true;
  return newTabValues;
}

function Tab({ text, isSelected, setState, index }) {
  return (
    <div
      onClick={() => {
        setState((prev) => {
          return {
            selectedIndex: index,
            values: selectTab(index, prev.values),
          };
        });
      }}
      className={`${
        isSelected
          ? 'bg-[#d5d5d5] hover:bg-[#d5d5d5] text-black'
          : 'bg-[#747474] hover:bg-[#3e3e3f]'
      } text-xs sm:text-base lg:text-lg px-2 lg:px-8 mx-1 lg:mx-3 py-1 lg:py-2 rounded-xl cursor-pointer flex items-center justify-center text-center`}
    >
      {text}
    </div>
  );
}

export default function Tabs({ tabValues, setTabValues }) {
  return (
    <div className="flex sm:justify-center w-full overflow-x-auto py-1">
      {tabValues.values.map((tabValue, index) => {
        return (
          <Tab
            key={index}
            text={tabValue.text}
            isSelected={tabValue.isSelected}
            setState={setTabValues}
            index={index}
          />
        );
      })}
    </div>
  );
}
